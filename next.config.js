const path = require('path');

module.exports = {
  webpack: (config) => {
    // eslint-disable-next-line
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve('./'),
    };

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js)x?$/,
      },
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};
