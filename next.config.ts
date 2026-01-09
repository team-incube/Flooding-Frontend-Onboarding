// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;


// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // App Router 활성화
  },
  reactStrictMode: true, // React Strict Mode 활성화 (권장)
}

module.exports = nextConfig;
