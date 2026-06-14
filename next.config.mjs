/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produces a fully static site in ./out — ideal for GitHub Pages.
  output: 'export',
  // GitHub Pages serves directories; trailing slashes map /work/explorix -> /work/explorix/index.html
  trailingSlash: true,
  // next/image optimization needs a server; static export must ship raw images.
  images: { unoptimized: true },
  // No ESLint config is shipped; don't let a missing lint setup fail the CI build.
  // TypeScript type-checking stays ON so real errors still surface.
  eslint: { ignoreDuringBuilds: true },
  // NOTE: With a CUSTOM DOMAIN (served at the root) you do NOT need basePath.
  // If you ever host at https://<user>.github.io/<repo>/ instead, uncomment and set:
  // basePath: '/<repo>',
  // assetPrefix: '/<repo>/',
};

export default nextConfig;
