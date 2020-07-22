<template>
  <ui-container-full class="forget-pass-conf">
    <!-- 标题 -->
    <ui-breadcrumb separator-class="ui-icon-arrow-right">
      <ui-breadcrumb-item class="ui-icon-add-location">忘记密码</ui-breadcrumb-item>
      <ui-breadcrumb-item>设置新密码</ui-breadcrumb-item>
    </ui-breadcrumb>
    <!-- 步骤条 -->
    <div class="forget-pass-step">
      <ui-steps :space="300" :active="1" finish-status="success" align-center>
        <ui-step title="个人信息录入"></ui-step>
        <ui-step title="设置新密码"></ui-step>
        <ui-step title="注册结果"></ui-step>
      </ui-steps>
    </div>
    <!-- {{$store.state.vxadmin.page.keepAlive}} -->
    <!--表单-->
    <ui-form ref="form" :rules="rules" :model="form" label-width="150px">
      <ui-row class="bordB">
        <ui-col :span="20" :offset="2">
          <ui-form-item label="登陆密码：" prop="loginPass">
            <ui-input-business v-model="form.loginPass" maxlength="13" placeholder="请输入注册人姓名"></ui-input-business>
          </ui-form-item>
          <ui-form-item label="确认登陆密码：" prop="confirmLoginPass">
            <ui-input-business v-model="form.confirmLoginPass" placeholder="请输入登录名"></ui-input-business>
          </ui-form-item>
        </ui-col>
      </ui-row>
      <ui-row class="text-center padtop20">
        <ui-button type="primary" round @click="submitForm('form')">注册</ui-button>
      </ui-row>
    </ui-form>
  </ui-container-full>
</template>
<script>
import { Pass, validateConfirmPass } from '@/libs/validator'
import CodeTimer from '@/components/codetimer'
export default {
  name: 'forgetPassConf',
  components: {
    CodeTimer
  },
  computed: {},
  data() {
    return {
      form: {
        // 登录密码
        loginPass: '',
        //    确认登录密码
        confirmLoginPass: ''
      },
      rules: {
        loginPass: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { validator: Pass, trigger: 'blur' }
        ],
        confirmLoginPass: [
          { required: true, message: '请再输入一次', trigger: 'blur' },
          { validator: validateConfirmPass, trigger: 'blur' }
        ]
      }
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
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push('/registerRes')
          //   this.onSubmit()
        } else {
          return false
        }
      })
    },
    // 组装数据
    onSubmit() {
      // 获取上送数据，对数据按照要求的格式上送
      var pargs = Object.assign({}, this.form, {
        // 付款账号
        payerAccountNo: this.payerAc.AcNo,
        // 付款人姓名
        payerAccountAcName: this.payerAc.AcName,
        // 付款账号类型
        payerAccountBankAcType: this.payerAc.BankAcType,
        payeeCurrencyCode: 'CNY',
        payeeCurrencyCRFlag: 'R',
        abstractCode: '0360',
        trsCurrencyCode: 'CNY',
        trsCurrencyCRFlag: 'R'
      })
      // 组装结束
      // 校验并提交表单
      this.transferPre(pargs)
    },

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
    }
  }
}
</script>
<style lang="scss" scoped>
.forget-pass-conf {
  .ui-breadcrumb {
    width: 50%;
    margin: 0 auto;
  }
  .forget-pass-step {
    width: 60%;
    margin: 40px auto;
  }
  .ui-steps {
    margin-left: 9%;
  }
  .ui-form {
    width: 40% !important;
    margin: 0 auto !important;
  }
  .ui-form-item__content {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .padtop20 {
    padding-top: 20px;
  }
  .ui-button.is-round {
    padding: 12px 180px;
    margin-left: 140px;
  }
}
</style>
