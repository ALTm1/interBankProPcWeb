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
    display: -webkit-box;
    border-radius: 20px;
   background: #FFFEFD;
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
    width:892px;
    height: 100px;
}
.news-list li:nth-child(1){
    font-size: 30px;
    padding: 30px;
}
.news-list li:nth-child(2){
    font-size: 32px;
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