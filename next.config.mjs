/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  async redirects() {
    return [
      {
        source: '/users',
        destination: '/',
        permanent: false,
      },]
  },
};

export default nextConfig;
