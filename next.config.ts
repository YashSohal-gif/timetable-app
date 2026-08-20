import type { NextConfig } from "next";

// When building on GitHub Actions for GitHub Pages, the site is served from
// https://<user>.github.io/<repo>/ — so every asset path needs the repo
// name prefixed. Locally (npm run dev) there's no prefix.
const repoName = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoName,
  assetPrefix: repoName ? `${repoName}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
