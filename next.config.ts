import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
        ignoreDuringBuilds: false,
    },
  
    images: {
      domains: ['localhost', 'images.unsplash.com', 'res.cloudinary.com', 'static.promediateknologi.id', 'cdn-icons-png.flaticon.com'],
     remotePatterns: [{
      protocol: "http",
      hostname: "**"
     }],
    }
  /* config options here */
};

export default nextConfig;
