import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  webpack(config) {
    // Exclude svg from the default Next.js file loader
    const assetRule = config.module.rules.find((rule: any) =>
      rule?.test instanceof RegExp && rule.test.test('.svg')
    );
  
    if (assetRule) {
      assetRule.exclude = /\.svg$/i;
    }
  
    // Add custom rules
    config.module.rules.push(
      // Handle SVGs imported with ?url as a static file
      {
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
        type: 'asset/resource',
      },
      // Handle plain SVGs as React components via SVGR
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/, // Only JS/TS files
        resourceQuery: { not: [/url/] }, // Exclude *.svg?url
        use: ['@svgr/webpack'],
      }
    );
  
    return config;
  }
  
};

export default nextConfig;
