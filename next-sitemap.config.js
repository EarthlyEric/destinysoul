const siteUrl = process.env.VERCEL_TARGET_ENV == 'production'
  ? 'https://destinysoul.xyz' 
  : 'https://dev.destinysoul.xyz';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: false,
};
