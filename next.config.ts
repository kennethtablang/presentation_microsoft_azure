import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Links from before the course split pointed at the Azure deck without a course prefix.
  async redirects() {
    return [
      { source: "/presenter", destination: "/azure/presenter", permanent: false },
      { source: "/review", destination: "/azure/review/test", permanent: false },
      { source: "/review/:path*", destination: "/azure/review/:path*", permanent: false },
    ];
  },
};

export default nextConfig;
