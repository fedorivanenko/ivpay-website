import createMDX from '@next/mdx'
import withPlaiceholder from "@plaiceholder/next";
import withBundleAnalyzer from '@next/bundle-analyzer';
import nextComposePlugins from "next-compose-plugins";

const { withPlugins } = nextComposePlugins;

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  webpack: (config, { isServer }) => {
    // Optimize Three.js
    config.resolve.alias = {
      ...config.resolve.alias,
      'three$': 'three/src/Three.js',
    };

    // Exclude Three.js from server-side rendering
    if (isServer) {
      config.externals = [
        ...config.externals,
        'three',
        'globe.gl',
        'react-globe.gl'
      ];
    }

    // SVG handling
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
  productionBrowserSourceMaps: process.env.ANALYZE === 'true',
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    //domains: ["***"], // Replace with your actual domains
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withPlugins(
  [
    withPlaiceholder,
    bundleAnalyzer,
    withMDX,
  ],
  nextConfig
);