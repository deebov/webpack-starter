const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devServer = require('./webpack/serve');
const pug = require('./webpack/pug');

const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'dist')
};


const common = merge([
  {
    entry: PATHS.source + '/index.js',
    output: {
      path: PATHS.build,
      filename: '[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${PATHS.source}/index.pug`
      })
    ],
  },
  pug()
]);


module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    return merge([
      common,
      devServer()
    ]);
  }

  if (argv.mode === 'production') {
    return common;
  }

};