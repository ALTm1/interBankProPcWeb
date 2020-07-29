<template>
    <div>
        <div id="echart" style="width:100%;height: 300px"></div>
    </div>
</template>
<script>
let echarts = require("echarts/lib/echarts");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
    name:'echart',
    mounted(){
        this.Chart1();
    }
}
</script>

<style scoped>

</style>