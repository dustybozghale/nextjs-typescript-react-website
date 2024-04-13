/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(svg)$/i,
      type: 'asset',
      resourceQuery: { not: /svgr/ },
    });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /svgr/, // *.svg?svgr
      use: ['@svgr/webpack'],
    });
    return config;
  },
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
        pathname: '/f/**',
      },
      {
        protocol: 'https',
        hostname: 'significa.co',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
