<template>
    <div>
       <div>
           <ul class="product-info">
          <li></li>
          <li>产品信息</li>
        </ul>
       </div>
    </div>
</template>
<script>
export default {
    name:'mufunddetail'
}
</script>
<style scoped>
.product-info {
  display: -webkit-box;
  font-size: 20px;
  position: relative;
}
.product-info li:nth-child(1) {
  width: 5px;
  background: royalblue;
  margin-right: 10px;
}
</style>