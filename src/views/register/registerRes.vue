<template>
  <div class="reg-res">
    <!-- 结果 -->
    <div class="result">
      <img src="@/assets/image/success.png" alt />
      <div class="status">注册成功，请登录</div>
    </div>
    <div style="text-align:center;margin-bottom:75px">
      <ui-button type="primary" round @click="submitForm('form')">去登录</ui-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'regRes',
  created() {},
  // 组件激活
  activated() {
    // 是否重新加载数据
    if (this.$route.meta.reloadData) {
      this.$nextTick(() => {
        this.$refs.form.resetFields()
      })
    }
  },
  methods: {
    submitForm(form) {
      this.$router.push('/userLogin')
    },
  },
}
</script>
<style lang="scss" scoped>
.reg-res {
  background: #fff;
  padding: 40px 0;
  .result {
    text-align: center;
    margin: 118px 0 50px;

    img,
    .status {
      display: inline-block;
    }
    img {
      margin-right: 25px;
      vertical-align: middle;
    }
    .status {
      font-size: 24px;
      font-family: SimHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
  }
}
</style>
