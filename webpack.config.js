const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devServer = require('./webpack/serve');
const clean = require('./webpack/clean');
const pug = require('./webpack/pug');
const style = require('./webpack/style.js');


const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'dist')
};


const common = merge([
  {
    entry: {
      'index': `${PATHS.source}/pages/index/index.js`,
      'blog': `${PATHS.source}/pages/blog/blog.js`
    },
    output: { 
      path: PATHS.build,
      filename: 'js/[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index', 'common'],
        template: `${PATHS.source}/pages/index/index.pug`
      }),
      new HtmlWebpackPlugin({
        filename: 'blog.html',
        chunks: ['blog', 'common'],
        template: `${PATHS.source}/pages/blog/blog.pug`
      })
    ],
  },
  {
    optimization: {
      splitChunks: {
        name: 'common',
        chunks: 'all',
        minSize: 0
      }
    }
  },
  pug
]);


module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    return merge([
      common,
      devServer,
      style(true)
    ]);
  }

  if (argv.mode === 'production') {
    return merge([
      clean,
      common,
      style(false)
    ]);
  }

};