<template>
    <div>
        <!-- 会议 -->
        <div class="meeting-wrap">
            <div class="meeting-list" v-for="(meet,index) in meetList" :key="index">
                <div class="meeting-left">
                    <ul><img src="" alt=""></ul>
                    
                <div>
                    <li>{{meet.title}}</li>
                    <li>发布时间：{{meet.time}}</li>
                </div>
                </div>
                <div class="meeting-right">
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
            meetList:[
                {   
                    imgUrl:"",
                   title:"会议标题会议标题会议标题",
                   time:"2019-02-23" 
                },
                {   
                    imgUrl:"",
                   title:"会议标题会议标题会议标题",
                   time:"2019-02-23" 
                },
            ]
        }
    },
    methods:{
        toDetail(index){
            this.$router.push('meetdetail')
        }
    }
}
</script>
<style scoped>
.meeting-wrap{
    width: 80%;
    margin: 0 auto;
}
.meeting-list{
    width: 800px;
    margin: 0 auto;
    text-align: center;
    border-radius: 20px;
    height: 80px;
    padding: 20px;
    border: 1px solid #999;
    margin-bottom: 30px;
    /* display: -webkit-box; */
} 
.meeting-list div{
    height: 100px;
    
}
.meeting-left{
    float: left;
}
.meeting-left ul{
    width: 60px;
    height: 60px;
    background: rosybrown;
    float: left;
}
.meeting-left div{
    width: 300px;
}
.meeting-right{
    float: right;
}
.meeting-list img{
    width: 60px;
    height: 60px;
    
}
.meeting-list button{
    outline: none;
    cursor: pointer;
    border: none;
    background: skyblue;
    color: #fff;
    width: 150px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
}  
</style>