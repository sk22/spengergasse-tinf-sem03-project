/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
