/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",      // fully static export -> ./out
  images: {
    unoptimized: true,   // required for static export
  },
  trailingSlash: true,   // nicer for static hosts (GitHub Pages, etc.)
};

export default nextConfig;
