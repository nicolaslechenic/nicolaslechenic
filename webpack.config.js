const path = require('path')

module.exports = {
  entry: './src/index.js',
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
