import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Turbopack's persistent build cache records build environment values.
    // Keep runtime-only admin secrets out of that serialized cache.
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
