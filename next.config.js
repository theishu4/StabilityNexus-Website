/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "output",
  basePath: '',
  assetPrefix: '/',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
