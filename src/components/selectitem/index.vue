<!--
 * @Author: your name
 * @Date: 2020-07-27 09:22:05
 * @LastEditTime: 2020-07-27 10:49:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankProPcWeb\src\components\selectitem\index.vue
--> 


<template>
  <div :class="['select-item',selActive?'select-item-active':'']" @click="selClick">
    <span class="select-text">{{selText}}</span>
  </div>
</template>

<script>
export default {
  props: {
    selText: {
      type: String,
      default: '选项',
    },
    selActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },

  methods: {
    selClick() {
      this.$emit('hit')
    },
  },
}
</script>


<style lang="css" scoped>
.select-item {
  width: 91px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(191, 191, 191, 1);
  border-radius: 11px;
  margin: 0 12px;
}
.select-item-active {
  width: 91px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(190, 157, 98, 1);
  border-radius: 11px;
  margin: 0 12px;
}
.select-item > .select-text {
  font-size: 12px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.select-item-active > .select-text {
  font-size: 12px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(190, 157, 98, 1);
}
</style>
