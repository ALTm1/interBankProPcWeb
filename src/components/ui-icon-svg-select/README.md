## IconSvgSelect svg图标选择器

### 引入

```javascript
import { IconSvgSelect } from '@/components/ui-icon-svg-select'

Vue.component(IconSvgSelect.name, IconSvgSelect)
```

### API

#### IconSvgSelect Props

|属性 | 说明 | 类型 | 默认值 | 备注|
|----|-----|------|------|------|
|value | svg图标对应的文本值 | String | '' | - |
|placeholder | 允许用户输入时,输入框中的提示文字 | String | '请选择' | - |
|placement | 弹出界面的方向 | String | 'right' | - |
|clearable | 是否可清空 | Boolean | false | - |
|userInput | 是否允许用户输入 | Boolean | false | - |
|autoClose | 是否在选择后自动关闭 | Boolean | true | - |

#### IconSvgSelect Methods

##### input(iconName)

当用户点击某个svg图标时,对外提供该svg图标对应的名称值</br>iconName(icon对应的名称值)
