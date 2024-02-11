const { withNextVideo } = require('next-video/process')
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();


/** @type {import('next').NextConfig} */
let nextConfig = {}

// module.exports = withNextVideo(nextConfig)

// First, apply the next-intl plugin to the Next.js configuration
nextConfig = withNextIntl(nextConfig);

// Then, apply the next-video plugin to the result
nextConfig = withNextVideo(nextConfig);

module.exports = nextConfig;

