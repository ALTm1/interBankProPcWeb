<template>
    <div>
        <!-- 我的基金 -->
        <div>
            <ul>
                <li>基金总资产（元）</li>
                <li>{{totalamount}}</li>
            </ul>
            <ul>
                <li></li>
                <li></li>
            </ul>
            <ul>
                <li></li>
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
            rate:"78.00"
        }
    }
}
</script>
<style scoped>

</style>