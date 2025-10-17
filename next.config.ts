import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
        ignoreDuringBuilds: false,
    },
  
    images: {
      domains: ['localhost'],
     remotePatterns: [{
      protocol: "http",
      hostname: "**"
     }],
    }
  /* config options here */
};

export default nextConfig;
