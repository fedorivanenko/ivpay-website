// next.config.mjs

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false,
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  