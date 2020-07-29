<!--
 * @Author: your name
 * @Date: 2020-07-27 17:47:20
 * @LastEditTime: 2020-07-27 17:48:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankProPcWeb\src\views\financialmarket\producttrade\ProTradeSucc.vue
--> 


<template>
  <div class="pro-succ">
    <p class="pro-succ-top">
      <img :src="succImg" alt="succImg" />
      <span>交易成功</span>
    </p>
    <p>您的意向已提交,请等待对手方确认</p>
    <ui-button type="primary" style="width: 200px">完成</ui-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      succImg: require('@/assets/image/logo.png'),
    }
  },
}
</script>

<style lang="css" scoped>
.pro-succ {
  text-align: center;
}
.pro-succ-top > img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
</style>