import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '66f539819aa4891f2a246343.mockapi.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
