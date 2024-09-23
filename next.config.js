/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Forwarded-Host",
            value: "test.bombasguadalajara.com",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
