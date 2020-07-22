## EditTable 可编辑表格

### 引入

```javascript
import EditTable from '@/components/ui-edit-table'

Vue.component(EditTable.name, EditTable)
```

### API

#### EditTable Props

|属性 | 说明 | 类型 | 默认值 | 备注|
|----|-----|------|------|------|
|tableData | 表格显示的数据 | Array | new Array() | - |
|columnsData | 表头数组 | Array | new Array() | - |

#### EditTable Props columnsData

|属性 | 说明 | 类型 | 默认值 | 备注|
|----|-----|------|------|------|
|field |  对应单元格数据绑定值时的变量名(如此单元格为input框时,input输入框中绑定的v-model值的变量名即为field的值) | String | '' | - |
|title | 对应列的表头名称值| String | '' | - |
|type |  对应列的类型 | String('input'输入框,'select'选择列表,'picker'日期选择器,'checkbox'选择框,'button'按钮,''文本域) | - | - |
|width | 对应列的最小宽度| Number | - | - |
|selectOptions | 只有当type='select'时,才有效的配置项| Array | [] | - |

#### EditTable Props columnsData Props selectOptions

|属性 | 说明 | 类型 | 默认值 | 备注|
|----|-----|------|------|------|
|value |  选项的值 | String,Number,Object | '' | - |
|label | 选项的标签，若不设置则默认与 value 相同| String,Number | '' | - |
columnsData数据结构示例如下：

```javascript
columnsData: [
        {
          field: 'fieldType',
          title: '字段类型',
          type: 'select',
          selectOptions: [
            {
              value: 'String',
              label: 'String'
            },
            {
              value: 'Number',
              label: 'Number'
            }
          ]
        },
        {
          field: 'fieldDate',
          title: '时间',
          type: 'picker',
          width: 150,
        }
      ]
```

#### EditTable Methods

##### change(row,index)

选择某一行时触发</br>row(行数据),index(行标，第几行，从0开始)
