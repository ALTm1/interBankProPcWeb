<template>
  <div>
    <!-- 舆情消息 -->
    <div class="news-wrap">
      <div v-for="(item,index) in newsList" :key="index" class="news-list">
        <div>
          <li>{{item.title}}</li>
          <li>{{item.time}}</li>
        </div>
        <button>查看详情</button>
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
          time: "2019-09-23"
        },
        {
          title: "舆情标题舆情标题舆情标题",
          time: "2019-09-23"
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
  /* width: 600px; */
  display: -webkit-box;
  border-radius: 20px;
  border: 1px solid #999;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
}
.news-list li:nth-child(1) {
    font-size:18px;
font-family:SimHei;
font-weight:400;
color:rgba(40,40,40,1)
 
}
.news-list li:nth-child(2) {
  font-size: 32px;
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
  /* margin: 30px 0; */
  outline: none;
  cursor: pointer;
}
</style>