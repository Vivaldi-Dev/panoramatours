const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://139.162.169.48:4000/api/:path*',
      },
    ];
  },
};

export default nextConfig;
