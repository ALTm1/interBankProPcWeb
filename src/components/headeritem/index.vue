<!--
 * @Author: your name
 * @Date: 2020-07-29 16:41:30
 * @LastEditTime: 2020-07-29 17:06:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankProPcWeb\src\components\headeritem\index.vue
--> 

<!--
 * @Author: your name
 * @Date: 2020-07-27 09:22:05
 * @LastEditTime: 2020-07-27 10:49:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankProPcWeb\src\components\selectitem\index.vue
--> 


<template>
  <div class="header-item">
    <img class="header-item-img" :src="lineImg" alt="lineImg" />
    <span class="header-item-text">{{text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      lineImg: require('@/assets/image/line.png'),
    }
  },

  methods: {},
}
</script>


<style lang="css" scoped>
.header-item {
  margin-bottom: 20px;
  text-align: left;
}
.header-item-img {
  width: 4px;
  height: 18px;
  vertical-align: text-bottom;
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -moz-transform: rotate(180deg); /* Firefox */
  -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
  -o-transform: rotate(180deg); /* Opera */
}
.header-item-text {
  font-size: 16px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-left: 10px;
  line-height: 18px;
}
</style>
