/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  images: {
    loader: "custom",
    formats: ["image/avif", "image/webp"],
  },
};


export default nextConfig;
