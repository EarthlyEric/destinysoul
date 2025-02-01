const siteUrl = process.env.CF_PAGES_BRANCH == 'master' 
  ? 'https://destinysoul.xyz' 
  : 'https://remaster.destinysoul.pages.dev';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: false,
};