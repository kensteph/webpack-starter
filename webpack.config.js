const path = require('path');
// Use of the html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

  // Manage the plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: './src/template.html',
    }),
  ],

  // Configure our devServer
  devServer: {
    static: {
      // The directory where our server will look at
      directory: path.resolve(__dirname, 'dist'),
      // Port
      port: 8788,
      // Hot reload
      hot: true,
      // Open the browser
      open: true,
      // Compression
      compress: true,
      historyApiFallback: true,
    },
  },
};
