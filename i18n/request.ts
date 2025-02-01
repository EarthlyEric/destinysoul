import { cookies } from 'next/headers';
import {getRequestConfig} from 'next-intl/server';

 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const defaultlocale = 'en-US';
  const COOKIE_NAME = 'DS_LOCALE';

  const cookieStore = cookies();
  const locale = (await cookieStore).get(COOKIE_NAME)?.value || defaultlocale;
 
  return {
    locale,
    messages: (await import(`@/locales/${locale}.json`)).default
  };
})