import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';
import { defaultLocale, COOKIE_NAME } from './config';
 
export default getRequestConfig(async () => {
  const cookie = await cookies();
  let locale;
  if (cookie.get(COOKIE_NAME)?.value == 'undefined') {
    locale = defaultLocale;
  }else{
    locale = cookie.get(COOKIE_NAME)?.value
  }
 
  return {
    locale,
    messages: (await import(`@/locales/${locale}.json`)).default
  };
})