const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssoWebpackPlugin = require('csso-webpack-plugin').default;

module.exports = (devMode) => {
  return {
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].css'
      }),
      new CssoWebpackPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'webpack-px-to-rem',
              options: {
                basePx: 16,
                min: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: (loader) => [
                  require('autoprefixer')()
                ]
              }
            },
            'sass-loader',
          ],
        }
      ]
    }
  }
};