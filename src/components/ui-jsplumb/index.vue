<template>
  <div data-demo-id="statemachine" ref="wrapper" class="jtk-wrapper">
    <div class="jtk-main" @mouseup="restTemp">
      <!--节点类型-->
      <div class="itempannel">
        <ul>
          <li v-for="(item, index) in typeList" :key="index">
            <ui-tooltip class="item" effect="dark" :content="item.text" placement="left">
              <i
                :class="[item.icon, (item.active?'active':'')]"
                @mousedown="selectType(item, index)"
                @mouseup="restTemp"
              ></i>
            </ui-tooltip>
          </li>
        </ul>
      </div>

      <!--画布-->
      <div
        class="jtk-canvas canvas-wide statemachine jtk-surface jtk-surface-nopan"
        id="canvas"
        ref="canvas"
        @mousemove="dragTemplate($event)"
        @mouseup="dragDone"
      >
        <NodeElement
          ref="plumbNode"
          v-for="(item, index) in nodeList"
          :key="item.id"
          :instance="instance"
          :index="index"
          :itemData="item"
          @click="clickNodeItem(index, item)"
          @del="deleteItem"
        ></NodeElement>
        <i ref="templateNode" class="template"></i>
      </div>

      <!--配置属性-->
      <ul class="set-text">
        <li class="row tit">{{isLine?'配置线条属性': '配置节点属性'}}</li>
        <li class="row set-inp">
          <h3 class="row-attr">节点内容：</h3>
          <ui-input type="text" v-model="text" :disabled="serviceCode === '03'"></ui-input>
        </li>
        <li class="row" v-if="serviceCode === '01'">
          <h3 class="row-attr">服务编码:</h3>
          <ui-select v-model="attr.code">
            <ui-option
              v-for="item in options"
              :key="item.key"
              :label="item.value"
              :value="item.key"
            ></ui-option>
          </ui-select>
        </li>
        <li class="row" v-else-if="serviceCode === '02'">
          <h3 class="row-attr">服务编码:</h3>
          <ui-input v-model="attr.code" type="text"></ui-input>
        </li>
        <li class="row" v-if="serviceCode === '10'">
          <h3 class="row-attr">条件:</h3>
          <ui-input type="text" v-model="condition"></ui-input>
        </li>
        <li class="row set-btn">
          <ui-button class="btn-con" type="primary" @click="setText">确定</ui-button>
        </li>
      </ul>
      <!-- <button @click="getJsonData">查看</button> -->
    </div>
  </div>
</template>

<script>
import jsPlumbFn from 'jsplumb'
import NodeElement from './NodeElement'

