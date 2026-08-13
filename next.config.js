/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dSign' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/dSign' : '',
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/node_modules', '**/.git', '**/System Volume Information', '**/$RECYCLE.BIN']
    };
    return config;
  }
}

module.exports = nextConfig
