
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'source-map',

  mode: 'production', // check if this belongs in production

  entry: [
    path.resolve(__dirname, 'src/index')
  ],

  target: 'web',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  optimization: {
    // Bundle minification is automatic in production mode
    // Bundle splitting is handled by the SPlitChunksPlugin
    //splitChunks: {},
  },

  plugins: [
    // check if these Loader options belong in the production build
    new webpack.LoaderOptionsPlugin({
        debug: true,
        noInfo: false,
    }),
    // Dynamically generate HTML
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ],

  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}
