/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  allowedDevOrigins: ['*.lightsprint.ai', '*.e2b.app'],
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  // Enable static exports for deployment flexibility
  trailingSlash: true,
  output: 'export',
}

module.exports = nextConfig