/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "image.fmkorea.com",
      "www.skyscanner.net",
      "logos.skyscnr.com",
      "media-cdn.tripadvisor.com",
      "cf.bstatic.com",
    ],
  },
};

module.exports = nextConfig;
