// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')
const cwd = process.cwd();

console.log(path.resolve(cwd, 'dist/index.html'))

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(cwd, 'dist/index.html'),
    assetsRoot: path.resolve(cwd, 'dist'),
    assetsSubDirectory: '',
    assetsPublicPath: './',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8085,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        // '/activity/init/': 'http://app-dev.jzb.com/',
        // '/activity/checkcode/': 'http://app-dev.jzb.com/'
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
