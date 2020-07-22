## ModuleIndexMenu 级联菜单组件

### 引入

```javascript
import { ModuleIndexMenu } from '@/components/ui-module-index-menu'

Vue.component(ModuleIndexMenu.name, ModuleIndexMenu)
```

### API

#### ModuleIndexMenu Props

|属性 | 说明 | 类型 | 默认值 | 备注|
|----|-----|------|------|------|
| menu | 传入的级联菜单数据对象 | Object | {children: []} | - |

##### menu Props

|属性 | 说明 | 类型 | 默认值 | 备注|
|----|-----|------|------|------|
|children |  下一子级菜单数据 | Array | undefined | - |
|path | 传递本级菜单对应的跳转页面(可以是项目工程中的页面，也可以是url网址链接)| String | undefined | - |
|title | 本级菜单对应的文字说明 | String | undefined | - |

### menu的具体数据结构示例

```javascript
sourceMenu: {
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        children: [
                          {
                            path: "http://news.baidu.com/guoji",
                            title: "百度国内大事娱乐新闻"
                          },
                          {
                            path: "http://news.baidu.com/mil",
                            title: "百度国内大事非娱乐新闻"
                          }
                        ],
                        path: "http://news.baidu.com/guoji",
                        title: "百度国内大事新闻"
                      },
                      {
                        path: "http://news.baidu.com/mil",
                        title: "百度国内普通新闻"
                      }
                    ],
                    path: "http://news.baidu.com/guonei/",
                    title: "百度国内新闻"
                  },
                  {
                    path: "http://news.baidu.com/guoji",
                    title: "百度国际新闻"
                  },
                  {
                    path: "http://news.baidu.com/mil",
                    title: "百度军事新闻"
                  }
                ],
                path: "http://news.baidu.com/",
                title: "百度新闻"
              }
            ],
            path: "www.baidu.com",
            title: "百度"
          },
          {
            children: [
              {
                children: [
                  {
                    path:
                      "https://www.tmall.com/?spm=a21bo.2017.201859.1.5af911d9Bi0F96",
                    title: "淘宝天猫"
                  },
                  {
                    path:
                      "https://ju.taobao.com/?spm=a21bo.2017.201859.2.5af911d9Bi0F96",
                    title: "淘宝聚划算"
                  }
                ],
                path:
                  "https://ju.taobao.com/jusp/o/ppshangou/tp.htm?spm=608.2291429.102202.3.154e4f84Wj2SV5",
                title: "淘宝团"
              }
            ],
            path: "www.taobao.com",
            title: "淘宝"
          },
          {
            children: [
              {
                children: [
                  {
                    path: "http://news.baidu.com/guonei/",
                    title: "百度国内新闻"
                  },
                  {
                    path: "http://news.baidu.com/guoji",
                    title: "百度国际新闻"
                  },
                  {
                    path: "http://news.baidu.com/mil",
                    title: "百度军事新闻"
                  }
                ],
                path: "http://news.baidu.com/",
                title: "百度新闻"
              }
            ],
            path: "www.baidu.com",
            title: "百度"
          }
        ]
      }
```
