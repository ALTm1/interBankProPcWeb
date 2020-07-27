<template>
    <div>
        <!-- 交易信息 -->
        <div class="transcation-wrap">
            <div class="transcation-list" v-for="(item,index) in transcation" :key="index">
                <div class="transcation-left">
                    <li class="transcation-title">{{item.state}}</li>
                    <ul>
                        <li class="type-left">产品类型：{{item.type}}</li>
                        <li class="type-right">交易方向：{{item.direction}}</li>
                    </ul>
                    <li>发布时间：{{item.time}}</li>
                </div>
                <div class="transcation-right">
                    <button>查看详情</button>
                </div>
            </div>
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
    data(){
        return{
            currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 1,
            transcation:[
                {
                    state:'您的意向已被确认',
                    type:"同业存放",
                    direction:"资金融入",
                    time:"2020-09-10  19：00"
                },
                {
                    state:'您的意向已被确认',
                    type:"同业存放",
                    direction:"资金融入",
                    time:"2020-09-10  19：00"
                },
            ]
        }
    },
    methods:{
          handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
    }
}
</script>
<style scoped>
.transcation-wrap{
    width: 80%;
    margin: 0 auto;
}
.transcation-title{
   font-size:18px;
font-family:SimHei;
font-weight:400;
color:rgba(40,40,40,1);
margin-left: 26px;
}
.transcation-list{
    /* border: 1px solid #999; */
    width:892px;
height:100px;
background:rgba(255,254,253,1);
border-radius:4px;
margin-bottom: 13px;
}
.transcation-left{
    float: left;
}
.transcation-right{
    float: right;
    line-height: 100px;
    margin-right: 30px;
}
.transcation-left li:last-child{
    font-size:14px;
font-family:SimHei;
font-weight:400;
color:rgba(153,153,153,1);font-size:14px;
font-family:SimHei;
font-weight:400;
color:rgba(153,153,153,1);
margin-left: 26px;
}
.type-left{
    float: left;
    font-size:14px;
font-family:SimHei;
font-weight:400;
color:rgba(153,153,153,1);
}
.type-right{
    float: right;
    font-size:14px;
font-family:SimHei;
font-weight:400;
color:rgba(153,153,153,1);
}
.transcation-list button{
     width: 99px;
  height: 30px;
  border: 1px solid rgba(208, 47, 80, 1);
  border-radius: 15px;
  font-size: 16px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(208, 47, 80, 1);
  background-color: #fff;
  /* margin: 30px 0; */
  outline: none;
  cursor: pointer;
}
</style>