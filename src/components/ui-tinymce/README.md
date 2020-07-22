## Tinymce 富文本编辑器

### 引入

```javascript
import { Tinymce } from '@/conponents/ui-tinymce'

Vue.component(Tinymce.name, Tinymce)
```

### API

#### Tinymce Props

|属性 | 说明 | 类型 | 默认值 | 备注|
|----|-----|------|------|------|
| id | 编辑器的唯一标识 | String | `'ui-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')` | - |
| value | 编辑器默认展示的内容 | String | '' | - |
| toolbar | 可以指定按钮以及它们在编辑器工具栏上显示的顺序 | Array | `['searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen']` | - |
| menubar | 可以指定应显示哪些菜单以及它们在编辑器顶部菜单栏中的显示顺序 | String | `file edit insert view format table` | - |
| height | 设置整个编辑器的高度，包括菜单栏，工具栏和状态栏。如果提供了数字，编辑器将以像素为单位设置高度。如果提供了字符串，编辑器会假定该值是有效的CSS，只需将编辑器的高度设置为字符串值。这允许使用诸如％，em和vh的替代单位 | Number, String | 300 | - |
| width | 设置整个编辑器的宽度。如果提供数字，编辑器设置宽度（以像素为单位）。但是，如果提供了编辑器一个字符串，则它将假定该值是有效的CSS，只需将编辑器的宽度设置为字符串值。这允许使用％，em和vh等替代单位 | Number, String | `auto` | - |
[更多tiny文档](https://www.tiny.cloud/docs/configure/editor-appearance/)

#### Tinymce Methods

##### setContent(value)

将指定的内容设置为编辑器实例，这将在使用其他清除规则选项设置内容之前清除内容

##### getContent()

从编辑器获取内容，这将使用不同的清除规则选项清除内容，然后将其返回
