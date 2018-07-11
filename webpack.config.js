const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const serve = require('./webpack/serve');

const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'dist')
};


const common = {
  entry: PATHS.source + '/index.js',
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'Webpack app'
    })
  ],
};


module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    return merge([
      common,
      serve()
    ]);
  }

  if (argv.mode === 'production') {
    return common;
  }

};