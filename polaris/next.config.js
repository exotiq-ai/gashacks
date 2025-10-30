/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.pixabay.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
