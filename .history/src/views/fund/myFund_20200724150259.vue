<template>
    <div>
        <!-- 我的基金 -->
        <div>
            <ul>
                <li>基金总资产（元）</li>
                <li>{{totalamount}}</li>
            </ul>
            <ul>
                <li>昨日收益（元）</li>
                <li></li>
            </ul>
            <ul>
                <li>累计收益（元</li>
                <li></li>
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
            rate:"78.00",
            intres:""
        }
    }
}
</script>
<style scoped>

</style>