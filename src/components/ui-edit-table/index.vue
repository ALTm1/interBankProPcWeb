<template>
  <div class="wrapper" id="edit-table">
    <ui-table
      :data="tableData"
      style="width:100%"
      ref="table"
      size="small"
      fit
      :cell-style="cellStyle"
      :header-cell-style="cellStyle"
    >
      <template v-for="(item,index) in columnsData">
        <ui-table-column
          :label="columnsData[index].title"
          :key="item.name"
          :min-width="columnsData[index].width"
        >
          <template slot-scope="scope">
            <ui-input
              size="small"
              v-if="columnsData[index].type == 'input'"
              v-model="scope.row[columnsData[index].field]"
              placeholder="请输入"
            ></ui-input>
            <ui-select
              size="small"
              v-model="scope.row[columnsData[index].field]"
              placeholder="请选择"
              v-if="columnsData[index].type == 'select'"
            >
              <ui-option
                v-for="item in columnsData[index].selectOptions"
                :key="item.value"
                :label="item.key"
                :value="item.value"
              ></ui-option>
            </ui-select>
            <ui-date-picker
              size="small"
              v-model="scope.row[columnsData[index].field]"
              type="date"
              v-if="columnsData[index].type == 'picker'"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            ></ui-date-picker>
            <ui-checkbox
              v-model="scope.row[columnsData[index].field] "
              v-if="columnsData[index].type=='checkbox' "
              true-label="1 "
              false-label="2 "
              @change="changeArea(scope.row,scope.$index) "
            ></ui-checkbox>
            <ui-button
              size="mini "
              v-if="columnsData[index].type=='button' "
              type="danger "
              @click="handleDelete(scope.$index, scope.row) "
            >删除</ui-button>
            <template v-if="columnsData[index].type=='' ">{{scope.row[columnsData[index].field]}}</template>
          </template>
        </ui-table-column>
      </template>
    </ui-table>
  </div>
</template>

<script>
export default {
  name: 'ui-edit-table',
  props: {
    tableData: {
      type: Array,
      default: function() {
        return []
      }
    },
    columnsData: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {}
  },

  computed: {},
  methods: {
    handleDelete(index, row) {
      this.tableData.splice(index, 1)
    },
    cellStyle(row, column, rowIndex, columnIndex) {
      return 'text-align:center '
    },
    changeArea(row, index) {
      this.$emit('change')
    }
  }
}
</script>
