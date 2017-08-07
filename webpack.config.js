

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './js/app.js',
    vendor: ['react', 'react-dom', 'react-bootstrap', 'babel-polyfill', 'react-router',
      'react-router-bootstrap', 'react-router-dom'],
  },
  output: {
    path: 'C:\\Users\\Chris\\Documents\\WebDev\\MySite\\static',
    filename: 'app.bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'}),
    new ExtractTextPlugin('bundle.css'),
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
