<template>
  <div>
    <div class="league-list">
      <ui-table :data="tableData" border header-row-class-name="header">
        <ui-table-column fixed prop="orgnization" label="机构全称" width="150"></ui-table-column>
        <ui-table-column prop="type" label="产品类型" width="120"></ui-table-column>
        <ui-table-column prop="name" label="产品名称" width="120"></ui-table-column>
        <ui-table-column prop="transcation" label="交易方向" width="200"></ui-table-column>
        <ui-table-column prop="rate" label="利率" width="120"></ui-table-column>
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
      <!-- 分页 -->
    <div class="page-wrap">
      <ui-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        layout="total, prev, pager, next, jumper,slot"
        :total="4"
      >
      <template>
          <!-- <span>首页</span> -->
          <span>当前第{{currentPage4}}页</span>
          <!-- <span>尾页</span> -->
      </template>
      </ui-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "leaguelist",
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 1,
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
  },
  methods:{
    handleClick(row){
      this.$router.push('leaguedetail')
    }
  }
};
</script>
<style>
.ui-table th,
.ui-table tr {
  background: unset;
}
.league-list .ui-table .header {
  background: cornflowerblue;
  color: #333;
}
</style>
<style scoped>
.league-list{
    margin-top: 50px;
}
.league-list .ui-table{
    width: 1200px;
    margin: 0 auto;
}
</style>