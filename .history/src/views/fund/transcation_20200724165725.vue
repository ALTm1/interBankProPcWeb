<template>
  <div>
    <div class="fund-sele">
      <!-- 筛选 -->
      <li class="fund-title">基金筛选</li>
      <ul v-for="(item,index) in type" :key="index">
        <li :class="index==tid?'selected':'nosele'" @click="sele(index)">{{item}}</li>
      </ul>
     交易日前   
    </div>
    <!-- table -->
    <div class="fund-table">
      <ui-table :data="tableData" border>
        <ui-table-column prop="code" label="基金代码" width="120"></ui-table-column>
        <ui-table-column prop="name" label="基金名称" width="120"></ui-table-column>
        <ui-table-column prop="rate7" label="7日年化收益率" width="120"></ui-table-column>
        <ui-table-column prop="rate" label="万份收益（元）" width="150"></ui-table-column>
        <ui-table-column prop="company" label="发行公司" width="120"></ui-table-column>
        <ui-table-column prop="risk" label="风险等级" width="120"></ui-table-column>
        <ui-table-column prop="amount" label="单日累计购买限额" width="120"></ui-table-column>
        <ui-table-column label="操作" width="120">
          <template slot-scope="scope">
            <ui-button @click="todetail(scope.row)" type="text" size="small">详情</ui-button>
            <ui-button type="text" size="small" @click="buy(scope.row)">申购</ui-button>
          </template>
        </ui-table-column>
      </ui-table>
    </div>
    <!-- 申购的弹出框 -->
    <ui-dialog title="基金购买" :visible.sync="dialogVisible" width="80%" :before-close="handleClose" center="true">
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
</template>
<script>
export default {
  name: "fundproduct",
  data() {
    return {
      amount:"",
      tid: 0,
      type: ["货币型", "债券型"],
      tableData: [
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
      info: {},
      dialogVisible: false
    };
  },
  methods: {
    sele(index) {
      this.tid = index;
    },
    todetail(row) {
      // 跳转到详情页
      this.$router.push("/index/funddetail");
    },
    buy(row) {
      //弹出框
      this.dialogVisible = true;
      console.log(row);
      this.info = row;
    },
    handleClose() {}
  }
};
</script>
<style scoped>
.fund-sele {
  border-radius: 20px;
  background: #f0f0f0;
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
}
.fund-title {
  margin: 25px 0 0 20px;
}
.fund-sele,
.fund-sele ul {
  display: -webkit-box;
}
.fund-sele ul li {
  width: 100px;
  height: 25px;
  line-height: 25px;
  border-radius: 20px;
  text-align: center;
  margin-top: 10px;
}
.fund-sele input {
  width: 180px;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  border: none;
  text-align: center;
  margin: 20px;
  outline: none;
}
.nosele {
  border: 1px solid #999;
}
.selected {
  background: skyblue;
  color: #ffffff;
}
.fund-table {
  width: 991px;
  margin: 0 auto;
  margin-top: 50px;
}
.fund-info{
    width: 80%;
    margin: 0 auto;
    border: 1px solid #999;
    border-radius: 20px;
}
.fund-info ul{
    height: 30px;
}
.fund-info ul:nth-child(2){
    display: -webkit-box;
}
.fund-info ul:nth-child(1){
    font-size: 24px;
}
.org-left{
    float: left;
}
.org-right{
    float: right;
    margin-right: 50px;
}
.fund-risk{
    border-radius: 20px;
    background: rgb(74, 193, 223);
    color: #ffffff;
    width: 60px;
    height: 25px;
    line-height: 25px;
    text-align: center;
}
.fund-name{
    font-size: 26px;
    margin-right: 40px;
}
.fund-account{
    width: 50%;
    margin: 0 auto;
    margin-top: 50px;
}
.fund-account ul{
    display: -webkit-box;
    margin: 20px 0;
    border: 1px solid #999;
    border-radius: 10px;
    height: 40px;
    line-height: 40px;
}
.fund-account ul li:nth-child(2){
    margin-left: 30px;
}
.dialog-footer{
    border-top: 1px solid #999;
    margin-top: 80px;
    display: -webkit-box;
    text-align: center;
    font-size: 24px;
    color: rgb(31, 166, 219);
}
.dialog-footer ul{
    width: 50%;
}
.dialog-footer ul:nth-child(1){
    border-right: 1px solid #999;
}
</style>