<template>
  <div>
    <!-- 我的基金 -->
    <div class="fund-earning">
      <ul>
        <li>基金总资产（元）</li>
        <li>{{totalamount}}</li>
      </ul>
      <ul>
        <li>昨日收益（元）</li>
        <li>{{earning}}</li>
      </ul>
      <ul>
        <li>累计收益（元</li>
        <li>{{intres}}</li>
      </ul>
    </div>
    <div>
      <li>持有产品</li>
      <div class="type-pro">
        <ul v-for="(item,index) in type" :key="index" class="type-wrap" @click="seletype(index)">
          <li :class="tab==index?'sele':'nosele'">{{item}}</li>
        </ul>
      </div>
      <div v-if="tab==0">
        <!-- 货币型 -->
        <ui-table :data="tableData" border>
          <ui-table-column prop="name" label="产品名称" width="120"></ui-table-column>
          <ui-table-column prop="type" label="产品类型" width="120"></ui-table-column>
          <ui-table-column prop="transcation" label="交易方向" width="120"></ui-table-column>
          <ui-table-column prop="orgnization" label="机构全称" width="150"></ui-table-column>
          <ui-table-column prop="rate" label="利率" width="120"></ui-table-column>
          <ui-table-column prop="amount" label="金额" width="120"></ui-table-column>
          <ui-table-column prop="date" label="期限" width="120"></ui-table-column>
          <ui-table-column prop="state" label="产品状态" width="120"></ui-table-column>
          <ui-table-column label="操作" width="120">
            <template slot-scope="scope">
              <ui-button @click="handleClick(scope.row)" type="text" size="small">查看详情</ui-button>
              <ui-button
                type="text"
                size="small"
                v-if="scope.row.state=='生效'"
                @click="drop(scope.row)"
              >下架</ui-button>
            </template>
          </ui-table-column>
        </ui-table>
      </div>
      <div v-if="tab==1">
        <!-- 债券型 -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myfund",
  data() {
    return {
      totalamount: "345678.00",
      earning: "78.00",
      intres: "5678.00",
      type: ["货币型", "债券型"],
      tab: 0
    };
  },
  methods: {
    seletype(index) {
      this.tab = index;
    }
  }
};
</script>
<style scoped>
.fund-earning {
  display: -webkit-box;
}
.fund-earning ul {
  margin-right: 30px;
  width: 26%;
  background: #f0f0f0;
  padding-top: 20px;
  text-align: center;
  padding: 20px;
}
.fund-earning ul li:nth-child(2) {
  font-size: 24px;
  padding-top: 20px;
}
.sele {
  background: cornflowerblue;
  color: #ffffff;
  border: none;
}
.nosele {
  border: 1px solid #999;
}
.type-pro {
  display: -webkit-box;
}
.type-wrap li {
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>