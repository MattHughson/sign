/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'frame-src *; ' // Allow framing from all domains
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
