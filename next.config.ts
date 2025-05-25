const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://panoramatours.co.mz:4000/api/:path*',
      },
    ];
  },
};

export default nextConfig;
