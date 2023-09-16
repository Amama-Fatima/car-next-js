/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    assetPrefix: process.env.BASE_PATH || '',
    publicRuntimeConfig: {
      basePath: process.env.BASE_PATH || '',
    },
  
}

module.exports = nextConfig
