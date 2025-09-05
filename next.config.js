/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  // Exclude sanity-studio from build
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('sanity-studio')
    }
    return config
  },
  // Exclude sanity-studio directory from compilation
  experimental: {
    outputFileTracingExcludes: {
      '*': ['./sanity-studio/**/*']
    }
  }
}

module.exports = nextConfig
