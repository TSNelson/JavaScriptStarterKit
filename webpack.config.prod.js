
import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'source-map',
  mode: 'development', // check if this belongs in production
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ // check if this belongs in production
        debug: true,
        noInfo: false,
    }),

    // Eliminate duplicate packages from bundle
    // new webpack.optimize.DedupePlugin(), # fails to run

    // Minify JS
    // new webpack.optimize.UglifyJsPlugin() # webpack.optimize.UglifyJsPlugin has been removed, please use config.optimization.minimize instead
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}
