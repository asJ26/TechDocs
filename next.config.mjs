/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  // Remove basePath and assetPrefix when using custom domain
  trailingSlash: true,
  // Ensure proper path handling in production
  env: {
    NEXT_PUBLIC_BASE_URL: isProd ? 'https://asj26.github.io/TechDocs' : ''
  }
};

export default nextConfig;
