<!--
 * @Author: your name
 * @Date: 2020-07-27 17:47:20
 * @LastEditTime: 2020-07-30 13:41:30
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
    <div style="marginTop:56px">
      <ButtonItem text="完成" backgroundColor="#CE2848" @click.native="returnIndex()"></ButtonItem>
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
  methods: {
    returnIndex() {
      this.$router.push({
        path: '/financialMarket/productTrade/proTrade',
      })
    },
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