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
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_URL: isProd ? 'https://asj26.github.io/TechDocs' : ''
  },
  webpack: (config, { dev, isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }

    // Improve caching
    config.cache = {
      type: 'filesystem',
      cacheDirectory: '.next/cache',
      buildDependencies: {
        config: [import.meta.url],
      },
    };

    return config;
  },
}

export default nextConfig;
