<template>
    <div>
        <!-- 舆情消息 -->
        <div class="news-wrap">
            <div v-for="(item,index) in newsList" :key="index" class="news-list">
                
                <div class="list-left">
                    <li>{{item.title}}</li>
                <li>{{item.time}}</li>
                </div>
                <div class="list-right">
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
            newsList:[
                {
                    title:"您报名参加的《XXXXXXX》会议已撤销",
                    time:"2019-09-23"
                },
                {
                    title:"您报名参加的《XXXXXXX》会议已撤销",
                    time:"2019-09-23"
                },
            ]
        }
    }
}
</script>
<style scoped>
.news-wrap{
    width: 80%;
    margin: 0 auto;
}
.news-list{
    width:892px;
height:100px;
background:rgba(255,254,253,1);
border-radius:4px;
}
.list-right{
    float: right;
    line-height: 100px;
    margin-right: 30px;
}
.list-left{
    float: left;
    margin-left: 26px;
}
.list-left li:nth-child(1){
    font-size:18px;
font-family:SimHei;
font-weight:400;
color:rgba(40,40,40,1);
margin-top: 26px;
}
.list-left li:nth-child(2){
    font-size:14px;
font-family:SimHei;
font-weight:400;
color:rgba(153,153,153,1);
margin-top: 14px;
}
.news-list button{
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