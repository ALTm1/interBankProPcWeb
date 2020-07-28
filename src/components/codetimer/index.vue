<template>
  <div class="text" @click="codeClick">{{timer?`${num}s`:text}}</div>
</template>
<script>
import { setInterval, clearInterval } from 'timers'
export default {
  props: {
    // 文本
    text: {
      type: String,
      default: '获取验证码',
    }, // 初始计时数
    number: {
      type: Number,
      default: 60,
    }, // 是否开始计时
    isBegin: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      num: 0,
      timer: null,
    }
  },
  watch: {
    isBegin(value) {
      if (value) {
        // 如果正在计时,或者  不满足计时条件
        if (!this.isBegin) {
          return
        }
        this.$emit('update:isBegin', false)
        this.num = this.number
        this.timer = setInterval(() => {
          this.num--
          if (this.num === 0) {
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    },
  },
  methods: {
    codeClick() {
      if (this.timer) {
        return
      }
      this.$emit('click')
    }, // 重置计时器
    resetTimer() {
      clearInterval(this.timer)
      this.timer = null
    },
  },
  destroyed() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  },
}
</script>
<style scoped>
.text {
  color: #ce2848;
  font-size: 14px;
  font-family: SimHei;
  font-weight: 400;
  /* font-size: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  padding: 20px 50px;
  border-radius: 12px;
  background: #5895f0; */
}
</style>
