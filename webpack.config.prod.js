
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  devtool: 'source-map',

  mode: 'production',

  entry: {
    main: path.resolve(__dirname, 'src/index')
  },

  target: 'web',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
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
    // Hash files for dynamically generated filenames
    new WebpackMd5Hash(),
    // Generate external CSS files with dynamically generated filenames
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
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
      },
      // Properties defined here are available in index.html using htmlWebpackPlugin.options (see index.html for an example)
      someToken: 'ExampleTokenValue'
    })
  ],

  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { test: /\.css$/,
        use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader']
      }
    ]
  }
};
