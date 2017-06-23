var path = require('path')
var config = require('../config')
var utils = require('./utils')
var autoprefixer = require('autoprefixer')
var projectRoot = path.resolve(__dirname, '../')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var env = process.env.NODE_ENV
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

const webpackConfig = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.web.js', '.js', '.jsx', '.html', '.css', '.scss'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'SRC': path.resolve(__dirname, '../src'),
      'ASSETS': path.resolve(__dirname, '../src/assets'),
      'COMPONENTS': path.resolve(__dirname, '../src/components'),
      'STORE': path.resolve(__dirname, '../src/store'),
      'ROUTE': path.resolve(__dirname, '../src/route')
    }
  },
  externals: {    //karma Error: Cannot resolve module 'react/lib/ReactMount'
    'jsdom': 'window',  
    'cheerio': 'window',  
    'react/lib/ExecutionEnvironment': true,  
    'react/addons': true,  
    'react/lib/ReactContext': 'window',  
    'sinon': 'window.sinon' 
  }, 
  resolveLoader: {
    modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        include: [path.resolve('SRC/themes')],
        loader: 'style!css!sass!postcss'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  eslint : {
    configFile : './.eslintrc',
    formatter: require('eslint-friendly-formatter')
  }
}


module.exports = webpackConfig;

//const vuxLoader = require('vux-loader')
//vuxLoader.merge(webpackConfig, {
//  options: {},
//  plugins: [
//    {
//      name: 'vux-ui'
//    }
//  ]
//})
