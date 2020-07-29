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
    width: 700px;
    margin: 0 auto;
    border-radius: 20px;
    border: 1px solid #999;
    text-align: center;
    margin-top: 30px;
}
.news-list{
    padding: 30px 0;
    /* display: -webkit-box; */
}
.news-content{
    float: left;
}
.news-btn{
    float: right;
}
.news-list li:nth-child(1){
    font-size: 34px;
}
.news-list li:nth-child(2){
    font-size: 32px;
}
.news-list button{
    cursor: pointer;
    width: 150px;
    height: 50px;
    background: skyblue;
    border: none;
    color: #ffffff;
    border-radius: 20px;
    outline: none;
}
</style>