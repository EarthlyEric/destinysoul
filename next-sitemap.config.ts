/** @type {import('next-sitemap').IConfig} */
module.exports = {
    /** Import SiteUrl from Cloudflare Page Environment Variable*/
    siteUrl: process.env.CF_PAGES_URL || 'https://destinysoul.xyz',
    generateRobotsTxt: false,
  };