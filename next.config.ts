import type { NextConfig } from "next";
import { networkInterfaces } from "node:os";

const localNetworkOrigins = Object.values(networkInterfaces())
  .flatMap((addresses) => addresses ?? [])
  .filter(
    (address) =>
      address.family === "IPv4" &&
      !address.internal &&
      /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(address.address),
  )
  .map((address) => address.address);

const nextConfig: NextConfig = {
  allowedDevOrigins: [...new Set(localNetworkOrigins)],
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 604800,
  },
  async headers() {
    return [
      {
        source:
          "/:all*(jpg|jpeg|png|webp|avif|gif|svg|ico|woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(css|js)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
