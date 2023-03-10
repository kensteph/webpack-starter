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
    // In order to keep the original assets'name (like lol.jpg)
    assetModuleFilename: '[name][ext]',
  },
  // Manage the loaders
  module: {
    rules: [
      // Any file ends by this extention,we will use these loaders
      { test: /\.scss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      // Rule for babel | exclude the node_modules folder
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] },
        },
      },
      // Configure loader to use IMG
      { test: /\.(png|svg|jpeg|jpg|gif)$/i, type: 'asset/resource' },
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
  // For debugging purpose
  devtool: 'source-map',

  // Configure our devServer
  devServer: {
    static: {
      // The directory where our server will look at
      directory: path.resolve(__dirname, 'dist'),
    },
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
};
