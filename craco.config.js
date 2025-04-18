module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
          {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
    },
  },
}; 