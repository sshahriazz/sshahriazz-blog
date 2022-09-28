/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ui.mantine.dev']
  }
};

module.exports = nextConfig;
