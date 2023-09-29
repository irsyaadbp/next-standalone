/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    ngihuy: process.env.NGIHUY,
  },
  output: "standalone",
};

module.exports = nextConfig;
