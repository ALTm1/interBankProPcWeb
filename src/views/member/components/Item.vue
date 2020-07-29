<!--
 * @Author: your name
 * @Date: 2020-07-20 18:28:40
 * @LastEditTime: 2020-07-29 18:38:41
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
  display: inline-block;
  width: 420px;
  height: 39px;
  line-height: 39px;
  padding: 0 13px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 12px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin: 10px 10px;
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
