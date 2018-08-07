module.exports = {
  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'all',
      minSize: 0
    }
  }
};
