## Table 表格

### 引入

```javascript
import Table from '@/components/ui-table'

Vue.component(Table.name, Table)
```

### API

#### Table Props

|属性 | 说明 | 类型 | 默认值 | 备注|
|----|-----|------|------|------|
|columns | 表头的数组 | Array | undefined | 必输 |
|url | 初始化表格数据所发送接口(此参数在无PostFuncString参数的情况下生效，默认通过this.$axios.post(this.url, params)方法发送请求) | String | - | - |
|initParams | 接口初始化表格参数 | Object | new Object() |-|
|searchParams | 接口搜索参数 | Object | new Object() | - |
|isSelect | 是否使用多选 | Boolean | false | - |
|isIndex | 是否显示索引 | Boolean | false | - |
|isFixed | 固定列 | Boolean | false |-|
|isGray | 表头是否灰色 | Boolean | false | - |
|fixedStr | 悬浮操作栏 | String | '操作' | - |
|fixedWidth | 操作栏宽度（50倍数） | Number | 150 |-|
|fixedButts | 悬浮菜单栏的选项 | Array | undefined | - |
|action | 父组件中发接口的Action实例对象，例如this.$remote,this.$axios,this.ajax等，必输 | Object | this.$axios |-|
|intervalTableData | 后台接口返回数据中对应的表格显示的数据数组在返回数据对象data中的属性名路径组成的字串符数组，必输 | Array | [] |传入的必须是字符串数组|
|intervalTotalRows | 后台接口返回数据中对应的后台返回数据总条目数在返回数据对象data中的属性名路径组成的字串符数组，必输 | Array | [] |传入的必须是字符串数组|
关于属性`intervalTableData`和`intervalTotalRows`的注意事项：<br/>
这两个属性传入的必须是字符串数组：例如在本项目中的table示例中的`realTable.do`接口返回的数据结构如下：

```javascript
{
  data:{
    total:50,
    RList:[
      {
        BankName: "切队住转支行"
        OrgCode: "792758848"
        OrgType: "0"
        RoleDescribe: "事区生社比家"
        RoleName: "义市机"
      },
      {
        BankName: "切队住转支行"
        OrgCode: "792758848"
        OrgType: "0"
        RoleDescribe: "事区生社比家"
        RoleName: "义市机"
      },
      {
        BankName: "切队住转支行"
        OrgCode: "792758848"
        OrgType: "0"
        RoleDescribe: "事区生社比家"
        RoleName: "义市机"
      }
    ]
  },
  status:200,
  statusText:"OK",
  headers:{},
  config:{}
}
```

根据此后台返回数据的数据结构，`intervalTableData`取值为`['data','RList']`,`intervalTotalRows`取值为`['data','total']`

#### Table Methods

##### selection-change(selection)

获取当前选择的数据，当选择项发生变化时会触发该事件</br>selection(当前选择的数据)

##### select(selection,row)

当用户手动勾选数据行的 Checkbox 时触发的事件</br>selection(当前选择的数据),row(当前选择的行)

##### select-all(selection)

当用户手动勾选全选 Checkbox 时触发的事件</br>selection(当前选择的数据)

##### rowClick(row,column)

当某一行被点击时会触发该事件</br>row(当前选择的行),column(当前选择的列)

##### addClick(row)

点击新增按钮时触发</br>row(行数据)

##### removeClick(row)

点击删除按钮时触发</br>row(行数据)

##### modifyClick(row)

点击修改按钮时触发</br>row(行数据)

##### checkDetailClick(row)

点击查看详情按钮时触发</br>row(行数据)
