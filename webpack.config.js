var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CompressionPlugin = require("compression-webpack-plugin");
var webpack = require("webpack");

var plugins = [
  new ExtractTextPlugin({
      filename: 'dist/style.css',
      allChunks: true,
    })
];

if(process.env.NODE_ENV == 'production'){
  plugins = [
    ...plugins,
    new webpack.DefinePlugin({
      // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      'process.env.NODE_ENV': "'production'"
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
  ]
}

module.exports = {
  entry: [
    './src/index.js',
    './style/main.scss'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'dist/bundle.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [require('babel-plugin-transform-object-rest-spread')],
            presets: ['react', 'es2015', 'stage-1']
          }
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
