<!--
 * @Author: your name
 * @Date: 2020-07-21 18:32:07
 * @LastEditTime: 2020-07-21 18:33:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jn-pc\src\views\member\addressbook\AddressBookSucc.vue
--> 


<template>
  <div class="pro-succ">
    <p class="pro-succ-top">
      <img :src="succImg" alt="succImg" />
      <span>提交成功</span>
    </p>
    <p>您可进入产品中心查看已发布产品</p>
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

<style  lang="css" scoped>
.pro-succ {
  text-align: center;
}
.pro-succ-top > img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
</style>