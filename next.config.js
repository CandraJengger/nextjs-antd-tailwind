const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    wicara_url: process.env.NEXT_PUBLIC_WICARA_URL
  }
};

module.exports = nextConfig;
