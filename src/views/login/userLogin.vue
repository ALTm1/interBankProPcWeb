<template>
  <ui-container-full class="user-login">
    <div class="login-wrapper">
      <ui-row>
        <ui-col :span="17">
          <div class="logobg">
            <!-- <img class="loginbg" src="@/assets/image/loginbg.png" alt /> -->
            <img src="@/assets/image/logincont.png" alt class="loginbg-center" />
          </div>
        </ui-col>
        <ui-col :span="7">
          <div class="logo">
            <img src="@/assets/image/logo.png" alt />
            <h2>E同赢银银平台</h2>
            <div class="describe">以“打造中国农村商业银行一流品牌”为战略愿景，啦啦啦啦啦啦啦</div>
          </div>
          <!--表单-->
          <div class="form">
            <ui-form ref="form" :rules="rules" :model="form">
              <ui-row class="bordB">
                <ui-col :span="24">
                  <ui-form-item label="登录名：" prop="loginName">
                    <ui-input-business
                      v-model="form.loginName"
                      minlength="4"
                      maxlength="20"
                      placeholder="请输入登录名"
                    ></ui-input-business>
                  </ui-form-item>
                  <ui-form-item label="登录密码：" prop="pass">
                    <ui-input-business v-model="form.pass" placeholder="请输入登录密码"></ui-input-business>
                  </ui-form-item>
                </ui-col>
              </ui-row>
              <ui-row class="text-center padtop20">
                <!-- <ui-button type="primary" round @click="submitForm('form')">注册</ui-button> -->
                <ui-button type="primary" round @click="submitForm('form')">登录</ui-button>
                <!-- <ui-button type="primary" round @click="submitForm('form')">忘记密码</ui-button> -->
              </ui-row>
              <ui-row class="forget">
                <ui-col style="text-align:center; margin-top: 10px;">
                  <a
                    href="javascript:;"
                    style=" text-decoration: underline;"
                    @click="goForgetPass"
                  >忘记密码？</a>
                </ui-col>
              </ui-row>
            </ui-form>
          </div>
        </ui-col>
      </ui-row>
    </div>
    <!-- <div style="display:flex;">
      <div style="display: flex; margin-bottom:20px;justify-content: flex-end;">
        <ui-button type="primary" round @click="goRegister">注册</ui-button>
        <ui-button type="primary" round @click="loginout">退出</ui-button>
        <ui-button type="primary" round @click="goForgetPass">忘记密码</ui-button>
      </div>
    </div>-->

    <!-- 退出弹窗 -->
    <ui-dialog title="退出提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>确定退出吗？</span>
      <span slot="footer" class="dialog-footer">
        <ui-button @click="centerDialogVisible = false">取 消</ui-button>
        <ui-button type="primary" @click="centerDialogVisible = false">确 定</ui-button>
      </span>
    </ui-dialog>
  </ui-container-full>
</template>
<script>
import { Pass, LoginName } from '@/libs/validator'
import CodeTimer from '@/components/codetimer'
export default {
  name: 'registerPre',
  components: {
    CodeTimer,
  },
  data() {
    return {
      form: {
        //    登录名
        loginName: '',
        //    登陆密码
        pass: '',
      },
      rules: {
        loginName: [
          { required: true, message: '请输入登录名', trigger: 'blur' },
          { validator: LoginName, trigger: 'blur' },
        ],
        pass: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { validator: Pass, trigger: 'blur' },
        ],
      },
      // 控制退出弹窗是否显示
      centerDialogVisible: false,
    }
  },
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
  // 组件
  deactivated() {},
  methods: {
    //  获取验证码
    getCode() {
      this.isBegin = true
    },
    // 去注册
    goRegister() {
      this.$router.push('/registerPre')
    },
    // 去忘记密码
    goForgetPass() {
      this.$router.push('/forgetPassPre')
    },
    // 退出
    loginout() {
      this.centerDialogVisible = true
    },
    // 登录
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
<style lang="scss" >
.user-login {
  margin: 0;
  box-sizing: border-box;
  // height: 100vh;
  .ui-container-full {
    border: none;
  }
  .ui-container-full .ui-container-full__body {
    padding: 0;
  }
  .ui-col-17 {
    width: 69.463%;
  }
  .ui-col-7 {
    width: 30.537%;
  }
  .login-wrapper {
    // height: 100vh;
    position: relative;
    background: #fff;

    .logobg {
      position: relative;
      height: 100vh;
      background: url('~@/assets/image/loginbg.png');
      background-size: 100% 100%;
      .loginbg {
        width: 100%;
        // height: 100vh;
      }
      .loginbg-center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // margin-left: -520px;
        // margin-top: -200px;
      }
    }
    .logo {
      padding: 20px 0;
      img {
        display: block;
        width: 90px;
        height: 90px;
        margin: 0 auto;
      }
      h2 {
        text-align: center;
        font-size: 34px;
        font-family: zcool-gdh;
        font-weight: bold;
        color: rgba(50, 50, 50, 1);
      }
      .describe {
        padding: 0 20px;
        font-size: 14px;
        font-family: SimHei;
        font-weight: 400;
        color: rgba(111, 111, 111, 1);
      }
    }

    .form {
      box-sizing: border-box;
      padding: 0 30px;
      .ui-form {
        .ui-form-item__content {
          text-align: left;

          .ui-input__inner {
            border-radius: 20px;
            border: 1px solid #be9d62;
          }
        }
      }
      .ui-button.is-round {
        width: 100%;
        height: 40px;
        padding: 0;
        border: none;
        margin: 0 auto;
        background: rgba(206, 40, 72, 1);
        border-radius: 31px;
      }
      .forget a {
        color: rgba(206, 40, 72, 1);
      }
    }
    .text-center {
      text-align: center;
    }
    .padtop20 {
      padding-top: 20px;
    }
  }
}
</style>
