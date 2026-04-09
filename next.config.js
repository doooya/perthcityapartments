/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  env: {
    SITE_URL: 'https://perthcityapartments.com',
    SITE_NAME: 'Perth City Apartments',
  },
}
module.exports = nextConfig
