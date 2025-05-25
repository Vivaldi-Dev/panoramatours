const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.panoramatours.co.mz/api/:path*',
      },
    ];
  },
};

export default nextConfig;
