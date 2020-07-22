<template>
  <span>
    <ui-popover ref="pop" v-model="pop" :placement="placement" width="300" trigger="click">
      <ui-row type="flex" justify="end" class="ui-mb-10" v-if="clearable">
        <ui-button
          type="danger"
          icon="ui-icon-delete"
          size="mini"
          class="ui-fr"
          @click="selectIcon()"
        >清空</ui-button>
      </ui-row>
      <ui-input
        v-model="searchText"
        :clearable="true"
        placeholder="搜索 比如 'plus'"
        prefix-icon="ui-icon-search"
      ></ui-input>
      <ui-row class="ui-icon-svg-select--group">
        <ui-col
          v-for="(item, index) in iconFilted"
          :key="index"
          class="ui-icon-svg-select--item"
          :span="4"
          @click.native="selectIcon(item)"
        >
          <ui-icon-svg :name="item" />
        </ui-col>
      </ui-row>
    </ui-popover>
    <!-- 允许用户输入 -->
    <ui-input v-if="userInput" v-model="currentValue" v-bind="bind" style="max-width: 240px;">
      <template v-if="value" slot="prepend">
        <ui-icon-svg class="ui-icon-svg-select--input-preview" :name="value" />
      </template>
      <ui-button v-popover:pop slot="append">
        <i class="fa fa-list"></i>
      </ui-button>
    </ui-input>
    <!-- 不允许用户输入 -->
    <ui-button v-popover:pop v-if="!userInput">
      <span flex="dir:left main:center cross:center">
        <ui-icon-svg v-if="value" class="ui-icon-svg-select--input-preview ui-mr-10" :name="value" />
        <span>{{value ? value : placeholder}}</span>
      </span>
    </ui-button>
  </span>
</template>

<script>
export default {
  name: 'ui-icon-svg-select',
  props: {
    // 值
    value: {
      type: String,
      required: false,
      default: ''
    },
    // 占位符
    placeholder: {
      type: String,
      required: false,
      default: '请选择'
    },
    // 弹出界面的方向
    placement: {
      type: String,
      required: false,
      default: 'right'
    },
    // 是否可清空
    clearable: {
      type: Boolean,
      required: false,
      default: true
    },
    // 是否允许用户输入
    userInput: {
      type: Boolean,
      required: false,
      default: false
    },
    // 是否在选择后自动关闭
    autoClose: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      // 绑定弹出框
      pop: false,
      // 组件内输入框的值
      currentValue: '',
      // 搜索的文字
      searchText: ''
    }
  },
  computed: {
    // 输入框上绑定的设置
    bind() {
      return {
        placeholder: this.placeholder,
        clearable: this.clearable,
        ...this.$attrs
      }
    },
    // 是否在搜索
    searchMode() {
      return !!this.searchText
    },
    // 过滤后的图标
    iconFilted() {
      return this.$IconSvg.filter(icon => icon.indexOf(this.searchText) >= 0)
    }
  },
  watch: {
    value(value) {
      this.currentValue = value
    }
  },
  created() {
    this.currentValue = this.value
  },
  methods: {
    selectIcon(iconName = '') {
      this.$emit('input', iconName)
      if (iconName && this.autoClose) {
        this.pop = false
      }
    }
  }
}
</script>

<style lang="scss">
.ui-icon-svg-select--input-preview {
  height: 14px;
  width: 14px;
  display: block;
}
.ui-icon-svg-select--group {
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-top: 10px;
}
.ui-icon-svg-select--item {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: 20px;
    width: 20px;
  }
  &:hover {
    background-color: $color-bg;
    border-radius: 4px;
    box-shadow: inset 0px 0px 0px 1px $color-border-1;
  }
}
</style>
