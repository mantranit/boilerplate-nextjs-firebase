/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  publicRuntimeConfig: {
    apiUrl: process.env.API_ENDPOINT ?? "http://localhost:8000/api/v1",
  },
};
