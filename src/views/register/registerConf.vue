<template>
  <div class="reg-conf">
    <!--表单-->
    <!-- :rules="rules" -->
    <ui-form ref="form" :model="form" label-width="100px">
      <ui-row class="bordB">
        <div class="form-top">
          <div class="form-content">
            <ui-form-item label="登陆密码：" prop="loginPass">
              <ui-input-business
                v-model="form.loginPass"
                minlength="6"
                maxlength="16"
                placeholder="请输入注册人姓名"
              ></ui-input-business>
            </ui-form-item>
            <ui-form-item label="确认登陆密码：" prop="confirmLoginPass">
              <ui-input-business
                v-model="form.confirmLoginPass"
                minlength="6"
                maxlength="16"
                placeholder="请输入登录名"
              ></ui-input-business>
            </ui-form-item>
          </div>
        </div>
      </ui-row>
      <ui-row class="text-center padtop20">
        <ui-button type="primary" round @click="submitForm('form')">注册</ui-button>
      </ui-row>
    </ui-form>
  </div>
</template>
<script>
import { Pass, validateConfirmPass } from '@/libs/validator'
import CodeTimer from '@/components/codetimer'
export default {
  name: 'regConf',
  components: {
    CodeTimer,
  },
  computed: {},
  data() {
    return {
      form: {
        // 登录密码
        loginPass: '',
        //    确认登录密码
        confirmLoginPass: '',
      },
      rules: {
        loginPass: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { validator: Pass, trigger: 'blur' },
        ],
        confirmLoginPass: [
          { required: true, message: '请再输入一次', trigger: 'blur' },
          { validator: validateConfirmPass, trigger: 'blur' },
        ],
      },
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
          this.$router.push('/registerRes')
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
.reg-conf {
  background: #fff;
  padding: 40px 0;
  height: 533px;
  .ui-form {
    margin: 159px auto 0 !important;
    .form-top,
    .top {
      width: 81%;
      margin: 0 auto 20px;
    }

    .form-content {
      width: 70%;
      margin: 0 auto;
    }
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
  .text-center {
    text-align: center;
  }
  .padtop20 {
    padding-top: 20px;
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
