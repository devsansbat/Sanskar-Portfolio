import type { NextConfig } from "next";

const repoName = "Sanskar-Portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "cdn.buymeacoffee.com" },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
