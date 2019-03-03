const path = require('path')
let appEnv = process.env.APP_ENV
let watch = appEnv === 'development'

module.exports = {
  entry: './src/index.js',
  mode: appEnv,
  watch: watch,
  output: {
    filename: 'bundle.min.js',
    path: path.resolve('./dist')
  },
  devServer: {
    contentBase: path.resolve('./dist/'),
    compress: true,
    historyApiFallback: true,
    port: 3210
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
