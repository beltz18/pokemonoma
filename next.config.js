const runtimeCaching = require('next-pwa/cache')
const withPWA        = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  disable:process.env.NODE_ENV === 'development',
})

const nextConfig = withPWA({})
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  // redirects: async () => {
  //   return [
  //     {
  //       source: '/api/login',
  //       destination: '/dashboard',
  //       permanent: true
  //     }
  //   ]
  // },
  ...nextConfig,
}