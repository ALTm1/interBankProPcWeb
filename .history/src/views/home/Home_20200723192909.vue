<template>
    <div class="header-wrap">
        <!-- 首页 -->
        <!-- 轮播图 -->
        <Header></Header>
        <!-- 产品列表 -->
        <infolist></infolist>
        <!-- 地图 -->
        <Map></Map>
        <div class="footer-wrap">
          <li>版权信息版权信息版权信息版权信息版权信息</li>
        </div>
    </div>
</template>
<script>
import Header from './Header'
import infolist from './infoList'
import Map from './map'
export default {
    name:'home',
    components:{
        Header,
        infolist,
        Map
    }
}
</script>
<style scoped>
.header-wrap{
    width: 100%;
}
</style>