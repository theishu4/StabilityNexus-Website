/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "output",
  basePath: '/Website',
  assetPrefix: '/Website/',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
