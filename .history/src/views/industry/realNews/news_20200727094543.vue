<template>
    <div>
        <!-- 舆情信息 -->
        <div class="realnews-wrap">
            <div class="news-list" v-for="(list,index) in infoList" :key="index">
                <div class="news-content">
                    <li>{{list.title}}</li>
                <li>{{list.time}}</li>
                </div>
                <div class="news-btn">
                    <button @click="toDetail(index)">查看详情</button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return{
            infoList:[
                {
                    title:"舆情标题舆情标题舆情标题",
                    time:"2020-03-23"
                },
                {
                    title:"舆情标题舆情标题舆情标题",
                    time:"2020-03-23"
                },
            ]
        }
    },
    methods:{
        toDetail(index){
        this.$router.push('newsdetail')
    }
    }
    
}
</script>
<style scoped>
.news-list{
    width:892px;
    height: 100px;
    height: 80px;
    margin: 0 auto;
    border-radius: 20px;
    background: #FFFEFD;
    margin-top: 30px;
}
.news-list{
    padding: 30px;
}
.news-content{
    float: left;
}
.news-btn{
    float: right;
}
.news-list li:nth-child(1){
    font-size: 30px;
}
.news-list li:nth-child(2){
    font-size: 26px;
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