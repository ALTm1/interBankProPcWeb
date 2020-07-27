<template>
    <div>
        <!-- 面包屑导航 -->
        <div class="league-wrap">
            <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">员工中心</ui-breadcrumb-item>
        <ui-breadcrumb-item :to="{ path: 'league' }">参团意向列表</ui-breadcrumb-item>
      </ui-breadcrumb>

            <!-- <ui-breadcrumb separator-class="el-icon-arrow-right">
      <ui-breadcrumb-item :to="{ path: 'league' }">员工中心</ui-breadcrumb-item>
      <ui-breadcrumb-item>参团意向列表</ui-breadcrumb-item>
     
    </ui-breadcrumb> -->
        </div>
         <div>
             <router-view/>
         </div>
    </div>
</template>
<script>
export default {
    name:'league'
}
</script>
<style scoped>
.league-wrap{
    margin: 30px;
}
</style>