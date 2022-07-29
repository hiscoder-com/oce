const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  eslint: {
    dirs: ['pages', 'utils', 'components', 'hooks'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'raw.githubusercontent.com'],
  },
}

module.exports = nextConfig
