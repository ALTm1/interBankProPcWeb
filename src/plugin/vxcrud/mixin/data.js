import { cloneDeep, get as _get, set as _set } from 'lodash'

export default {
  props: {
    /**
     * @description 表格数据
     */
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      /**
       * @description 表格内部数据
       */
      uiCrudData: []
    }
  },
  computed: {
    uiCrudDataLength() {
      return this.uiCrudData.length
    }
  },
  watch: {
    data() {
      this.handleDataChange()
    }
  },
  mounted() {
    this.handleDataChange()
  },
  methods: {
    /**
     * @description lodash.get
     */
    _get,
    /**
     * @description lodash.set
     */
    _set,
    /**
     * @description 同步外部表格数据到uiCrudData内部
     */
    handleDataChange() {
      if (this.uiCrudData !== this.data) {
        this.uiCrudData = cloneDeep(this.data)
      }
    },
    /**
     * @description 排序时数据变化
     */
    handleSortDataChange() {
      this.$nextTick(() => {
        this.uiCrudData = this.$refs.elTable.store.states.data
      })
    },
    /**
     * @description 排序状态
     */
    handleSortChange({ column, prop, order }) {
      this.handleSortDataChange()
      this.$emit('sort-change', { column, prop, order })
    },
    /**
     * @description 更新行数据
     * @param {Number} index 表格数据索引
     * @param {Object} row 更新的表格行数据
     */
    handleUpdateRow(index, row) {
      this.$set(this.uiCrudData, index, row)
      if (this.defaultSort) {
        this.handleSortDataChange()
      }
    },
    /**
     * @description 新增行数据
     * @param {Object} row 新增的表格行数据
     */
    handleAddRow(row) {
      this.$set(this.uiCrudData, this.uiCrudData.length, row)
      if (this.defaultSort) {
        this.handleSortDataChange()
      }
    },
    /**
     * @description 删除行
     * @param {Object} index 被删除行索引
     */
    handleRemoveRow(index) {
      this.$delete(this.uiCrudData, index)
      if (this.defaultSort) {
        this.handleSortDataChange()
      }
    }
  }
}
