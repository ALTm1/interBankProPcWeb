<template>
  <div class="certification-res">
    <!-- 结果 -->
    <div class="result">
      <div class="result-img">
        <img src="@/assets/image/success.png" alt />
        <span>上传成功</span>
      </div>
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
    },
  },
}
</script>
<style lang="scss" scoped>
.certification-res {
  .result {
    width: 20%;
    margin: 60px auto 0;
    .result-img {
      img {
        vertical-align: middle;
        margin-right: 10%;
      }
      span {
        font-size: 24px;
        font-family: SimHei;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
    }
  }

  .status-tip {
    margin: 40px 0;
    text-align: center;
  }

  .ui-button.is-round {
    border-radius: 20px;
    background-color: #ce2848;
    border-color: #ce2848;
    padding: 12px 180px;
  }
}
</style>
