/** @type {import('next').NextConfig} */
const nextConfig = {
    // When deploying to GitHub Pages, the repository name becomes part of the path
    // If your repository is named 'yoga' for example
    basePath: process.env.NODE_ENV === 'production' ? '/yoga' : '',
    output: 'export', // Generate static HTML files
    images: {
      unoptimized: true, // Required for static export
    },
  };
  
  export default nextConfig;