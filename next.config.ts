import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
        ignoreDuringBuilds: false,
    },
  
    images: {
     remotePatterns: [{
      protocol: "https",
      hostname: "**"
     }],
    }
  /* config options here */
};

export default nextConfig;
