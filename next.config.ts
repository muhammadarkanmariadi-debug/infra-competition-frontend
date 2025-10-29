import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
        ignoreDuringBuilds: false,
    },
  
    images: {
      domains: ['localhost', 'images.unsplash.com'],
     remotePatterns: [{
      protocol: "http",
      hostname: "**"
     }],
    }
  /* config options here */
};

export default nextConfig;
