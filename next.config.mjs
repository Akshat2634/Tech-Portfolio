/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/AkshatSahu_Resume.pdf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
          {
            key: "Content-Disposition",
            value: 'inline; filename="AkshatSahu_Resume.pdf"',
          },
        ],
      },
    ]
  },
}

export default nextConfig
