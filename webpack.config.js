var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : './index.js',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins:[
    new  HtmlWebpackPlugin({
      template: './templates/index.html'
    })
  ]
}
