<template>
  <div>
    <div class="header-wrap">
      <!-- 面包屑 -->
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">基金通</ui-breadcrumb-item>
        <ui-breadcrumb-item>产品详情</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
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
    </div>
    <!-- 表格 -->
    <div>
      <div id="main1" style="float:left;width:100%;height: 300px"></div>
    </div>
    <!-- 产品介绍 -->
    <!-- <div class="fund-intro">
        <span>产品介绍</span>
        <li>TA名称：易方达基金管理有限公司</li>
        <li>基金经理：刘朝阳</li>
        <ul>
            <li>基金经理简介：</li>
            <li></li>
        </ul>
        <ul>
            <li>投资策略：</li>
            <li></li>
        </ul>
    </div> -->
  </div>
</template>
<script>
let echarts = require("echarts/lib/echarts");
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: "funddetail",
  data() {
    return {
      fundinfo: {
        code: "000001",
        name: "XXX天天理财",
        rate7: "1，6225",
        rate: "0.42",
        company: "XXX基金公司",
        risk: "低风险",
        amount: "500000",
        type:"货币型"
      },
      // 图表数据
      
    };
  },
  mounted(){
    this.Chart();
  },
  methods:{
    Chart(){
      var myChart = echarts.init(document.getElementById('main1'));
       myChart.setOption({
         option : {
				backgroundColor: '#fff',
				tooltip: {
					trigger: 'axis',
					backgroundColor: 'rgba(0,0,0,0.5)',
					axisPointer: {
						lineStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: '#d9efff'
								}, {
									offset: 0.5,
									color: '#48b3FF',
								}, {
									offset: 1,
									color: '#d9efff'
								}],
								global: false
							}
						},
					},
				},
				grid: {
					top: '5%',
					left: '5%',
					right: '3%',
					bottom: '8%',
					// containLabel: true
				},
				xAxis: [{
					type: 'category',
					color: '#59588D',
					axisLine: {
						show: true
					},
					axisLabel: {
						color: '#282828'
					},
					splitLine: {
						// show: true
					},

					axisTick: {
						show: false
					},
					// boundaryGap: true,
					data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],

				}],

				yAxis: [{
					type: 'value',
					min: 0,
					splitNumber: 4,
					splitLine: {
						show: true,

					},
					axisLine: {
						show: true,
					},
					axisLabel: {
						show: true,
						// margin: 20,
						textStyle: {
							color: '#737373',

						},
					},
					axisTick: {
						show: false,
					},
					splitLine: {
						lineStyle: {
							color: 'rgba(131,101,101,0.2)',
							type: 'dashed',
						}
					}
				}],
				series: [{
					name: '',
					type: 'line',
					// smooth: true, //是否平滑
					showAllSymbol: true,
					symbol: 'circle',
					symbolSize: 10,
					lineStyle: {
						normal: {
							color: "#48B3FF"
						},
					},
					label: {
						show: false,
						position: 'top',
						textStyle: {
							color: '#48B3FF',
						}
					},

					itemStyle: {
						color: "#FFF",
						borderColor: "#48B3FF",
						borderWidth: 2,
						
					},
					tooltip: {
						show: true
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(195,230,255,1)'
								},
								{
									offset: 1,
									color: 'rgba(195,230,255,0.1)'
								}
							], false),
							shadowColor: 'rgba(195,230,255,0.1)',
							shadowBlur: 20
						}
					},
					data: [55, 35, 62, 55, 97, 64, 44, 66, 78, 82, 33, 77],
				}]
			}
       })
      

    }
  }
};
</script>
<style scoped>
.header-wrap {
  padding: 30px;
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
    background: #f0f0f0;
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
.fund-intro{
    width: 90%;
    margin: 0 auto;
    /* padding: 20px 0; */
    border-radius: 20px;
    background: #f0f0f0;
   margin-top: 50px;
}
.fund-intro span{
    margin: 20px 0 5px 30px;
    padding-bottom: 5px;
    border-bottom: 3px solid rgb(240, 90, 172);
}
</style>