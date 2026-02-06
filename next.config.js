/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable static export for hosts like Netlify.
  output: "export",
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
