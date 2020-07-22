const fs = require('fs')
const fileSave = require('file-save')
const path = require('path')
const resolve = (relativepath) => path.join(__dirname, relativepath)

const dirPath = './src\\views\\demo\\playground\\locales'

// 遍历获取文件路径数组
var walk = function (dir) {
  var results = []
  var list = fs.readdirSync(dir)
  list.forEach(function (file) {
    file = resolve(dir + '/' + file)
    var stat = fs.statSync(file)

    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file))
    } else if (path.extname(file) === '.vue') { results.push(file) }
  })
  return results
}

generateCode()

function generateCode() {
  const files = walk(dirPath)
  files.forEach(filePath => {
    const content = codeTemplate(filePath)
    // const writepath =  resolve(dirPath + '/code/' + path.basename(filePath, '.vue') + '.js')
    const writepath = resolve(dirPath + '/code.js')
    fileSave(writepath)
      .write(content, 'utf8')
  })
}

// code.js模板
function codeTemplate(path) {
  const code = fs.readFileSync(path, 'utf8')
  return `export default \`${code}\`
`
}
