/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "output",
  basePath: '/Website-2',
  assetPrefix: '/Website-2/',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
