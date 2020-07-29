<template>
    <div>
       <div class="fund-sele">
           <!-- 筛选 -->
           <li></li>
           <ul v-for="(item,index) in ">
               <li></li>
               
           </ul>
           <input type="text">
           <input type="text">
       </div>
       <!-- table -->
       <div class="fund-table">

       </div>
    </div>
</template>
<script>
export default {
    name:'fundproduct'
}
</script>
<style scoped>
.fund-sele,.fund-sele ul{
    display: -webkit-box;
}

</style>