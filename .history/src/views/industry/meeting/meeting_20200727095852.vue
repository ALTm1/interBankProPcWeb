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
    width:892px;
height:100px;
background:rgba(255,254,253,1);
border-radius:4px;
 
    margin: 0 auto;
    /* text-align: center; */
  
    border: 1px solid #999;
    margin-bottom: 30px;
    /* display: -webkit-box; */
} 

.meeting-left{
    float: left;
    width: 600px;
    /* width: 500px;
    display: -webkit-box; */
}
.meeting-left ul{
    width: 60px;
    height: 60px;
    background: rosybrown;
    float: left;
}

.meeting-left div li:nth-child(1){
   font-size:18px;
font-family:SimHei;
font-weight:400;
color:rgba(40,40,40,1);
margin-top: 26px;
}
.meeting-left div li:nth-child(2){
    font-size:14px;
font-family:SimHei;
font-weight:400;
color:rgba(153,153,153,1);
}   

.meeting-right{
    float: right;
}
.meeting-list img{
    width: 60px;
    height: 60px;
    
}
.meeting-list button{
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