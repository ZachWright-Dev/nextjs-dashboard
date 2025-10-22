import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental' // Allows to adopt PPR for specific routes
  }
};

export default nextConfig;
