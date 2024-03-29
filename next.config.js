/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/altrone-docs',
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  headers: () => [
    {
      // Create glob to target specific pages you want
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
}

module.exports = nextConfig
