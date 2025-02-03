const siteUrl = process.env.VERCEL_TARGET_ENV == 'production'
  ? 'https://destinysoul.xyz' 
  : 'https://remaster.destinysoul.pages.dev';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: false,
};
