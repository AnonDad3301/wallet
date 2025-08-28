/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  async redirects() {
    return [{ source: '/investors', destination: '/contacts', permanent: true }];
  },
};
module.exports = nextConfig;
