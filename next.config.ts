import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // sve putanje
      },
      {
        protocol: "https",
        hostname: "grateful-confidence-9701e6ca6a.media.strapiapp.com",
        pathname: "/**", // sve putanje
      },
    ],
  },
};

export default nextConfig;
