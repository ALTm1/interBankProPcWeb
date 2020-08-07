<template>
  <div class="forget-pass-pre">
    <div class="forget-pass-wrap">
      <!-- 标题 -->
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">忘记密码</ui-breadcrumb-item>
        <ui-breadcrumb-item>{{this.$route.meta.title}}</ui-breadcrumb-item>
      </ui-breadcrumb>
      <!-- 步骤条 -->
      <div class="forget-pass-step">
        <div class="steps">
          <div class="line linebg"></div>
          <div class="line lineColor" :style="lineWidth"></div>
          <div class="img img1">
            <img :src="srcActive" alt />
            <p
              style="width:96px;left:-30px;"
              :class="{'step-title':this.$route.name==='forgetPassConf'||this.$route.name==='forgetPre'|| this.$route.name==='forgetPassRes'}"
            >个人信息验证</p>
          </div>
          <div class="img img2">
            <img
              :src="(this.$route.name==='forgetPassConf'|| this.$route.name==='forgetPassRes')?srcActive:src"
              alt
            />
            <p
              style="width:80px;left:-25px;"
              :class="['unactive',{'step-title':this.$route.name==='forgetPassConf'|| this.$route.name==='forgetPassRes' }]"
            >设置新密码</p>
          </div>
          <div class="img img3">
            <img :src="this.$route.name==='forgetPassRes'?srcActive:src" alt />
            <p
              style="width:64px;left:-15px;"
              :class="['unactive',{'step-title':this.$route.name==='forgetPassRes'}]"
            >重置结果</p>
          </div>
        </div>
      </div>
      <!--表单-->
      <router-view></router-view>
      <ui-row class="bottom-img">
        <img src="~@/assets/image/registerbottom.png" alt />
      </ui-row>
      <!-- 底部 -->
      <div class="form-bottom">
        <div class="tip-title">
          <img src="@/assets/image/tip.png" alt />
          <div class="tip">重要提示</div>
        </div>
        <div class="important-tip">这是提示内容</div>
      </div>
    </div>
  </div>
</template>
<script>
import { IdCard, Phone, Email, LoginName } from '@/libs/validator'
import CodeTimer from '@/components/codetimer'
export default {
  name: 'forgetPassPre',
  components: {
    CodeTimer,
  },
  computed: {
    lineWidth: function () {
      if (this.$route.name === 'forgetPre') {
        return 'width:25%'
      } else if (this.$route.name === 'forgetPassConf') {
        return 'width:75%'
      } else {
        return 'width:99%'
      }
    },
  },
  data() {
    return {
      src: require('@/assets/image/progress.png'),
      srcActive: require('@/assets/image/progressActive.png'),
    }
  },
  methods: {
    //  获取验证码
    getCode() {
      this.isBegin = true
    },

    submitForm(formName) {
      // 只对个别输入框进行校验
      /* this.$refs[formName].validateField(
        ["payeeAccountAcNo","trsAmount"],
        (valid) => {
          // valid为""时校验通过
          if (!valid) {
            this.onSubmit();
          } else {
            return false;
          }
        }
      ); */
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/registerConf')
          //   this.onSubmit()
        } else {
          return false
        }
      })
    },
    // 组装数据
    onSubmit() {},

    // 提交表单
    submitPre(pargs) {
      // 向后台校验数据
      //   this.$axios
      //     .post('eweb-transfer.BankInnerTransferConfirm.do', pargs)
      //     .then(data => {
      //       this.confirmData = pargs
      //       // 防重复提交码
      //       this.confirmData._token = data._token
      //       this.confirmData.RiskFlag = data.RiskFlag
      //       this.confirmData.SignBase64Data = data.SignBase64Data
      //       this.goto({
      //         name: 'demo-business-bankInnerConf',
      //         params: { info: this.confirmData }
      //       })
      //     })
    },
  },
}
</script>
<style lang="scss">
.forget-pass-pre {
  background: rgb(247, 246, 251);
  .forget-pass-wrap {
    width: 68.5%;
    margin: 10px auto;

    .ui-breadcrumb {
      background: #fff;
      padding: 12.3px 30px;

      .ui-breadcrumb__inner {
        font-size: 14px;
        font-family: SimHei;
        font-weight: 400;
        color: rgba(89, 103, 107, 1);
      }
    }

    .forget-pass-step {
      width: 100%;
      position: relative;
      margin: 21px auto 36px;
      z-index: 2;
      .steps {
        width: 80%;
        margin: 0 auto;
        position: relative;

        .line {
          position: absolute;
          top: 6px;
          left: 1px;
          height: 3px;
          z-index: 0;
        }
        .linebg {
          width: 99%;
          background-color: #c2c2c4;
        }
        .lineColor {
          background-color: #be9d62;
        }
        .img {
          display: inline-block;
          width: 15px;
          height: 15px;
          position: relative;
          img {
            width: 15px;
            height: 15px;
          }
          p {
            margin: 0;
            position: absolute;
          }
        }
        .img1 {
          float: left;
        }
        .img2 {
          margin-left: 47.85%;
        }
        .img3 {
          float: right;
        }
        .step-title {
          color: rgba(38, 38, 38, 1) !important;
        }
        .unactive {
          font-size: 12px;
          font-family: SimHei;
          font-weight: bold;
          color: rgba(155, 155, 155, 1);
        }
      }
    }
    // 表单
    .form-top,
    .top {
      width: 81%;
      margin: 0 auto 20px;
      .form-content {
        width: 70%;
        margin: 0 auto;
      }
      .ui-form-item__content {
        text-align: left;
        width: 55.5%;
        text-align: left;
        float: left;
        margin-left: 0 !important;
      }
      .ui-form-item__label {
        font-size: 14px;
        font-family: SimHei;
        font-weight: 400;
        color: rgba(114, 114, 114, 1);
        margin-left: 70px;
        padding: 0;
        text-align: left !important;
      }
      .ui-input__inner {
        font-size: 14px;
        font-family: SimHei;
        font-weight: 400;
        color: rgba(194, 194, 194, 1);
        border: 1px solid #e5e5e5;
      }
      .ui-input-group__append,
      .ui-input-group__prepend {
        background-color: #fff !important;
      }
    }
    .bottom-img {
      background: #fff;
      height: 116px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .form-bottom {
      width: 100%;
      padding: 16px 30px;
      margin-top: 20px;
      background: #fff;
      box-sizing: border-box;
      .tip-title {
        overflow: hidden;
        .tip,
        img {
          float: left;
        }
        .tip {
          line-height: 32px;
          font-size: 16px;
          font-family: SimHei;
          font-weight: 400;
          color: rgba(39, 39, 39, 1);
        }
        img {
          display: block;
          margin-right: 10px;
        }
      }
      .important-tip {
        margin-top: 10px;
        font-size: 14px;
        font-family: SimHei;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
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
  .text-center {
    text-align: center;
  }
  .padtop20 {
    padding-top: 20px;
  }
}
</style>
