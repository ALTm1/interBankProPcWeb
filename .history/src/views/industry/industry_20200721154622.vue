<template>
    <div>
        <!-- 左侧是菜单 -->
        <div>
      <ui-breadcrumb separator-class="el-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: 'realnews' }">行业动态</ui-breadcrumb-item>
        <ui-breadcrumb-item>资讯</ui-breadcrumb-item>
        <!-- <ui-breadcrumb-item>活动列表</ui-breadcrumb-item>
        <ui-breadcrumb-item>活动详情</ui-breadcrumb-item>-->
      </ui-breadcrumb>
    </div>
    
    <router-view/>
    
    </div>
</template>
<script>
// import realnews from './realNews/realNews'
export default {
    name:"",
    components:{
        // realnews
    },
   
}
</script>
<style scoped>

</style>