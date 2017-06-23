// https://github.com/shelljs/shelljs
var path = require('path')
var fs = require('fs')
var chalk = require('chalk')
require('./check-versions')()
require('shelljs/global')
env.NODE_ENV = 'production'

var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

var dealSomingAsync = function(fromPath, reg, toPath) {
   var files = fs.readdirSync(fromPath);
   files.forEach(function(item) {
    if (reg.test(item)) {
      var str = fs.readFileSync(fromPath + '/' + item, 'utf-8');
      fs.writeFile(toPath + '/' + item, str, function(err) {
         err ? console.log(chalk.red('write fail: ' + err)) : console.log(item + chalk.green(" write success!"))
      });
    }
   })
}

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')

  // dealSomingAsync(path.resolve(__dirname, '../dist/'), /index.html/)
  //dealSomingAsync(path.resolve(__dirname, '../dist/js/'), /\.js$/, path.resolve(__dirname, '../../../../fe.jzb.com/jzbVue2/js/'))
  //dealSomingAsync(path.resolve(__dirname, '../dist/css/'), /\.css$/, path.resolve(__dirname, '../../../../fe.jzb.com/jzbVue2/css/'))
  console.log(chalk.green('build finish!'))
})


