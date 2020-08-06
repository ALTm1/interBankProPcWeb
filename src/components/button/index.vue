<!--
 * @Author: your name
 * @Date: 2020-07-29 18:55:59
 * @LastEditTime: 2020-07-30 13:56:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankProPcWeb\src\components\button\index.vue
--> 

<!--
 * @Author: your name
 * @Date: 2020-07-28 10:07:41
 * @LastEditTime: 2020-07-28 16:18:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankManage\src\components\button\index.vue
--> 


<template>
  <div class="button-item" :style="{'background':backgroundColor,'marginLeft':marginLeft,'marginRight':marginRight}">
    <span class="button-text">{{text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: '#CE2848',
    },
    marginLeft: {
      type: String,
      default: '0px',
    },
    marginRight: {
      type: String,
      default: '0px',
    },
    text: {
      type: String,
      default: '重置',
    },
  },
  data() {
    return {}
  },

  methods: {},
}
</script>


<style lang="css" scoped>
.button-item {
  display: inline-block;
  width: 160px;
  height: 36px;
  line-height: 36px;
  background: rgba(206, 40, 72, 1);
  border-radius: 18px;
  text-align: center;
}
.button-text {
  font-size: 16px;
  font-family: SimHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
</style>
