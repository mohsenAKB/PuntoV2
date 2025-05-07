import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app-dev.punto.ir",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "app.punto.ir",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
