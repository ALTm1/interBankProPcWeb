<template>
    <div>
       <div class="fund-sele">
           <!-- 筛选 -->
           <li>基金筛选</li>
           <ul v-for="(item,index) in type" :key="index">
               <li :class="index==tid?'selected':'nosele'" @click="sele(index)">{{item}}</li>
           </ul>
           <input type="text" placeholder="请输入基金名称" v-model="name">
           <input type="text" placeholder="请输入基金代码" v-model="code">
       </div>
       <!-- table -->
       <div class="fund-table">

       </div>
    </div>
</template>
<script>
export default {
    name:'fundproduct',
    data(){
        return{
            name:"",
            code:"",
            tid:0,
            type:["货币型","债券型"]
        }
    },
    methods:{
        sele(index){
            this.tid=index
        }
    }
}
</script>
<style scoped>
.fund-sele{
    border-radius: 20px;
    background: #f0f0f0;
    width: 70%;
    margin: 0 auto;
}
.fund-sele li:nth-child(1){
    line-height: 4;
}
.fund-sele,.fund-sele ul{
    display: -webkit-box;
}
.fund-sele ul li{
    width: 100px;
    height: 25px;
    line-height: 25px;
    border-radius: 20px;
    text-align: center;
    margin-top: 10px;
}
.fund-sele input{
    width: 180px;
    height: 30px;
    line-height: 30px;
    border-radius: 20px;
    border: none;
    text-align: center;
    margin: 20px;
}
.nosele{
    border: 1px solid #999;
}
.selected{
    background: skyblue;
    color: #ffffff;
}
</style>