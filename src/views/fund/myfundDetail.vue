<template>
  <div>
    <div class="product-wrap">
        <ul class="product-info">
      <li></li>
      <li>产品信息</li>
    </ul>
    <div class="detail-info">
      <div>
        <li>{{fundinfo.code}}</li>
        <li>{{fundinfo.name}}</li>
        <li>{{fundinfo.risk}}</li>
      </div>
      <div>
        <ul>
          <li class="fund-rate">{{fundinfo.rate7}}</li>
          <li>7日年化收益率</li>
        </ul>
        <ul>
          <li class="fund-rate">{{fundinfo.rate}}</li>
          <li>万份收益</li>
        </ul>
        <ul>
          <li>{{fundinfo.company}}</li>
          <li>发行公司</li>
        </ul>
        <ul>
          <li>{{fundinfo.type}}</li>
          <li>货币类型</li>
        </ul>
      </div>
      <div>
          <ul>
              <li>持有资产（元）</li>
              <li>{{fundinfo.assets}}</li>
          </ul>
          <ul>
              <li>昨日收益（元）</li>
              <li>{{fundinfo.intres}}</li>
          </ul>
          <ul>
              <li>累计收益（元）</li>
              <li>{{fundinfo.intres1}}</li>
          </ul>
      </div>
    </div>
    <ul class="product-info">
        <li></li>
        <li>交易信息</li>
      </ul>
      <div class="trans-info">
          <ul>
              <li class="trans-left">申购日期：{{transinfo.date}}</li>
              <li class="trans-right">交易状态：{{transinfo.state}}</li>
          </ul>
          <ul>
              <li class="trans-left">交易账号：{{transinfo.account}}</li>
              <li class="trans-right">交易流水号：{{transinfo.number}}</li>
          </ul>
      </div>
    </div>
    <!-- 表格 -->
      <!-- 表格 -->
    <div class="echarts-tab">
      <ul v-for="(item,index) in title" :key="index">
        <li :class="tab==index?'sele':'nosele'" @click="sele(index)">{{item}}</li>
      </ul>
    </div>
    <div class="echart-wrap" v-if="tab==0">
      <!---->
	  <echartstwo></echartstwo>
    </div>
    <div v-if="tab==1" class="echarts-two">
      <echart></echart>
    </div>
  </div>
</template>
<script>
import echart from './eCharts'
import echartstwo from './eChartstwo'
export default {
  name: "mufunddetail",
  components:{
     echart,
	  echartstwo
  },
  data(){
      return{
         tab: 0,
        title: ["7日年化收益率走势", "万份收益走势"],
        fundinfo: {
        code: "000001",
        name: "XXX天天理财",
        rate7: "1，6225",
        rate: "0.42",
        company: "XXX基金公司",
        risk: "低风险",
        amount: "500000",
        type:"货币型",
        assets:"345678.00",
        intres:"78.00",
        intres1:"5678.00",
      },
      transinfo:{
          date:"2020-09-09",
          state:"成功",
          account:"***********9999",
          number:"834709215745"
      }
      }
  },
  methods:{
     sele(index) {
	  this.tab = index;
	//   if(index==0){
	// 	 this.Chart();
	//   }
    },
  }
};
</script>
<style scoped>
.product-info {
  display: -webkit-box;
  font-size: 20px;
  position: relative;
}
.product-info li:nth-child(1) {
  width: 5px;
  background: royalblue;
  margin-right: 10px;
}
.detail-info div{
    display: -webkit-box;
}
.detail-info div:nth-child(1){
    font-size: 22px;
    padding: 30px 0 0 40px;
}
.detail-info div:nth-child(1) li{
    margin-left: 10px;
}
.detail-info{
    border-radius: 20px;
    /* background: #f0f0f0; */
    width: 80%;
    margin: 0 auto;
}
.detail-info div:nth-child(2) li{
    padding: 5px;
}
.fund-rate{
    color: rgb(211, 0, 46);
    font-size: 24px;
}
.detail-info div:nth-child(2) ul:nth-child(3),.detail-info div:nth-child(2) ul:nth-child(4){
    margin-top: 18px;
}
.detail-info div:nth-child(2) ul:nth-child(3) li:nth-child(2),.detail-info div:nth-child(2) ul:nth-child(4) li:nth-child(2){
    margin-top: 5px;
}
.trans-info ul{
    width: 80%;
    margin: 0 auto;
    height: 30px;
    line-height: 30px;
    padding-top: 10px;
}
.trans-info{
    padding-bottom: 50px;
}
.trans-left{
    float: left;
}
.trans-right{
    float: right;
}
.product-wrap{
    width: 80%;
    margin: 0 auto;
    border: 1px solid #999;
    border-radius: 10px;
}
.sele {
  border-top: 3px solid #D02F50;
  color: #D02F50;
}
.echarts-tab {
  display: -webkit-box;
  /* margin-top: 50px; */
  margin: 50px 0;
}
.echarts-tab ul {
  text-align: center;
  width: 50%;
   
}
.echarts-tab ul li{
	padding: 10px;
}
</style>