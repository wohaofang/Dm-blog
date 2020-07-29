const pages = require('./pages');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const devServer = {
    host: '0.0.0.0',
    port: 5000,
    open: true,
};


/**
 * 获取从命令行传进来的参数
 */
const env = {}
const args = (JSON.parse(process.env.npm_config_argv) || {}).original || []
const argv = process.argv
const allArg = args.concat(argv)
// 遍历命令行传来的参数
allArg.forEach((v) => {
  if (v.startsWith('--')) {
    const [key, value] = v.slice(2).split('=')
    env[key] = value || true
  }
})

console.log(chalk.yellow('当前环境(current)： ') + chalk.cyan(process.env.VUE_APP_MODE))
console.log(chalk.yellow('当前项目(project)： ') + chalk.cyan(env.project || '未接受参数，默认启动所有项目'))
console.log()

function getPages (project) {
  let page = {}
  if (!project) {
    page = { ...pages }
    return page
  }

  project = project.split(',')
  project.forEach((fileName) => {
    const filePath = path.resolve(__dirname, `src/entry/${fileName}/main.js`)
    try { // 是否存在对应项目的entry.js
      fs.accessSync(filePath, fs.constants.R_OK)
    } catch (err) {
      /* eslint-disable no-console */
      console.log(chalk.red(`没有指定的项目： ${fileName}`))
      return
    }
    devServer.index = `${fileName}.html`
    page[fileName] = {
      entry: filePath,
      filename: `${fileName}.html`
    }
  })
  return page
}
// 开发和测试环境加入debug页面
if (process.env.VUE_APP_MODE !== 'production') {
  pages.debug = {
    entry: path.resolve(__dirname, `src/entry/debug/main.js`),
    filename: 'debug.html',
  }
}

const css = {
    loaderOptions: {
        sass: {
            prependData: '@import "@/assets/css/fun.scss";@import "@/assets/css/reset.scss";'
        }
    }
}


module.exports = {
    lintOnSave: false,
    pages: env.project ? getPages(env.project) : pages,
    productionSourceMap: false,
    devServer,
    css,
    publicPath: '/',
    outputDir: 'isMy',
    chainWebpack: config => {
        config.plugin('define').tap(args => { // 将参数传入项目中，可在main.js或者项目中的config,通过process.env 获取
          Object.keys(env).forEach(key => {
            args[0]['process.env'][key] = JSON.stringify(env[key])
          })
          return args
        })
    }
}