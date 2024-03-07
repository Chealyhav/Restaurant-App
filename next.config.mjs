/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //   domains: ['127.0.0.1'],
    // },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.alias['react-scroll'] = 'react-scroll/modules';
      }
      return config;
    },

    experimental: {
      appDir: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '127.0.0.1',
          port: '1337',
          pathname: '/uploads/**',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        }
      ],
    },
  };
  
  export default nextConfig;