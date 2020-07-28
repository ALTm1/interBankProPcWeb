
<template>
  <div class="forget-pass-res">
    <!-- 结果 -->
    <div class="result">
      <img src="@/assets/image/success.png" alt />
      <div class="status">您的登陆密码已设置成功，请使用新密码登录</div>
    </div>
    <!-- <div style="text-align:center;margin: 80px 0">注册成功</div>
    <div style="text-align:center;">您的登陆密码已设置成功，请使用新密码登录</div>-->
    <div style="text-align:center">
      <ui-button type="primary" round @click="submitForm('form')">立即登录</ui-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'forgetPassRes',
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
    submitForm(arg) {},
  },
}
</script>
<style lang="scss" scoped>
.forget-pass-res {
  height: 533px;
  background: #fff;
  padding: 40px 0;
  .result {
    text-align: center;
    margin: 80px 0;

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

  .ui-button.is-round {
    width: 160px;
    height: 34px;
    line-height: 34px;
    padding: 0;
    font-size: 16px;
    font-family: SimHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    border-radius: 18px;
    background-color: #ce2848;
    border: 1px solid #ce2848;
  }
}
</style>
