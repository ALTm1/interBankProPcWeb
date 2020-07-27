<template>
    <div>
        <!-- 我的基金 -->
        <div class="fund-earning">
            <ul>
                <li>基金总资产（元）</li>
                <li>{{totalamount}}</li>
            </ul>
            <ul>
                <li>昨日收益（元）</li>
                <li>{{earning}}</li>
            </ul>
            <ul>
                <li>累计收益（元</li>
                <li>{{intres}}</li>
            </ul>
        </div>
        <div>
            <li>持有产品</li>
            <div>
                <ul v-for="(item,index) in type" :key="index" class="type-wrap">
                    <li :class="tab==index?'sele':'nosele'">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'myfund',
    data(){
        return{
            totalamount:"345678.00",
            earning:"78.00",
            intres:"5678.00",
            type:["货币型","债券型"],
            tab:0
        }
    }
}
</script>
<style scoped>
.fund-earning{
    display: -webkit-box;
}
.fund-earning ul{
    margin-right: 30px;
    width: 26%;
    background: #f0f0f0;
    padding-top: 20px;
    text-align: center;
   padding: 20px;
}
.fund-earning ul li:nth-child(2){
    font-size: 24px;
    padding-top: 20px;
}
.sele{
    background: cornflowerblue;
    color: #ffffff;
    border: none;
}
.nosele{
    border: 1px solid #999;
}
.type-wrap li{
    width: 80px;
    height: 30px;
    text-align: center;
    line-height: 30px;
}
</style>