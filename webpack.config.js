const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    bundle: path.resolve(__dirname, './src/js/index.js'),
  },

  devtool: 'source-map',

  devServer: {
    static: { directory: path.resolve(__dirname, 'dist') },
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      { test: /\.html$/, use: ['html-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Wepack App',
      filename: 'index.html',
      template: './src/template.html',
    }),
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: '[name].[hash][ext]',
  },
};
