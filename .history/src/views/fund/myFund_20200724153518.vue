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
        <ui-table :data="tableData1" border>
          <ui-table-column prop="code" label="基金代码" width="120"></ui-table-column>
          <ui-table-column prop="name" label="基金名称" width="120"></ui-table-column>
          <ui-table-column prop="assets" label="持仓资产" width="120"></ui-table-column>
          <ui-table-column prop="intres" label="昨日收益" width="150"></ui-table-column>
          <ui-table-column prop="intres1" label="累计收益" width="120"></ui-table-column>
          <ui-table-column prop="worth" label="净值" width="120"></ui-table-column>
          <ui-table-column prop="date" label="净值日期" width="120"></ui-table-column>
          <ui-table-column label="操作" width="120">
            <template slot-scope="scope">
              <ui-button @click="todetail(scope.row)" type="text" size="small">详情</ui-button>
              <ui-button type="text" size="small" @click="buy(scope.row)">赎回</ui-button>
              <!--  撤单 -->
            </template>
          </ui-table-column>
        </ui-table>
      </div>
       <!-- 赎回的弹出框 -->
    <ui-dialog title="基金赎回" :visible.sync="dialogVisible" width="80%" :before-close="handleClose" center="true">
      <div>
        <!-- <span class="tip-title">基金购买</span> -->
        <div class="fund-info">
          <ul>
            <li class="org-left">机构名称：{{info.company}}</li>
            <li class="org-right">机构代码：{{info.code}}</li>
          </ul>
          <ul>
            <li class="fund-name">{{info.code}}</li>
            <li class="fund-name">{{info.name}}</li>
            <li class="fund-risk">{{info.risk}}</li>
          </ul>
        </div>
        <div class="fund-account">
          <ul>
            <li>银行账户</li>
            <li>348888864530987</li>
          </ul>
          <div>
            <ui-input placeholder="请输入金额" v-model="amount">
              <template slot="prepend">购买金额</template>
              <template slot="append">元</template>
            </ui-input>
          </div>
        </div>
        <div slot="footer"  class="dialog-footer">  
          <ul @click="dialogVisible = false">取 消</ul>
          <ul @click="dialogVisible = false">确 定</ul>
        </div>
      </div>
    </ui-dialog>
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
          intres2: "1.9988",
          intres3: "0.42"
        },
        {
          code: "000001",
          name: "XXX天天理财",
          assets: "1，6225",
          intres: "44.09",
          intres1: "2345.00",
          intres2: "1.9988",
          intres3: "0.42"
        },
        {
          code: "000001",
          name: "XXX天天理财",
          assets: "1，6225",
          intres: "44.09",
          intres1: "2345.00",
          intres2: "1.9988",
          intres3: "0.42"
        },
      ],
      tableData1: [
        {
          code: "000001",
          name: "XXX天天理财",
          assets: "1，6225",
          intres: "44.09",
          intres1: "2345.00",
          worth: "1.9988",
          date: "2020-09-09"
        },
         {
          code: "000001",
          name: "XXX天天理财",
          assets: "1，6225",
          intres: "44.09",
          intres1: "2345.00",
          worth: "1.9988",
          date: "2020-09-09"
        },
         {
          code: "000001",
          name: "XXX天天理财",
          assets: "1，6225",
          intres: "44.09",
          intres1: "2345.00",
          worth: "1.9988",
          date: "2020-09-09"
        },
      ],
    };
  },
  methods: {
    seletype(index) {
      this.tab = index;
    },
    buy(row){
        // 赎回

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