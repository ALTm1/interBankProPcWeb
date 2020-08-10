<template>
  <div>
    <!-- 我的基金 -->
    <div class="fund-earning">
      <div>
        <ul>
        <li>基金总资产</li>
        <li>（元）</li>
        <li>{{totalamount}}</li>
      </ul>
      <ul>
        <li>昨日收益</li>
         <li>（元）</li>
        <li>{{earning}}</li>
      </ul>
      <ul>
        <li>累计收益</li>
         <li>（元）</li>
        <li>{{intres}}</li>
      </ul>
      </div>
      
    </div>
    <div class="fund-con">
      <li>持有产品</li>
      <div class="type-pro">
        <ul v-for="(item,index) in type" :key="index" class="type-wrap" @click="seletype(index)">
          <span :class="tab==index?'sele':'nosele'">{{item}}</span>
        </ul>
      </div>
      <div v-if="tab==0" class="fund-table">
        <!-- 货币型 -->
        <ui-table :data="tableData" row-class-name="row-class" header-cell-class-name="header">
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
      <div v-if="tab==1" class="fund-table">
        <!-- 债券型 -->
        <ui-table :data="tableData1" >
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
              <template slot="prepend">赎回份额</template>
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
    <!-- 撤单 -->
    <ui-dialog title="基金赎回" :visible.sync="dialogVisible1" width="80%" :before-close="handleClose" center="true">
      <div>
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
          <ul>
            <li>撤单金额</li>
            <li>2345.00</li>
            <li>元</li>
          </ul>
        </div>
        <div slot="footer"  class="dialog-footer">  
          <ul @click="dialogVisible1 = false">取 消</ul>
          <ul @click="dialogVisible1 = false">确 定</ul>
        </div>
      </div>
    </ui-dialog>
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
  name: "myfund",
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 1,
        dialogVisible:false,
        dialogVisible1:false,
        info:{},
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
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(row){
      this.$router.push('leaguedetail')
    },
    seletype(index) {
      this.tab = index;
    },
    buy(row){
        // 赎回
      this.dialogVisible = true;
      this.info = row;
    },
    todetail(row){
        this.$router.push('/index/myfunddetail')
    }
  }
};
</script>
<style>
.fund-table .ui-table .cell{
    /* width: 990px; */
    text-align: center;
     font-size: 12px;
  text-align: center;
}
.ui-table .row-class,.ui-table  .header{
  font-size:12px;
  text-align: center;
}
</style>
<style scoped>
.fund-earning {
  height:199px;
background:rgba(255,254,253,1);
border-radius:4px;
 
}
.fund-earning div{
  width: 94%;
  margin: 0 auto;
   display: -webkit-box;
}
.fund-earning ul {
  /* width:261px; */
height:155px;
border-radius:4px;
  margin-right: 5.45%;
  margin-top: 21px;
  width: 29.4%;
  color: #FFFFFF;
  text-align: center;
  padding-left: 0;
}
.fund-earning ul:nth-child(1){
  background:linear-gradient(-90deg,rgba(118,56,199,1) 0%,rgba(179,52,185,1) 100%);
box-shadow:0px 0px 20px 0px rgba(129,55,196,0.2);
}
.fund-earning ul:nth-child(2){
background:linear-gradient(72deg,rgba(242,175,32,1) 0%,rgba(252,134,24,1) 100%);
box-shadow:0px 0px 20px 0px rgba(249,147,27,0.2);
}
.fund-earning ul:nth-child(3){
  background:linear-gradient(72deg,rgba(108,151,239,1) 0%,rgba(70,93,249,1) 100%);
box-shadow:0px 0px 20px 0px rgba(74,99,248,0.2);
}
.fund-earning ul li:nth-child(1){
  margin-top: 32px;
}
.fund-earning ul li:nth-child(1),.fund-earning ul li:nth-child(2) {
  font-size:17px;
font-weight:400;
color:rgba(255,255,255,1);
line-height:22px;
}
.fund-earning ul li:nth-child(3) {
  font-size:32px;
  padding-top: 28px;

}
.fund-con{
  background-color: #FFFEFD;
  margin-top: 20px;
}
.fund-con li:nth-child(1){
  font-size:16px;
font-family:SimHei;
font-weight:400;
color:rgba(51,51,51,1);
padding: 19px 0  0 27px;
}
.sele {
     color:#333333;

border-bottom: 3px solid #D02F50;
}
.nosele {
   /* border: 1px solid #999; */
  color: #666666;
}
.type-pro {
  display: -webkit-box;
}
.type-wrap{
  padding-left: 27px;
}
.type-wrap span {
font-size:14px;
cursor: pointer;
font-size:12px;
font-family:SimHei;
font-weight:400;
  text-align: center;
  padding-bottom: 10px;
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
.page-wrap{
  text-align: center;
  margin-top: 50px;
}
</style>