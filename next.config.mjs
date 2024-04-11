import createMDX from '@next/mdx';
import createBundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';

// Rehype plugins
import rehypeMdxImportMedia from 'rehype-mdx-import-media';
import rehypeShiki from 'rehype-shiki';
import rehypeTOC from '@jsdevtools/rehype-toc';
import rehypePrism from 'rehype-prism-plus';
// import rehypePrismTheme from '@mapbox/rehype-prism';

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      rehypeMdxImportMedia,
      // rehypePrismTheme,
      [
        rehypeShiki,
        {
          theme: 'monokai',
        },
      ],
      [
        rehypePrism,
        {
          theme: 'monokai',
        },
      ],
      [
        rehypeTOC,
        {
          position: 'afterbegin',
        },
      ],
    ],
  },
});

export default withSentryConfig(
  withMDX(withBundleAnalyzer(nextConfig)),
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: 'frontend-hire',
    project: 'javascript-nextjs',
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  },
);
