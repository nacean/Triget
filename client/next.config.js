/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["image.fmkorea.com"],
  },
};

module.exports = nextConfig;
