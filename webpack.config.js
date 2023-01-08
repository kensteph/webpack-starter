const path = require('path');

module.exports = {
  mode: 'development',
  // Entry point for webpack
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  // Where we gonna build
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  // Manage the loaders
  module: {
    rules: [
      // Any file ends by this extention,we will use these loaders
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
};