const clickedClassName = 'clicked'
// 连线hover时的颜色
const LINE_HOVER_COLOR = '#1890FF'
// 全部节点类型
let allList = [
  {
    text: '开始',
    active: true,
    // 节点 图标 `class`名字
    icon: 'start',
    // 节点 类型
    type: 'start'
  },
  {
    text: '结束节点',
    active: false,
    icon: 'end',
    type: 'end'
  },
  {
    text: '查询器节点',
    active: false,
    icon: 'querierScheduleExecutor',
    type: 'querierScheduleExecutor'
  },
  {
    text: '工程节点',
    active: false,
    icon: 'ruleProjectScheduleExecutor',
    type: 'ruleProjectScheduleExecutor'
  },
  {
    text: '交易节点',
    active: false,
    icon: 'tranConfigScheduleExecutor',
    type: 'tranConfigScheduleExecutor'
  },
  {
    text: '批量组任务',
    active: false,
    icon: 'group',
    type: 'group'
  },
  {
    text: '分支节点',
    active: false,
    icon: 'branch-node',
    type: 'branch-node'
  }
]
export default {
  name: 'JsplumbView',
  props: {
    jsonData: {
      type: String,
      required: false,
      default: ''
    },
    toolBtns: {
      type: Array,
      required: false,
      default: function() {
        return [
          'start',
          'end',
          'querierScheduleExecutor',
          'ruleProjectScheduleExecutor',
          'tranConfigScheduleExecutor',
          'group',
          'branch-node'
        ]
      }
    }
  },
  components: {
    NodeElement
  },
  data() {
    return {
      dialogVisible: true,
      jsPlumb: null,
      typeList: [],
      nodeList: [],
      lineList: [],
      instance: null,
      lineItem: null,
      nodeItem: null,
      text: '',
      isLine: false,
      dragFlag: false,
      container: null,
      rect: null,
      lineText: '',
      attr: {
        name: '',
        code: '',
        condition: '',
        type: '',
        model: ''
      },
      options: [],
      urlMap: {
        tranConfigScheduleExecutor: '/loan/tranSubAction.do?_md=selectOptions',
        ruleProjectScheduleExecutor:
          '/loan/projectAction.do?_md=getProjectOption',
        querierScheduleExecutor:
          '/loan/scheduleAction.do?_md=getServiceOptions',
        group: '/loan/batchTaskAction.do?_md=selectOptions'
      },
      condition: ''
    }
  },
  computed: {
    nodeName() {
      return this.typeList.filter(val => val.active)[0].text
    },
    activeType() {
      return this.typeList.filter(val => val.active)[0].type
    },
    serviceCode() {
      let result = ''
      if (this.isLine) {
        result = ''
      } else if (this.nodeItem) {
        let type = this.nodeItem.type
        if (type === 'start' || type === 'end') {
          result = '03'
        } else if (this.urlMap[type]) {
          result = '01'
          // this.getSelectOption(this.urlMap[type])
        } else {
          result = '02'
        }
      }
      return result
    }
  },
  mounted() {
    this.typeList = allList.filter(value => this.toolBtns.includes(value.type))
    // let that = this
    this.jsPlumb = jsPlumbFn.jsPlumb
    this.createInstance()
    this.$nextTick(() => {
      this.init()
      this.jsPlumb.fire('jsPlumbDemoLoaded', this.instance)
      document.addEventListener('keydown', this.deleteLine)
    })
  },
  methods: {
    init() {
      if (this.jsonData) {
        let jsonObject = JSON.parse(this.jsonData)
        this.nodeList = jsonObject.nodes
        this.$nextTick(function() {
          this.loadConnection(this.instance, jsonObject.lines)
        })
      }
      this.initEvent(this.instance)
    },
    // 创建连接器实例
    createInstance() {
      let instance = this.jsPlumb.getInstance({
        Endpoint: ['Dot', { radius: 2 }],
        Connector: 'StateMachine',
        HoverPaintStyle: { stroke: LINE_HOVER_COLOR, strokeWidth: 2 },
        ConnectionOverlays: [
          [
            'Arrow',
            {
              location: 1,
              id: 'arrow',
              width: 10,
              length: 10,
              foldback: 0.8
            }
          ],
          ['Label', { id: 'label', cssClass: 'aLabel' }]
        ],
        Container: 'canvas'
      })

      instance.registerConnectionType('basic', {
        anchor: 'Continuous',
        connector: 'Flowchart'
      })
      this.instance = instance
    },
    // 初始化事件
    initEvent(instance) {
      let canvas = document.getElementById('canvas')
      this.container = canvas
      this.rect = canvas.getBoundingClientRect()
      let that = this

      instance.bind('click', function(c) {
        that.lineItem = c
        that.isLine = true
        that.text = that.lineItem.getOverlay('label').getLabel()
        that.condition = c.getData(c.id)[c.id]
        console.log(c.getData(c.id))
        // instance.deleteConnection(c);
      })

      instance.bind('connection', function(info) {
        info.connection.getOverlay('label').setLabel(that.lineText)
        info.connection.setData({ [info.connection.id]: that.condition })
        that.lineList.push(info.connection)
      })
      instance.bind('connectionDetached', info => {
        let ind = this.getLineIndex(info.connection)
        this.lineList.splice(ind, 1)
      })

      // this.jsPlumb.on(canvas, "dblclick", function(e) {
      //     that.newNode(e.offsetX, e.offsetY);
      // });
      this.jsPlumb.on(canvas, 'click', function(e) {
        let eles = that.$refs.plumbNode
        eles.forEach(val => {
          if (val.hasClass(val.$el, clickedClassName)) {
            val.removeClass(val.$el, clickedClassName)
          }
        })
      })
    },
    // 选择节点类型
    selectType(item, index) {
      this.dragFlag = true
      this.typeList = this.typeList.map(val => {
        val.active = false
        return val
      })
      item.active = !item.active
      this.$set(this.typeList, index, item)
    },
    // 拖拽节点template
    dragTemplate(e) {
      if (!this.dragFlag) {
        return
      }
      let nowX = e.clientX
      let nowY = e.clientY

      let tem = this.$refs.templateNode
      let wrapper = this.$refs.wrapper.parentNode

      let height = tem.clientHeight
      let width = tem.clientWidth

      let wScrollLeft = wrapper.scrollLeft
      let wScrollTop = wrapper.scrollTop
      let scrollLeft = this.container.scrollLeft
      let scrollTop = this.container.scrollTop

      let diffX = nowX - this.rect.left + wScrollLeft + scrollLeft
      let diffY = nowY - this.rect.top + wScrollTop + scrollTop

      tem.style.left = diffX - width / 2 + 'px'
      tem.style.top = diffY - height / 2 + 'px'
      if (diffY <= 0 || diffY >= this.container.clientHeight) {
        this.restTemp()
      } else if (diffX < -1 || diffX >= this.container.clientWidth) {
        this.restTemp()
      }
    },
    // 拖拽完成，生成节点
    dragDone() {
      if (!this.dragFlag) {
        return
      }
      let tem = this.$refs.templateNode
      let left = tem.offsetLeft
      let top = tem.offsetTop
      this.newNode(left, top)
      this.restTemp()
    },
    // 重置 template 位置
    restTemp() {
      this.dragFlag = false
      let tem = this.$refs.templateNode
      let height = tem.clientHeight
      let width = tem.clientWidth
      tem.style.left = -width + 'px'
      tem.style.top = -height + 'px'
    },
    // 加载连线
    loadConnection(instance, list) {
      let that = this
      instance.batch(function() {
        list.forEach(val => {
          that.lineText = val.text
          that.condition = val.condition
          instance.connect({
            source: val.source,
            target: val.target,
            type: 'basic'
          })
        })
        that.lineText = ''
      })
      that.condition = ''
    },
    // 选中线点击delete删除线
    deleteLine(event) {
      if ((event.key == 'Backspace' || event.key == 'Delete') && this.isLine) {
        this.instance.deleteConnection(this.lineItem)
        this.isLine = false
      }
    },
    // 新增节点
    newNode(x, y) {
      let id = Date.now()
      let nodeItem = {
        id: id,
        nodeName: this.nodeName,
        left: x + 'px',
        top: y + 'px',
        type: this.activeType,
        code: this.attr.code
      }
      this.nodeList.push(nodeItem)
    },
    // 点击节点
    clickNodeItem(index, item) {
      this.isLine = false
      this.nodeItem = item
      this.attr.code = item.code
      this.text = item.nodeName
    },
    // 设置节点文字
    setText() {
      if (!this.isLine && !this.nodeItem) {
        return
      }
      if (this.isLine) {
        this.lineItem.getOverlay('label').setLabel(this.text)
        // 将 `条件` 等线条需要配置的属性 放入 `lienitem` 中
        let index = this.getLineIndex(this.lineItem)
        //                    this.lineItem.condition = this.condition;
        this.lineItem.setData({ [this.lineItem.id]: this.condition })
        this.$set(this.lineList, index, this.lineItem)
      } else {
        this.nodeItem.nodeName = this.text
        this.nodeItem.code = this.attr.code
      }
      this.text = ''
      this.condition = ''
      this.attr.code = ''
      this.$nextTick(() => {
        this.instance.repaintEverything()
      })
    },
    // 删除节点
    deleteItem(index, el) {
      this.nodeList.splice(index, 1)
      this.instance.deleteConnectionsForElement(el)
      // this.instance.removeAllEndpoints(el)
      // this.instance.repaintEverything()
    },
    // 导出数据
    getJsonData() {
      let nodes = this.nodeList.map(val => {
        let ele = document.getElementById(val.id)
        let left = ele.offsetLeft + 'px'
        let top = ele.offsetTop + 'px'
        val.left = left
        val.top = top
        return val
      })

      let list = this.lineList.map(val => {
        let text = val.getOverlay('label').labelText
        let condition = val.getData(val.id)[val.id]
        return {
          target: val.targetId,
          source: val.sourceId,
          text: text,
          condition: condition
        }
      })
      let data = { lines: list, nodes: nodes }
      console.log(JSON.stringify(data))
      return JSON.stringify(data)
    },
    // 获取交易配置
    getSelectOption(url) {
      this.$http
        .post(url)
        .then(response => {
          if (response.success) {
            this.options = response.data
          } else {
            this.$error(response.msg)
          }
        })
        .catch(err => {
          this.$error(err)
        })
    },
    // 查找当前选中 line 在 lineList 种的 索引
    getLineIndex(line) {
      if (!line) {
        return
      }
      let ind = 0
      this.lineList.forEach((val, index) => {
        if (val.id === line.id) {
          ind = index
        }
      })
      return ind
    }
  }
}
</script>

