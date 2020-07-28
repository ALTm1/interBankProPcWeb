<template>
  <div>
    <div class="league-list">
      <ui-table :data="tableData" border >
        <ui-table-column fixed prop="orgnization" label="机构全称" width="150"></ui-table-column>
        <ui-table-column prop="type" label="产品类型" width="120"></ui-table-column>
        <ui-table-column prop="name" label="产品名称" width="120"></ui-table-column>
        <ui-table-column prop="transcation" label="交易方向" width="120"></ui-table-column>
        <ui-table-column prop="rate" label="利率" width="300"></ui-table-column>
        <ui-table-column prop="amount" label="金额" width="120"></ui-table-column>
        <ui-table-column prop="say" label="期限" width="120"></ui-table-column>
        <ui-table-column prop="amount" label="金额" width="120"></ui-table-column>
        <ui-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <ui-button @click="handleClick(scope.row)" type="text" size="small">查看详情</ui-button>
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