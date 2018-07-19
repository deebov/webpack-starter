const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const paths = ['dist'];

module.exports = {
  plugins: [
    new CleanWebpackPlugin(paths, {
      root: path.resolve('./')
    })
  ]
};