<template>
  <div>
    <div class="league-list">
      <ui-table :data="tableData" border header-row-class-name="header">
        <ui-table-column fixed prop="orgnization" label="机构全称" width="150"></ui-table-column>
        <ui-table-column prop="type" label="产品类型" width="120"></ui-table-column>
        <ui-table-column prop="name" label="产品名称" width="120"></ui-table-column>
        <ui-table-column prop="transcation" label="交易方向" width="120"></ui-table-column>
        <ui-table-column prop="rate" label="利率" width="300"></ui-table-column>
        <ui-table-column prop="amount" label="金额" width="120"></ui-table-column>
        <ui-table-column prop="day" label="期限" width="120"></ui-table-column>
        <ui-table-column prop="date" label="发布日期" width="120"></ui-table-column>
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
  name: "leaguelist",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "产品111",
          orgnization: "江南农村商业银行",
          type: "闲钱参团",
          transcation: "上海市普陀区金沙江路 1518 弄",
          rate: "4.55 %",
          amount: "5,000 W",
          day: "360 天"
        },
        {
          date: "2016-05-02",
          name: "产品111",
          orgnization: "江南农村商业银行",
          type: "闲钱参团",
          transcation: "上海市普陀区金沙江路 1518 弄",
          rate: "4.55 %",
          amount: "5,000 W",
          day: "360 天"
        },
        {
          date: "2016-05-02",
          name: "产品111",
          orgnization: "江南农村商业银行",
          type: "闲钱参团",
          transcation: "上海市普陀区金沙江路 1518 弄",
          rate: "4.55 %",
          amount: "5,000 W",
          day: "360 天"
        },
       
      ]
    };
  }
};
</script>
<style>

</style>
<style scoped>
.league-list{
    margin-top: 50px;
}
</style>