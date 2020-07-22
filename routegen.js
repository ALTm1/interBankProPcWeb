const path = require('path')
const fileSave = require('file-save')
const resolve = (relativepath) => path.join(__dirname, relativepath)
const menuData = require('./src/mock/menu.json')

let isCreatePage = false
if (process.argv[2] === '--page') {
  isCreatePage = true
} else {
  if (!menuData) {
    throw new Error('[缺少菜单数据] - menu data is required')
  }
}

generateRoutes()
/**
 * 执行 `node routegen.js` 根据菜单，生成路由文件
 * 有 `node routegen.js --page` 时，遍历子路由，生成对应页面
 */
function generateRoutes() {
  const files = getData(menuData.List)
  files.forEach(file => {
    const content = routeTemplate(file)
    fileSave(file.filepath)
      .write(content, 'utf8')
    if (isCreatePage) {
      generatePages(file)
    }
  })
}
/**
 * 遍历路由文件，生成对应路径的页面
 * @param {Object} data
 */
function generatePages(data) {
  const routes = data.children
  if (!routes) {
    throw new Error('[缺少二级路由]')
  }
  routes.forEach(val => {
    if (val) {
      const filepath = handleComponetPath(val.component)
      const content = pageTemplate(val.name)
      fileSave(filepath)
        .write(content, 'utf8')
    }
  })
}
/**
 * 遍历菜单，获取需要新建的路由文件数组
 * @param {Array} list
 */
function getData(list) {
  let level = 0
  let routesFile = []
  let parentObj = null
  let pagePath = '@/views'
  const walk = (data) => {
    for (const item of data) {
      const name = item.value || path2name(item.path)
      if (level === 0) {
        pagePath = '@/views'
        parentObj = {
          path: item.path,
          name,
          filepath: resolve(`./src/router/modules/${name}.js`),
          children: []
        }
        routesFile.push(parentObj)
      }
      const children = item.children
      if (children) {
        level++
        pagePath = `${pagePath}/${name}`
        walk(children)
      } else {
        let routes = parentObj.children
        routes && routes.push({
          path: item.value,
          name,
          title: item.title,
          component: `${pagePath}/${name}.vue`
        })
      }
    }
    level--
    const arr = pagePath.split('/')
    arr.splice(arr.length - 1, 1)
    pagePath = arr.join('/')
  }
  walk(list)
  return routesFile
}

/**
 * 路由文件模板
 * @param {Object} routeFile
 */
function routeTemplate(routeFile) {
  const firstRoute = routeFile.children[0]
  return `import layoutHeaderAside from '@/layout/header-aside'
const meta = { auth: true }
export default {
  path: '${routeFile.path}',
  name: '${routeFile.name}',
  meta,
  redirect: { name: '${firstRoute.name}' },
  component: layoutHeaderAside,
  children: [${routeFile.children.map((val) => {
    return `
    {
      path: '${val.path}',
      name: '${val.name}',
      component: () => import('${val.component}'),
      meta: {
        ...meta,
        title: '${val.title}'
      }
    }`
  })}
  ]
}
`
}
/**
 * 页面模板
 * @param {String} name
 */
function pageTemplate(name) {
  return `<template>
  <ui-container>${name}</ui-container>
</template>
<script>
export default {
  name: '${name}',
  data () {
    return {

    }
  }
}
</script>
<style>
</style>
`
}

function path2name(path = '') {
  return path.split('/').filter(e => e).join('-')
}

function handleComponetPath(path) {
  if (path.includes('@')) {
    return resolve(path.replace('@', './src'))
  } else if (/^\./.test(path)) {
    throw new Error('[暂不支持相对路径]')
  }
}
