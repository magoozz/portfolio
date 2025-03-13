import path from 'path';

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.resolve.modules.push(path.resolve('./src'));
    return config;
  },
};

export default nextConfig;

