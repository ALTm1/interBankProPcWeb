## LinkBtn 带跳转链接的按钮

### 引入

```javascript
import { LinkBtn } from '@/components/ui-link-btn'

Vue.component(LinkBtn.name, LinkBtn)
```

### API

#### LinkBtn Props

|属性 | 说明 | 类型 | 默认值 | 备注|
|----|-----|------|------|------|
|title | 按钮的文本说明 | String | '' | - |
|icon | 按钮的图标名称 | String | "link" | - |
|link | 点击按钮时要跳转的链接 | String | '' | - |
