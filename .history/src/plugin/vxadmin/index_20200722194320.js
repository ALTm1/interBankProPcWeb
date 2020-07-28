// flex 布局库
import 'flex.css'
// 组件
import '@/components'
// svg 图标
// import '@/assets/svg-icons'

// 功能插件
import pluginError from '@/plugin/error'
import pluginLog from '@/plugin/log'
// import pluginOpen from '@/plugin/open'
import util from '@csii/vx-util'
import {
  // Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputBusiness,
  // InputNumber,
  Radio,
  RadioGroup,
  // RadioButton,
  Checkbox,
  // CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  SelectDrag,
  Option,
  // OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  // TimeSelect,
  TimePicker,
  // Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  // Tree,
  Alert,
  // Slider,
  // Icon,
  Row,
  Col,
  // Upload,
  // Progress,
  // Spinner,
  Badge,
  Card,
  // Rate,
  Steps,
  Step,
  Carousel,
  // Scrollbar,
  CarouselItem,
  // Collapse,
  // CollapseItem,
  Cascader,
  ColorPicker,
  // Transfer,
  Container,
  // CountDown,
  // Header,
  Aside,
  Main,
  // Footer,
  // Timeline,
  // TimelineItem,
  // Link,
  // Divider,
  // Image,
  // Calendar,
  // Backtop,
  // PageHeader,
  // CascaderPanel,
  // Loading,
  MessageBox,
  Message,
  Notification
  // Avatar,
  // Drawer,
  // Sticky,
} from '@csii/vx-web'

export default {
  async install(Vue, options) {
    // 设置为 false 以阻止 vue 在启动时生成生产提示
    // https://cn.vuejs.org/v2/api/#productionTip
    Vue.config.productionTip = false
    // 当前环境
    Vue.prototype.$env = process.env.NODE_ENV
    // 当前的 baseUrl
    Vue.prototype.$baseUrl = process.env.BASE_URL
    // 当前版本
    Vue.prototype.$version = process.env.VUE_APP_VERSION
    // 构建时间
    Vue.prototype.$buildTime = process.env.VUE_APP_BUILD_TIME
    // 图片加载失败后的默认图片
    Vue.prototype.$defaultImg = 'this.src="' + require('@/assets/image/logo.png') + '"'

    // Element
    // Vue.use(Pagination)
    Vue.use(Dialog)
    Vue.use(Autocomplete)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItem)
    Vue.use(MenuItemGroup)
    Vue.use(Input)
    Vue.use(InputBusiness)
    // Vue.use(InputNumber)
    Vue.use(Radio)
    Vue.use(RadioGroup)
    // Vue.use(RadioButton)
    Vue.use(Checkbox)
    // Vue.use(CheckboxButton)
    Vue.use(CheckboxGroup)
    Vue.use(Switch)
    Vue.use(Select)
    Vue.use(SelectDrag)
    Vue.use(Option)
    // Vue.use(OptionGroup)
    Vue.use(Button)
    Vue.use(ButtonGroup)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(DatePicker)
    // Vue.use(TimeSelect)
    Vue.use(TimePicker)
    // Vue.use(Popover)
    Vue.use(Tooltip)
    Vue.use(Breadcrumb)
    Vue.use(BreadcrumbItem)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(Tag)
    // Vue.use(Tree)
    Vue.use(Alert)
    // Vue.use(Slider)
    // Vue.use(Icon)
    Vue.use(Row)
    Vue.use(Col)
    // Vue.use(Upload)
    // Vue.use(Progress)
    // Vue.use(Spinner)
    Vue.use(Badge)
    Vue.use(Card)
    // Vue.use(Rate)
    Vue.use(Steps)
    Vue.use(Step)
    Vue.use(Carousel)
    // Vue.use(Scrollbar)
    Vue.use(CarouselItem)
    // Vue.use(Collapse)
    // Vue.use(CollapseItem)
    Vue.use(Cascader)
    Vue.use(ColorPicker)
    // Vue.use(Transfer)
    Vue.use(Container)
    // Vue.use(CountDown)
    // Vue.use(Header)
    Vue.use(Aside)
    Vue.use(Main)
    // Vue.use(Footer)
    // Vue.use(Timeline)
    // Vue.use(TimelineItem)
    // Vue.use(Link)
    // Vue.use(Divider)
    // Vue.use(Image)
    // Vue.use(Calendar)
    // Vue.use(Backtop)
    // Vue.use(PageHeader)
    // Vue.use(CascaderPanel)
    // Vue.use(Avatar)
    // Vue.use(Drawer)
    // Vue.use(Sticky)

    // Vue.use(Loading.directive)
    Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
    // Vue.prototype.$loading = Loading.service
    Vue.prototype.$msgbox = MessageBox
    Vue.prototype.$alert = MessageBox.alert
    Vue.prototype.$confirm = MessageBox.confirm
    Vue.prototype.$prompt = MessageBox.prompt
    Vue.prototype.$notify = Notification
    Vue.prototype.$message = Message

    // 插件
    Vue.use(pluginError)
    Vue.use(pluginLog)
    // Vue.use(pluginOpen)
    Vue.use(util)
  }
}
