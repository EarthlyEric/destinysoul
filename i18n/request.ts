import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';
import { defaultLocale, COOKIE_NAME } from './config';
 
export default getRequestConfig(async () => {
  const cookie = await cookies();
  let locale = defaultLocale;
  if (cookie.get(COOKIE_NAME)?.value == 'undefined') {
    locale = defaultLocale;
  }else{
    locale = cookie.get(COOKIE_NAME)?.value || defaultLocale;
  }
 
  return {
    locale,
    messages: (await import(`@/locales/${locale}.json`)).default
  };
})