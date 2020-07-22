<template>
  <div
    class="ui-highlight"
    :class="{ 'hover': hovering }"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="meta" :class="{'expanded': noExpand || expanded}" ref="meta">
      <div class="description" v-if="description" v-html="description"></div>
      <pre class="highlight-pre hljs highlight" v-html="highlightHTML"></pre>
    </div>
    <div
      class="demo-block-control"
      ref="control"
      :class="{ 'is-fixed': fixedControl }"
      v-if="!noExpand"
      @click="isExpanded = !isExpanded"
    >
      <transition name="arrow-slide">
        <i class="hovering" :class="[iconClass, { 'hovering': hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="true||hovering">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<script>
// 相关文档
// https://highlightjs.org/usage/
// http://highlightjs.readthedocs.io/en/latest/api.html#configure-options
import highlight from 'highlight.js'
import '../highlight-styles/github-gist.css'
import htmlFormat from './libs/htmlFormat'
export default {
  name: 'highlight',
  props: {
    code: {
      type: String,
      required: false,
      default: ''
    },
    formatHtml: {
      type: Boolean,
      required: false,
      default: false
    },
    lang: {
      type: String,
      required: false,
      default: ''
    },
    expanded: {
      type: Boolean,
      required: false,
      default: false
    },
    noExpand: {
      type: Boolean,
      required: false,
      default: false
    },
    // 代码说明
    description: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      highlightHTML: '',
      fixedControl: false,
      hovering: false,
      isExpanded: this.expanded || false
    }
  },
  mounted() {
    this.highlight()
  },
  watch: {
    code() {
      this.highlight()
    },
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : '0'
      if (!val) {
        this.fixedControl = false
        this.$refs.control.style.left = '0'
        this.removeScrollHandler()
        return
      }
      setTimeout(() => {
        this.scrollParent = document.querySelector(
          '.page-component__scroll > .ui-scrollbar__wrap'
        )
        this.scrollParent &&
          this.scrollParent.addEventListener('scroll', this.scrollHandler)
        this.scrollHandler()
      }, 200)
    }
  },
  methods: {
    highlight() {
      const code = this.formatHtml ? htmlFormat(this.code) : this.code
      this.highlightHTML = highlight.highlightAuto(code, [
        this.lang,
        'html',
        'javascript',
        'json',
        'css',
        'scss',
        'less'
      ]).value
    },
    scrollHandler() {
      const {
        top,
        bottom
        // left,
        // width
      } = this.$refs.meta.getBoundingClientRect()
      this.fixedControl =
        bottom > document.documentElement.clientHeight &&
        top + 44 <= document.documentElement.clientHeight
      // this.$refs.control.style.left = this.fixedControl ? `${left}px` : '0'
      // this.$refs.control.style.width = `${width}px`
    },
    removeScrollHandler() {
      this.scrollParent &&
        this.scrollParent.removeEventListener('scroll', this.scrollHandler)
    }
  },
  computed: {
    controlText() {
      return this.isExpanded ? '隐藏代码' : '显示代码'
    },
    iconClass() {
      return this.isExpanded ? 'ui-icon-caret-top' : 'ui-icon-caret-bottom'
    },
    codeArea() {
      return this.$el.getElementsByClassName('meta')[0]
    },

    codeAreaHeight() {
      if (this.$el.getElementsByClassName('description').length > 0) {
        return (
          this.$el.getElementsByClassName('description')[0].clientHeight +
          this.$el.getElementsByClassName('highlight')[0].clientHeight +
          20
        )
      }
      return this.$el.getElementsByClassName('highlight')[0].clientHeight + 20
    }
  },
  beforeDestroy() {
    this.removeScrollHandler()
  }
}
</script>

<style lang='scss' scoped >
.highlight-pre {
  margin: 0px;
  border-radius: 4px;
}
.ui-highlight {
  .meta {
    border-top: solid 1px #eaeefb;
    overflow-y: hidden;
    overflow-x: auto;
    height: 0;
    transition: height 0.2s;
  }
  .description {
    padding: 10px;
    box-sizing: border-box;
    border: solid 1px #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;

    ::v-deep p {
      margin: 0;
    }
  }
  .expanded {
    height: auto;
  }
  .demo-block-control {
    border-top: solid 1px #eaeefb;
    height: 41px;
    box-sizing: border-box;
    // background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;

    // &.is-fixed {
    // position: fixed;
    // bottom: 69px;
    // }

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;
      &.hovering {
        transform: translateX(-40px);
      }
    }

    > span {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }

    &:hover {
      color: #409eff;
      // background-color: #f9fafc;
    }

    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }
  }
}
</style>
