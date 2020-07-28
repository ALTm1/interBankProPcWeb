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
    </div>
</template>
<script>
export default {
    name:'myfund',
    data(){
        return{
            totalamount:"345678.00",
            earning:"78.00",
            intres:"5678.00"
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
    width: 30%;
    background: #f0f0f0;
}
</style>