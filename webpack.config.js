const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './js/app.js',
    vendor: ['react', 'react-dom', 'react-bootstrap', 'babel-polyfill', 'react-router',
      'react-router-bootstrap', 'react-router-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({names: ['vendor', 'manifest']}),
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      template: './static/index.html'}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    port: 8080,
    contentBase: 'static',
    proxy: {
      '/': {
        target: 'http://localhost:3000',
      },
    },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({fallback:'style-loader',
        use:'css-loader!resolve-url-loader!sass-loader'}),
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      },
      {
        test: /\.png$/,
        loader: 'file-loader'
      }
    ],

  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
};
