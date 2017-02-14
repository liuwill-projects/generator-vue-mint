var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var myWebpackConfig = {
  //entry: './client/main.js',
  entry: {
      bundle: ["./client/index.js"],
      vendor: ['whatwg-fetch']
  },
  output: {
    path: './server/public/assets',
    publicPath: '/assets/',
    filename: '[name].[chunkhash:8].js',
    //filename: '[name].[hash:8].js',
    //filename: '[name].[contenthash:8].js',
    //filename: '[name].js',
    chunkFilename: '[id].js',
    //filename: 'bundle.js'
  },
  module: {
    // avoid webpack trying to shim process
    noParse: /es6-promise\.js$/,
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel-loader'
      },
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) 
      },
      { test: /\.json$/, loader: "json-loader" },
      //{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      {
          test   : /\.(ttf|eot|svg|svg|woff|woff(2))(\?t\=[0-9]+)?$/,
          loader : 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        chunks: ['vendor','bundle'],
        // Modules must be shared between all entries
        minChunks: 2 // 提取所有chunks共同依赖的模块
    }),
    new HtmlWebpackPlugin({
        title: 'My App',
        template: './views/index.html',
        filename: '../../views/index.html'
    }),
    new ExtractTextPlugin({
        filename:"[name].[contenthash:8].css",
        allChunks: true
    }),
  ]
}

module.exports = myWebpackConfig;

if (process.env.NODE_ENV === 'production') {
  myWebpackConfig.plugins.unshift(    
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  );
  myWebpackConfig.plugins.unshift(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
  myWebpackConfig.plugins.unshift(
    new webpack.optimize.OccurenceOrderPlugin()
  );
} else {
  myWebpackConfig.devtool = '#source-map'
}
