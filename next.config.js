/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "output",
  basePath: '/nexus',
  assetPrefix: '/nexus/',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
