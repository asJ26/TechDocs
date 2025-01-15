/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/TechDocs' : '';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: isProd ? `${basePath}/` : '',
  trailingSlash: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  }
};

export default nextConfig;
