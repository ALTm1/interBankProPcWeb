<template>
  <div>
    <ui-table
      :data="tableData"
      style="width: 100%"
      stripe
      @select="handleSelect"
      @row-click="rowClick"
      @select-all="handleSelectAll"
      @selection-change="handleSelectionChange"
      :empty-text="empty"
      ref="multipleTable"
      :header-cell-style="tableHeaderColor"
    >
      <template v-if="isSelect">
        <ui-table-column type="selection" width="50"></ui-table-column>
      </template>

      <template v-if="isIndex">
        <ui-table-column type="index" width="50" :index="indexMethod"></ui-table-column>
      </template>

      <template v-for="(item, index) in columns">
        <template>
          <ui-table-column
            :column-key="index+''"
            :type="item.type"
            :prop="item.prop"
            :label="item.label"
            :key="index"
            :width="item.width"
            :formatter="formatter"
          ></ui-table-column>
        </template>
      </template>

      <template v-if="isFixed">
        <ui-table-column fixed="right" :width="fixedWidth" :label="fixedStr" align="center">
          <template slot-scope="scope">
            <template v-for="(item) in fixedButts">
              <!-- <ui-button @click="operationClick(scope.row,item)" type="text" size="small" :key="item.label">
                {{item.label}}
              </ui-button>-->
              <ui-button
                v-if="item.label=='新增'"
                style="color: #67c23a;font-weight: bold;"
                @click="addClick(scope.row,item)"
                type="text"
                size="small"
                :key="item.label"
              >{{item.label}}</ui-button>
              <ui-button
                v-if="item.label=='修改'"
                style="color: #e6a23c;font-weight: bold;"
                @click="modifyClick(scope.row,item)"
                type="text"
                size="small"
                :key="item.label"
              >{{item.label}}</ui-button>
              <ui-button
                v-if="item.label=='删除'"
                style="color: #f56c6c;font-weight: bold;"
                @click="removeClick(scope.row,item)"
                type="text"
                size="small"
                :key="item.label"
              >{{item.label}}</ui-button>
              <ui-button
                v-if="item.label=='查看详情'"
                style="color: #909399;font-weight: bold;"
                @click="checkDetailClick(scope.row,item)"
                type="text"
                size="small"
                :key="item.label"
              >{{item.label}}</ui-button>
            </template>
          </template>
        </ui-table-column>
      </template>
    </ui-table>
    <template>
      <ui-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalRows"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :page-size="pageSize"
        :page-sizes="[5,10, 20, 50]"
        :current-page="pageNum"
        style="text-align: right"
      ></ui-pagination>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ui-table',
  components: {},
  props: {
    // 表头的数组
    columns: {
      type: Array,
      require: true
    },
    // 后台接口
    url: {
      type: String,
      require: true
    },
    // 接口初始化参数
    initParams: {
      type: Object,
      default: function() {
        return {}
      }
    },
    // 接口搜索参数
    searchParams: {
      type: Object,
      default: function() {
        return {}
      }
    },
    // 是否使用多选
    isSelect: {
      type: Boolean,
      default: false
    },
    // 是否显示索引
    isIndex: {
      type: Boolean,
      default: false
    },
    // 固定列
    isFixed: {
      type: Boolean,
      default: false
    },
    // 表头是否灰色
    isGray: {
      type: Boolean,
      default: false
    },
    // 悬浮操作栏
    fixedStr: {
      type: String,
      default: '操作'
    },
    // 操作栏宽度（50倍数）
    fixedWidth: {
      type: Number,
      default: 150
    },
    // 悬浮菜单栏的选项
    fixedButts: {
      type: Array
    }
  },
  data() {
    return {
      empty: '暂无数据',
      tableData: [],
      Info: '',
      totalRows: null,
      pageNum: 1,
      pageSize: 10,
      selectedRows: []
    }
  },
  mounted() {
    this.initTable()
  },
  methods: {
    initTable(flag) {
      const _this = this
      let params = {
        ...this.initParams,
        pageNum: _this.pageNum + '',
        pageSize: _this.pageSize + ''
      }
      if (flag === 'search') {
        params = {
          ...this.initParams,
          ...this.searchParams,
          pageNum: _this.pageNum + '',
          pageSize: _this.pageSize + ''
        }
      }
      if (!this.url) {
        return
      }
      this.$axios
        .post(this.url, params)
        .then(function(data) {
          if (data) {
            if (data.RList == null) {
              _this.empty = '暂无数据!'
            } else {
              _this.tableData = data.RList
              _this.totalRows = data.total
              _this.selectedRows = []
            }
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 获取当前选择的数据，当选择项发生变化时会触发该事件
    handleSelectionChange(selection) {
      this.selectedRows = selection
      this.$emit('selection-change', selection)
    },
    // 当用户手动勾选数据行的 Checkbox 时触发的事件
    handleSelect(selection, row) {
      this.$emit('select', selection)
    },
    // 当用户手动勾选全选 Checkbox 时触发的事件
    handleSelectAll(selection) {
      this.$emit('select-all', selection)
    },
    // 获取选择行数据
    getSeletedRows() {
      return this.selectedRows
    },
    // 点击行事件
    rowClick(row, column) {
      this.$emit('rowClick', row, column)
    },
    // pageSize 改变时会触发
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.initTable()
    },
    // currentPage 改变时会触发
    handleCurrentChange(pageNum) {
      this.pageNum = pageNum
      this.initTable()
    },
    // 新增按钮
    addClick(row, item) {
      this.$emit('addClick', row, item)
    },
    // 删除按钮
    removeClick(row, item) {
      this.$emit('removeClick', row, item)
    },
    // 修改按钮
    modifyClick(row, item) {
      this.$emit('modifyClick', row, item)
    },
    // 查看详情按钮
    checkDetailClick(row, item) {
      this.$emit('checkDetailClick', row, item)
    },
    // 刷新表格
    refresh() {
      this.initTable()
    },
    // 搜索
    search() {
      this.pageNum = 1
      this.initTable('search')
    },
    // 控制表头颜色变灰
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (this.isGray && rowIndex === 0) {
        return 'background-color:#ECECEC;color: #666;font-weight: normal'
      } else {
        return 'background-color:#2f74ff;color: white;font-weight: normal'
      }
    },
    // 控制行号
    indexMethod(index) {
      return (this.pageNum - 1) * this.pageSize + index + 1
    },
    // 字段格式化
    formatter(row, column, cellValue, index) {
      if (this.columns[column.columnKey].formatter) {
        return this.columns[column.columnKey].formatter(
          row,
          column,
          cellValue,
          index
        )
      }
      return cellValue
    }
  }
}
</script>
