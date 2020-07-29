<template>
  <div class="register">
    <div class="register-pre">
      <div class="header"></div>
      <div class="register-wrap">
        <!-- 标题 -->
        <ui-breadcrumb separator-class="ui-icon-arrow-right">
          <ui-breadcrumb-item class="ui-icon-add-location">注册</ui-breadcrumb-item>
          <ui-breadcrumb-item>{{this.$route.meta.title}}</ui-breadcrumb-item>
        </ui-breadcrumb>
        <!-- 步骤条 -->
        <div class="register-step">
          <div class="steps">
            <div class="line linebg"></div>
            <div class="line lineColor" :style="lineWidth"></div>
            <div class="img img1">
              <img :src="srcActive" alt />
              <p
                style="width:96px;left:-40px;"
                :class="{'step-title':this.$route.name==='registerConf'||this.$route.name==='regPre'|| this.$route.name==='registerRes'}"
              >个人信息录入</p>
            </div>
            <div class="img img2">
              <img
                :src="(this.$route.name==='registerConf'|| this.$route.name==='registerRes')?srcActive:src"
                alt
              />
              <p
                style="width:100px;left:-40px;"
                :class="{'step-title':this.$route.name==='registerConf'|| this.$route.name==='registerRes' }"
              >设置登录密码</p>
            </div>
            <div class="img img3">
              <img :src="this.$route.name==='registerRes'?srcActive:src" alt />
              <p
                style="width:64px;left:-24px;"
                :class="{'step-title':this.$route.name==='registerRes'}"
              >注册结果</p>
            </div>
          </div>
        </div>
        <!--表单-->

        <router-view></router-view>

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
  </div>
</template>
<script>
import { IdCard, Phone, Email, LoginName } from '@/libs/validator'
import CodeTimer from '@/components/codetimer'
export default {
  name: 'registerPre',
  components: {
    CodeTimer,
  },
  computed: {},
  data() {
    return {
      src: require('@/assets/image/progress.png'),
      srcActive: require('@/assets/image/progressActive.png'),
    }
  },
  computed: {
    lineWidth: function () {
      if (this.$route.name === 'regPre') {
        return 'width:25%'
      } else if (this.$route.name === 'registerConf') {
        return 'width:75%'
      } else {
        return 'width:99%'
      }
    },
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
.register-pre {
  background: rgb(247, 246, 251);
  .header {
    height: 41.7px;
  }
  .register-wrap {
    width: 68.5%;
    margin: 20px auto;

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
    .register-step {
      width: 100%;
      position: relative;
      margin: 40px auto;
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
          color: rgba(38, 38, 38, 1);
        }
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
  }

  .text-center {
    text-align: center;
  }
  .padtop20 {
    padding-top: 20px;
  }
}
</style>
