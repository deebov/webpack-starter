const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const devServer = require('./webpack/serve');
const clean = require('./webpack/clean');
const splitChunks = require('./webpack/splitChunks');
const pug = require('./webpack/pug');
const js = require('./webpack/script');
const style = require('./webpack/style.js');

const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'dist')
};

const common = merge([
  {
    entry: {
      'babel-polyfill': ['babel-polyfill'],
      index: `${PATHS.source}/pages/index/index.js`
    },
    output: {
      path: PATHS.build,
      filename: 'assets/js/[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['babel-polyfill', 'index', 'common'],
        template: `${PATHS.source}/pages/index/index.pug`
      }),
      new CopyWebpackPlugin([
        {
          from: `${PATHS.source}/images`,
          to: `${PATHS.build}/assets/img`
        }
      ])
    ]
  },
  pug,
  js
]);

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    return merge([common, devServer, style(true)]);
  }

  if (argv.mode === 'production') {
    return merge([clean, common, splitChunks, style(false)]);
  }
};