<style>
.jtk-main {
  position: relative;
  background-color: #fff;
}

.jtk-canvas {
  position: absolute;
  top: 0;
  left: 51px;
  width: calc(100% - 51px - 170px);
  height: 100%;
  max-height: 750px;
  border: 1px solid #ccc;
  display: flex;
  background: linear-gradient(to bottom, transparent 11px, #e3e3e3 12px),
    linear-gradient(to right, transparent 11px, #e3e3e3 12px);
  /*background: radial-gradient(circle 3px, #A8B5C2, #A8B5C2, #fff);*/
  background-size: 12px 12px;
  overflow: auto;
}
#canvasBg {
  /* position: absolute; */
}

.canvas-wide {
  /* margin-left:30px; */
  /* left: 51px; */
}

/* title */
.jtk-title {
  width: 100px;
  height: 50px;
  background-color: #ccc;
}

/* 左侧节点类型栏 */
.jtk-main .itempannel {
  height: 545px;
  z-index: 2;
  background: #f7f9fb;
  width: 50px;
  padding-top: 8px;
  border-right: 1px solid #e6e9ed;
}
.jtk-main .itempannel ul {
  padding: 0;
  list-style: none;
  fill: #333;
}
.jtk-main .itempannel ul > li {
  padding: 5px 0;
  text-align: center;
  transition: background 0.3s;
  user-select: none;
}
.jtk-main .itempannel ul i {
  display: inline-block;
  width: 30px;
  height: 30px;
}
.jtk-main .itempannel .start,
.jtk-main .w .start {
  background: url('../jsplumb-icons/start.svg') no-repeat center;
  background-size: 20px;
}
.jtk-main .itempannel .end,
.jtk-main .w .end {
  background: url('../jsplumb-icons/end.svg') no-repeat center;
  background-size: 20px;
}
.jtk-main .itempannel .querierScheduleExecutor,
.jtk-main .w .querierScheduleExecutor {
  /*30C4E9*/
  background: url('../jsplumb-icons/qry.svg') no-repeat center;
  background-size: 20px;
}
.jtk-main .itempannel .ruleProjectScheduleExecutor,
.jtk-main .w .ruleProjectScheduleExecutor {
  background: url('../jsplumb-icons/level.svg') no-repeat center;
  background-size: 20px;
}
.jtk-main .itempannel .branch-node,
.jtk-main .w .branch-node {
  background: url('../jsplumb-icons/branch.svg') no-repeat center;
  background-size: 20px;
}
.jtk-main .itempannel .tranConfigScheduleExecutor,
.jtk-main .w .tranConfigScheduleExecutor {
  background: url('../jsplumb-icons/child.svg') no-repeat center;
  background-size: 20px;
}
.jtk-main .itempannel .group,
.jtk-main .w .group {
  background: url('../jsplumb-icons/group.svg') no-repeat center;
  background-size: 20px;
}
.jtk-main .itempannel ul i:hover {
  background-color: #e6e9ed;
}
.jtk-main .itempannel ul i.active {
  background-color: #e6e9ed;
}
/* 左侧节点类型栏结束 */

/* 右侧设置文字 */
.jtk-main .set-text {
  box-sizing: border-box;
  list-style: none;
  position: absolute;
  right: 0;
  top: -16px;
  width: 160px;
  height: 550px;
  padding: 0 20px 0;
  background-color: #f7f9fb;
}
.jtk-main .set-text .row {
  margin: 15px 0;
}
.jtk-main .set-text .ui-input .ui-input__inner {
  height: 35px;
  font-size: 12px;
}
.jtk-main .set-text .ui-textarea .ui-textarea__inner {
  font-size: 12px;
}
.jtk-main .set-text .set-btn .btn-con {
  height: 35px;
}
.jtk-main .set-text .row-attr {
  margin: 5px 0;
  font-size: 14px;
  font-weight: normal;
}
/* 右侧设置文字结束 */

.jtk-connector {
  z-index: 9;
}

.jtk-endpoint {
  z-index: 12;
  opacity: 0.8;
  cursor: pointer;
}

.jtk-overlay {
  background-color: white;
  color: #434343;
  font-weight: 400;
  padding: 4px;
  z-index: 10;
}

.jtk-overlay.jtk-hover {
  color: #434343;
}

.window.jtk-connected {
  /*border: 1px solid green;*/
}

.jtk-drag {
  /*outline: 4px solid pink !important;*/
}

path,
.jtk-endpoint {
  cursor: pointer;
}

.jtk-overlay {
  background-color: transparent;
}

.jtk-main .template {
  display: inline-block;
  width: 107px;
  height: 37px;
  position: absolute;
  top: -37px;
  left: -107px;
  border: 1px dashed #1890ff;
  background-color: #fff;
  border-radius: 8px;
}

.jtk-main .aLabel {
  transition: background-color 0.25s ease-in;
}

/* 节点结束 */

/*.aLabel.jtk-hover{*/
/*border: 1px solid #1890FF;*/
/*}*/
/*.jtk-main .jtk-connector path:not(:first-of-type){*/
/*stroke: #C3CCD6;*/
/*}*/

.jtk-source-hover,
.jtk-target-hover {
  background-color: #e6e9ed;
}
.jtk-main .aLabel {
  padding: 0.3em;
  cursor: pointer;
  font-size: 12px;
  color: #444;
}

/* 连线节点 */

.jtk-main .ep {
  opacity: 0;
  position: absolute;
  bottom: -4px;
  left: calc(50% - 4px);
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #444;
  cursor: crosshair;
  box-shadow: 0 0 2px black;
  transition: box-shadow 0.25s ease-in;
}
.jtk-main .ep.up {
  top: -0.5em;
  left: 49%;
}
.jtk-main .ep.left {
  left: -0.5em;
  top: 49%;
}
.jtk-main .ep.right {
  right: -0.5em;
  top: 49%;
}
.jtk-main .ep:hover {
  opacity: 1;
  box-shadow: 0 0 6px black;
}
.jtk-main .w:hover .ep {
  opacity: 1;
}

/* 连线 结束 */

.jtk-main .statemachine-demo .jtk-endpoint {
  z-index: 3;
}

.jtk-main .ui-icon-circle-close {
  opacity: 0;
  position: absolute;
  top: -8px;
  right: -8px;
  cursor: pointer;
}
.jtk-main .w:hover .ui-icon-circle-close {
  opacity: 1;
}

#opened {
  left: 10em;
  top: 5em;
}

.jtk-main .dragHover {
  border: 1px solid orange;
}

path,
.jtk-endpoint {
  cursor: pointer;
}

@media (max-width: 600px) {
  .jtk-canvas {
    margin-left: 0;
    margin-top: 10px;
    height: 364px;
  }
}
</style>
