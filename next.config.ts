import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/3d-map',
        destination: '/map',
        permanent: true,
      },
      {
        source: '/mt-matterhorn-3d-map',
        destination: '/map',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
