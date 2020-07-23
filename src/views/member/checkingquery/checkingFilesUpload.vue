

<template>
  <div class="checking-files">
    <!-- 标题导航 -->
    <div>
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">会员中心</ui-breadcrumb-item>
        <ui-breadcrumb-item>授信管理</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>

    <!--授信申请 -->
    <div class="pro-info item">
      <div class="item-title">
        <p></p>
        <p>授信申请</p>
        <div class="arrow-right"></div>
      </div>
      <div class="files-upload">
        <div class="upload-content">
          <div>授信文件上传</div>
          <div>
            <span>授信材料.rar</span>
          </div>
        </div>
        <p class="upload">
          <a href="javascript:;">上传</a>
          <a href="javascript:;">重新上传</a>
        </p>
      </div>
    </div>

    <!-- 按钮 -->
    <div class="btn">
      <ui-button type="primary" @click="submitForm('form')">提交</ui-button>
    </div>
  </div>
</template>


<script>
import Item from '@/views/member/components/Item.vue'
export default {
  name: 'checkingFilesUpload',
  components: {
    Item
  },
  data() {
    return {
      proInfo: [
        {
          itemTitle: '授信测算额度',
          itemValue: '50'
        },
        {
          itemTitle: '授信期限',
          itemValue: '36'
        },
        {
          itemTitle: '金融市场部业务额度（亿元）',
          itemValue: '5'
        },
        {
          itemTitle: '零售业务部业务额度（亿元）',
          itemValue: '5'
        }
      ]
    }
  },
  methods: {
    submitForm(form) {
      this.$router.push('/member/checkingQueryRes')
    }
  }
}
</script>

<style lang="scss" scoped>
.checking-files {
  .item-title {
    overflow: hidden;
  }
  .item-title p {
    float: left;
    line-height: 30px;
  }
  .item-title p:nth-child(1) {
    width: 10px;
    height: 30px;
    background: #f0f;
    margin-right: 20px;
  }
  .arrow-right {
    width: 20px;
    height: 20px;
    float: right;
    margin-top: 20px;
    background: #f0f;
  }
  .files-upload {
    overflow: hidden;
  }
  .upload-content div {
    padding: 10px 0;
    overflow: hidden;
    border: 1px solid #eee;
  }
  .upload-content div {
    float: left;
    text-align: center;
  }
  .upload-content div:nth-child(1) {
    width: 20%;
    border-right: 1px solid #eee;
  }
  .upload-content div:nth-child(2) {
    width: 60%;
  }
  .upload {
    overflow: hidden;
  }
  .upload a {
    color: #409eff;
    text-decoration: underline;
  }
  .upload a:nth-child(1) {
    margin: 0 20px;
  }
  .btn {
    margin-top: 40px;
    width: 100%;
    text-align: center;
  }
  .btn .ui-button {
    width: 30%;
    padding: 12px 20px !important;
  }
}
</style>