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
          <ui-table-column prop="code" label="基金代码" width="120"></ui-table-column>
          <ui-table-column prop="name" label="基金名称" width="120"></ui-table-column>
          <ui-table-column prop="assets" label="持仓资产" width="120"></ui-table-column>
          <ui-table-column prop="intres" label="昨日收益" width="150"></ui-table-column>
          <ui-table-column prop="intres1" label="累计收益" width="120"></ui-table-column>
          <ui-table-column prop="intres2" label="年化收益率" width="120"></ui-table-column>
          <ui-table-column prop="intres3" label="万份收益（元）" width="120"></ui-table-column>
          <ui-table-column label="操作" width="120">
            <template slot-scope="scope">
              <ui-button @click="todetail(scope.row)" type="text" size="small">详情</ui-button>
              <ui-button type="text" size="small" @click="buy(scope.row)">赎回</ui-button>
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
      tab: 0,
      tableData: [
        {
          code: "000001",
          name: "XXX天天理财",
          assets: "1，6225",
          intres: "44.09",
          intres1: "2345.00",
          intres2: "低风险",
          intres3: "500000"
        },
        {
          code: "000001",
          name: "XXX天天理财",
          rate7: "1，6225",
          rate: "0.42",
          company: "XXX基金公司",
          risk: "低风险",
          amount: "500000"
        },
        {
          code: "000001",
          name: "XXX天天理财",
          rate7: "1，6225",
          rate: "0.42",
          company: "XXX基金公司",
          risk: "低风险",
          amount: "500000"
        }
      ],
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