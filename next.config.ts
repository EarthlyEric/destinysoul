import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  env: {
    COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA || 'development',
  },
  output: "standalone",
};

export default withNextIntl(nextConfig);
