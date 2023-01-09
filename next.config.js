/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  reactStrictMode: true
};

module.exports = nextConfig;
