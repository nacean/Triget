/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["image.fmkorea.com"],
  },
};

module.exports = nextConfig;
