/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // App Router is default; keeping explicit for clarity
    appDir: true
  }
};

module.exports = nextConfig;
