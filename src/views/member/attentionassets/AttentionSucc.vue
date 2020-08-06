<!--
 * @Author: your name
 * @Date: 2020-07-21 13:39:21
 * @LastEditTime: 2020-07-30 15:51:14
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
    <div style="marginTop:56px">
      <ButtonItem text="完成" backgroundColor="#CE2848"></ButtonItem>
    </div>
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