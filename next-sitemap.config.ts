import { IConfig } from 'next-sitemap'

const siteUrl = process.env.CF_PAGES_BRANCH == 'master' 
  ? 'https://destinysoul.xyz' 
  : 'https://remaster.destinysoul.pages.dev';

const config: IConfig = {
  /** Read SiteUrl from  Cloudflare Pages Environment variable  */
  siteUrl: siteUrl,
  generateRobotsTxt: false,
}

export default config;