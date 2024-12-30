import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "res.cloudinary.com",
        pathname: "/dv3wezqsc/**",
      },
      {
        protocol: 'https',
        hostname: "res.cloudinary.com",
        pathname: "/dz209s6jk/**",
      },
    ]
  }
};

export default nextConfig;
