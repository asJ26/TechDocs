/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/TechDocs',
  assetPrefix: '/TechDocs/',
};

export default nextConfig;
