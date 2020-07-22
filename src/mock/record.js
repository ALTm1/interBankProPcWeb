const fileSave = require('file-save')
const path = require('path')
const resolve = (relativepath) => path.join(__dirname, relativepath)
/**
 * 根据返回数据生成JSON文件
 * @param {Object} proxyRes
 * @param {Object} req
 */
function recordProxyJson (proxyRes, req) {
  const { statusCode, headers } = proxyRes
  const reg = /application\/json/i
  if (statusCode === 200 && reg.test(headers['content-type'])) {
    let body = ''
    proxyRes.on('data', (data) => {
      body += data.toString()
    })
    proxyRes.on('end', () => {
      try {
        const data = JSON.parse(body)
        // && data.__RejCode === '000000'
        if (!data.jsonError) {
          const url = req.url.split('/')
          const action = url[url.length - 1]
          const filename = action.replace('.do', '.json')
          const filepath = resolve(`./data/${filename}`)
          const content = JSON.stringify(data, null, 2)
          fileSave(filepath).write(content).end('\n').finish(() => {
            console.log(`[生成]：${filename} 文件`)
          })
        }
      } catch (err) {
        console.log(`[保存JSON数据失败]${err.message}`)
      }
    })
  }
}

module.exports = {
  recordProxyJson
}
