<template>
  <div
    class="w"
    :id="id"
    :ref="id"
    :style="offsetStyle"
    :data-type="nodeItem.type"
    :data-text="nodeItem.nodeName"
    @mouseup="handleMouseUp"
    @click.stop="handleClick"
  >
    <i :class="['icon', nodeItem.type]"></i>
    <span class="text">{{nodeItem.nodeName}}</span>
    <i class="ep"></i>
    <i class="ui-icon-circle-close" @click.stop="delConnections"></i>
  </div>
</template>

<script>
// import jsPlumb from 'jsplumb'
// 连线颜色
const LINE_COLOR = '#C3CCD6'
// 连线宽度
const LINE_WIDTH = 2
// 选中所有节点的 `选择器`
const NODE_SELECTOR = '.statemachine .w'
// 每个节点的最大 向外 连线数量
const MAX_CONNECTIONS = 999
// 排除节点拖拽干扰，可向外连线的点
const LINE_POINT = '.ep'
export default {
  name: 'NodeElement',
  props: {
    index: {
      type: Number
    },
    instance: {
      type: Object,
      default: function () {
        return {}
      },
      required: true
    },
    itemData: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  computed: {
    offsetStyle () {
      return { left: this.itemData.left, top: this.itemData.top }
    },
    nodeItem () {
      return this.itemData
    },
    id () {
      return this.itemData.id
    },
    clicked () {
      return this.itemData.clicked
    }
  },
  mounted () {
    let thisEle = this.$refs[this.id]
    this.initNode(thisEle)
  },
  methods: {
    initNode (el) {
      this.instance.draggable(el)

      this.instance.makeSource(el, {
        filter: LINE_POINT,
        anchor: 'Continuous',
        connectorStyle: {
          stroke: LINE_COLOR,
          strokeWidth: LINE_WIDTH,
          outlineStroke: 'transparent',
          outlineWidth: 1
        },
        connectionType: 'basic',
        extract: {
          action: 'the-action'
        },
        maxConnections: MAX_CONNECTIONS
        // deleteEndpointsOnDetach:false,
        // connectionsDetachable: false
        // onMaxConnections: function (info, e) {
        //     alert("Maximum connections (" + info.maxConnections + ") reached");
        // }
      })

      this.instance.makeTarget(el, {
        dropOptions: { hoverClass: 'dragHover' },
        anchor: 'Continuous',
        allowLoopback: false
      })

      this.instance.fire('jsPlumbDemoNodeAdded', el)
    },
    delConnections () {
      this.$emit('del', this.index, this.$refs[this.id])
    },
    handleClick () {
      Array.from(this.instance.getSelector(NODE_SELECTOR)).forEach(val => {
        if (this.hasClass(val, 'clicked')) {
          this.removeClass(val, 'clicked')
        }
      })
      this.addClass(this.$refs[this.id], 'clicked')
      this.$emit('click')
    },
    handleMouseUp () {
      let ele = this.$refs[this.id]
      this.nodeItem.left = ele.offsetLeft + 'px'
      this.nodeItem.top = ele.offsetTop + 'px'
      this.$emit('mouseup', this.index, this.nodeItem)
    },
    hasClass (el, className) {
      let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
      return reg.test(el.className)
    },

    addClass (el, className) {
      if (this.hasClass(el, className)) {
        return
      }

      let newClass = el.className.split(' ')
      newClass.push(className)
      el.className = newClass.join(' ')
    },
    removeClass (el, className) {
      if (!this.hasClass(el, className)) {
        return
      }

      let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
      el.className = el.className.replace(reg, ' ')
    }
  }
}
</script>

<style>
/* 节点 */
.jtk-main .w {
    padding: 3px 3px 3px 34px;
    position: absolute;
    z-index: 4;
    border: 1px solid rgba(255,255,255,0);
    box-shadow: 1px 1px 2px #636363;
    border-radius: 5px;
    opacity: 0.8;
    cursor: move;
    min-width: 68px;
    max-width: 100px;
    min-height: 30px;
    line-height: 30px;
    background-color: #86c0fd;
    font-size: 12px;
    color: #333;
    /* 禁止选中节点上的文字 */
    user-select: none;
}
.jtk-main .w .text{
    display: inline-block;
    line-height: 16px;
    vertical-align: middle;
}
.jtk-main .w .icon{
    position: absolute;
    left: 0;
    top: calc(50% - 15px);
    display: inline-block;
    width: 30px;
    height: 30px;
}
.jtk-main .w.clicked{
    color: #111;
    opacity: 1;
}

.jtk-main .w.circle{
    /*width: 50px;
    min-width: 50px;
    height: 50px;
    min-height: 50px;
    border-radius: 25px;*/
}

.jtk-main .w:hover {
    opacity: 1;
}
</style>
