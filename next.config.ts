const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://192.168.225.190:4000/api/:path*',
      },
    ];
  },
};

export default nextConfig;
