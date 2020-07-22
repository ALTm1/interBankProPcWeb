<template>
  <div class="certification-res">
    <!-- 结果 -->
    <div class="result">
      <div class="result-img"></div>
      <p>上传成功</p>
    </div>
    <div class="status-tip">您的认证已成功提交，请耐心等待审核</div>
    <div style="text-align:center">
      <ui-button type="primary" round @click="submitForm()">完成</ui-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'certificationRes',
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
    submitForm() {
      console.log(1)
    }
  }
}
</script>
<style lang="scss" scoped>
.certification-res {
  .result {
    width: 15%;
    overflow: hidden;
    margin: 60px auto 0;
  }
  .result-img,
  .result p {
    float: left;
  }
  .result-img {
    width: 80px;
    height: 80px;
    margin-right: 10%;
    background: #f0f;
    display: inline-block;
  }
  .status-tip {
    margin: 40px 0;
    text-align: center;
  }

  .ui-button.is-round {
    padding: 12px 180px;
  }
}
</style>
