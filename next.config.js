/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ytimg.com']
  },
  redirects: async () => {
    return [
      {
        source: '/search',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
