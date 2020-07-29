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
    border: 1px solid #999;
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
}
.news-list li:nth-child(1){
    font-size: 36px;
    padding: 30px;
}
.news-list li:nth-child(2){
    font-size: 32px;
}
.news-list button{
    border: none;
    width: 150px;
    height: 50px;
    background: skyblue;
    border-radius: 30px;
    color: #ffffff;
    /* font-size: 26px; */
    margin: 30px 0;
}
</style>