/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyjson.com",
      },
    ],
    // domains:["dummyjson.com"] //this has warning regarding loading the image from link. use remotePatterns.
  },
};

module.exports = nextConfig;
