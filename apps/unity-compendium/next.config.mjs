/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
