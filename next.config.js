/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ytimg.com', 'yt3.ggpht.com']
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
