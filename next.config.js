const withMDX = require('@next/mdx')()

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = withMDX(nextConfig)