<template>
  <div>
    <!-- 舆情消息 -->
    <div class="news-wrap">
      <div v-for="(item,index) in newsList" :key="index" class="news-list">
        <div class="news-left">
          <li>{{item.title}}</li>
          <li>发布时间：{{item.time}}</li>
        </div>
        <div class="news-right">
           <button>查看详情</button>
        </div>
       
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsList: [
        {
          title: "舆情标题舆情标题舆情标题",
          time: "2020-09-10  19：00"
        },
        {
          title: "舆情标题舆情标题舆情标题",
          time: "2020-09-10  19：00"
        }
      ]
    };
  }
};
</script>
<style scoped>
.news-wrap {
  width: 80%;
  margin: 0 auto;
}
.news-list {
  width:892px;

border-radius:4px;
  /* display: -webkit-box; */
  border: 1px solid #999;
  /* text-align: center; */

 background: #FFFEFD;
  height:100px;
  margin-bottom: 13px;
}
.news-left{
  float: left;
  margin-left: 26px;
}
.news-right{
  float: right;
  line-height: 100px;
  margin-right: 30px;
}
.news-list li:nth-child(1) {
    font-size:18px;
font-family:SimHei;
font-weight:400;
color:rgba(40,40,40,1)
 
}
.news-list li:nth-child(2) {
  font-size:14px;
font-family:SimHei;
font-weight:400;
color:rgba(153,153,153,1);
}
.news-list button {
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