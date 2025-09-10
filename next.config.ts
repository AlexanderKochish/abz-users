import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  experimental: {
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      new URL('https://frontend-test-assignment-api.abz.agency/images/**'),
    ],
  },
}

export default nextConfig
