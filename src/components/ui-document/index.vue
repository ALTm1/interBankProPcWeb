<template>
  <div class="ui-document">
    <div class="ui-card is-hover-shadow">
      <div class="ui-card__header" v-if="$slots.header || header">
        <slot name="header">{{ header }}</slot>
      </div>
      <div class="ui-card__body">
        <div class="ui-document-wrap">
          <div v-if="!noDoc">
            <ui-markdown :source="document" />
          </div>
          <div v-if="$slots.document || document">
            <slot name="document"></slot>
          </div>
          <slot></slot>
        </div>
        <highlight
          class="pt"
          :code="code"
          :format-html="formatHtml"
          :lang="lang"
          :expanded="expanded"
          :noExpand="noExpand"
          :description="description"
        ></highlight>
      </div>
    </div>
    <div v-if="markdown">
      <ui-markdown :source="markdown" />
    </div>
  </div>
</template>
<script>
import highlight from './highlight'
export default {
  props: {
    // title
    header: {},
    // 文档
    document: {
      type: String,
      required: false,
      default: '文档代码'
    },
    // 介绍说明
    markdown: {
      type: String,
      required: false,
      default: ''
    },
    // 代码
    code: {
      type: String,
      required: false,
      default: ''
    },
    // html
    formatHtml: {
      type: Boolean,
      required: false,
      default: true
    },
    // 语言
    lang: {
      type: String,
      required: false,
      default: ''
    },
    // 默认展开
    expanded: {
      type: Boolean,
      required: false,
      default: false
    },
    // 代码说明
    description: {
      type: String,
      required: false,
      default: ''
    },
    noDoc: {
      type: Boolean,
      required: false,
      default: false
    },
    // 不展示显示/隐藏操作按钮
    noExpand: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    highlight
  }
}
</script>
<style lang="scss" scoped>
.ui-card {
  margin-bottom: 20px;
}
.ui-document {
  margin-top: 15px;
  .ui-card__body {
    padding: 15px 0 10px;
  }
}
.ui-document-wrap {
  padding-left: 10px;
  padding-right: 10px;
}
.pt {
  padding-top: 8px;
}
</style>
<style lang="scss">
.ui-document {
  .ui-highlight .meta,
  .hljs {
    background-color: #fafafa;
  }
  .description code {
    color: #5e6d82;
    background-color: #e6effb;
    margin: 0 4px;
    display: inline-block;
    padding: 1px 5px;
    font-size: 12px;
    border-radius: 3px;
    height: 18px;
    line-height: 18px;
  }
}
</style>
