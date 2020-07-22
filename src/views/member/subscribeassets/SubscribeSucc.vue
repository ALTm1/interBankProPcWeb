<!--
 * @Author: your name
 * @Date: 2020-07-21 13:39:21
 * @LastEditTime: 2020-07-21 14:41:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jn-pc\src\views\member\attentionassets\AttentionSucc.vue
--> 

<template>
  <div class="pro-succ">
    <p class="pro-succ-top">
      <img :src="succImg" alt="succImg" />
      <span>取消关注成功</span>
    </p>
    <ui-button type="primary" style="width: 200px">完成</ui-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      succImg: require('@/assets/image/logo.png')
    }
  }
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