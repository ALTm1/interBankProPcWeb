<template>
  <ui-container-full class="forget-pass-pre">
    <!-- 标题 -->
    <ui-breadcrumb separator-class="ui-icon-arrow-right">
      <ui-breadcrumb-item class="ui-icon-add-location">忘记密码</ui-breadcrumb-item>
      <ui-breadcrumb-item>个人信息录入</ui-breadcrumb-item>
    </ui-breadcrumb>
    <!-- 步骤条 -->
    <div class="forget-pass-step">
      <ui-steps :space="300" :active="0" finish-status="success" align-center>
        <ui-step title="个人信息验证"></ui-step>
        <ui-step title="设置新密码"></ui-step>
        <ui-step title="重置结果"></ui-step>
      </ui-steps>
    </div>
    <!-- {{$store.state.vxadmin.page.keepAlive}} -->
    <!--表单-->
    <ui-form ref="form" :rules="rules" :model="form" label-width="150px">
      <ui-row class="bordB">
        <ui-col :span="20" :offset="2">
          <ui-form-item label="姓名：" prop="name">
            <ui-input-business v-model="form.name" placeholder="请输入注册人姓名"></ui-input-business>
          </ui-form-item>
          <ui-form-item label="登录名：" prop="loginName">
            <ui-input-business v-model="form.loginName" placeholder="请输入登录名"></ui-input-business>
          </ui-form-item>
        </ui-col>
      </ui-row>
      <ui-row>
        <ui-col :span="20" :offset="2">
          <ui-form-item label="身份证号码：" prop="idCard">
            <ui-input-business v-model="form.idCard" placeholder="请输入身份证号码"></ui-input-business>
          </ui-form-item>
          <!-- <ui-form-item label="邮箱：" prop="email">
            <ui-input-business v-model="form.email" maxlength="13" placeholder="请输入邮箱"></ui-input-business>
          </ui-form-item>-->
          <ui-form-item label="手机号：" prop="phone">
            <ui-input-business v-moduel="form.phone" maxlength="13" placeholder="请输入您的注册手机号"></ui-input-business>
          </ui-form-item>
          <ui-form-item label="验证码：" prop="code" id="code">
            <ui-input v-model="form.code" maxlength="4" placeholder="请输入短信验证码">
              <template slot="append">
                <code-timer
                  ref="codeTimer"
                  @click="getCode"
                  :isBegin.sync="isBegin"
                  class="code-timer"
                  text="获取验证码"
                ></code-timer>
              </template>
            </ui-input>
          </ui-form-item>
        </ui-col>
      </ui-row>
      <ui-row class="text-center padtop20">
        <ui-button type="primary" round @click="submitForm('form')">下一步</ui-button>
      </ui-row>
    </ui-form>
  </ui-container-full>
</template>
<script>
import { IdCard, Phone, Email, LoginName } from '@/libs/validator'
import CodeTimer from '@/components/codetimer'
export default {
  name: 'forgetPassPre',
  components: {
    CodeTimer
  },
  computed: {},
  data() {
    return {
      form: {
        // 姓名
        name: '',
        //    登录名
        loginName: '',
        //    机构简称
        // organName: '',
        //    身份证号码
        idCard: '',
        //    邮箱
        email: '',
        //    手机号
        phone: '',
        //    验证码
        code: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
          }
          // { validator: this.validateAcNo, trigger: 'blur' },
        ],
        loginName: [
          { required: true, message: '请输入登录名', trigger: 'blur' },
          { validator: LoginName, trigger: 'blur' }
        ],
        // organName: [
        //   { required: true, message: '请输入登录名', trigger: 'blur' }
        // ],
        idCard: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
          { validator: IdCard, trigger: 'blur' }
        ],
        // email: [
        //   { required: true, message: '请输入邮箱', trigger: 'blur' },
        //   { validator: Email, trigger: 'blur' }
        // ],
        phone: [
          { required: true, message: '请输入您的注册手机号', trigger: 'blur' },
          { validator: Phone, trigger: 'blur' }
        ],
        code: [{ required: true, message: '请输入短信验证码', trigger: 'blur' }]
      },
      //   是否开始倒计时
      isBegin: false
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
          this.$router.push('/registerConf')
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
.forget-pass-pre {
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
