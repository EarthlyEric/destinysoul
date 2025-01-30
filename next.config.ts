import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  env: {
    COMMIT_SHA: process.env.CF_PAGES_COMMIT_SHA || 'development',
  }
};

export default nextConfig;
