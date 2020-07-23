<!--
 * @Author: your name
 * @Date: 2020-07-20 18:28:40
 * @LastEditTime: 2020-07-23 14:24:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JNRCB-PC\src\views\member\components\item.vue
--> 

<template>
  <div class="item clear">
    <div class="item-left">{{itemTitle}}</div>
    <div class="item-right">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemTitle: {
      type: String,
      default: 'title',
    },
  },
  data() {
    return {}
  },
  created() {},
  methods: {},
}
</script>
<style lang="css" scoped>
.item {
  width: 450px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  margin: 10px 0px;
  padding: 0px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background: #fcfcfc;
}
.clear::after {
  content: '';
  display: block;
  clear: both;
  zoom: 1;
}
.item-left {
  float: left;
}
.item-right {
  float: right;
}
</style>
