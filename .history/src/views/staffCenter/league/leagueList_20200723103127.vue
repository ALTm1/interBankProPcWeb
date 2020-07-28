<template>
  <div>
    <div class="league-list">
      <ui-table :data="tableData" border >
        <ui-table-column fixed prop="date" label="日期" width="150"></ui-table-column>
        <ui-table-column prop="name" label="姓名" width="120"></ui-table-column>
        <ui-table-column prop="province" label="省份" width="120"></ui-table-column>
        <ui-table-column prop="city" label="市区" width="120"></ui-table-column>
        <ui-table-column prop="address" label="地址" width="300"></ui-table-column>
        <ui-table-column prop="zip" label="邮编" width="120"></ui-table-column>
        <ui-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </ui-table-column>
      </ui-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "leaguelist"
};
</script>
<style scoped>
</style>