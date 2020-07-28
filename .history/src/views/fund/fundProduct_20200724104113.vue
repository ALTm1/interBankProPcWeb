<template>
    <div>
       <div class="fund-sele">
           <!-- 筛选 -->
           <li class="fund-title">基金筛选</li>
           <ul v-for="(item,index) in type" :key="index">
               <li :class="index==tid?'selected':'nosele'" @click="sele(index)">{{item}}</li>
           </ul>
           <input type="text" placeholder="请输入基金名称" v-model="name">
           <input type="text" placeholder="请输入基金代码" v-model="code">
       </div>
       <!-- table -->
       <div class="fund-table">
           <ui-table :data="tableData" border>
        <ui-table-column prop="name" label="产品名称" width="120"></ui-table-column>
        <ui-table-column prop="type" label="产品类型" width="120"></ui-table-column>
        <ui-table-column prop="transcation" label="交易方向" width="120"></ui-table-column>
        <ui-table-column prop="orgnization" label="机构全称" width="150"></ui-table-column>
        <ui-table-column prop="rate" label="利率" width="120"></ui-table-column>
        <ui-table-column prop="amount" label="金额" width="120"></ui-table-column>
        <ui-table-column prop="date" label="期限" width="120"></ui-table-column>
        <ui-table-column prop="state" label="产品状态" width="120"></ui-table-column>
        <ui-table-column label="操作" width="120">
          <template slot-scope="scope">
            <ui-button @click="handleClick(scope.row)" type="text" size="small">查看详情</ui-button>
            <ui-button type="text" size="small" v-if="scope.row.state=='生效'"  @click="drop(scope.row)" >下架</ui-button>
          </template>
        </ui-table-column>
      </ui-table>
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
            type:["货币型","债券型"],
            tableData:[
                {
                    
                }
            ]
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
.fund-title{
   
    margin: 25px 0 0 20px;
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
    outline: none;
}
.nosele{
    border: 1px solid #999;
}
.selected{
    background: skyblue;
    color: #ffffff;
}
</style>