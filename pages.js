const fs = require('fs')
const path = require('path')

const entryPath = path.resolve(__dirname, './src/entry')
const fileList = fs.readdirSync(entryPath)

const pages = {}

fileList.forEach((filename, index) => {
  if (filename.includes('.') || filename.includes('debug')) {
    return
  }
  pages[filename] = {
    entry: path.resolve(__dirname, `src/entry/${filename}/main.js`),
    filename: `${filename}.html`,
  }
})

console.log(pages)
module.exports = pages
