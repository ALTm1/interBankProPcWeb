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
.fund-sele,.fund-sele ul{
    display: -webkit-box;
}
.nosele{
    border: 1px solid #999;
}
.selected{
    background: skyblue;
    color: #ffffff;
}
</style>