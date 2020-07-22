<template>
  <ui-container-full class="register-pre">
    <!-- 标题 -->
    <div style="display:flex;">
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">登录</ui-breadcrumb-item>
        <ui-breadcrumb-item>个人信息录入</ui-breadcrumb-item>
      </ui-breadcrumb>
      <div style="display: flex; margin-bottom:20px;justify-content: flex-end;">
        <ui-button type="primary" round @click="goRegister">注册</ui-button>
        <ui-button type="primary" round @click="loginout">退出</ui-button>
        <ui-button type="primary" round @click="goForgetPass">忘记密码</ui-button>
      </div>
    </div>

    <!-- 步骤条 -->
    <!-- <div class="register-step">
      <ui-steps :space="300" :active="0" finish-status="success" align-center>
        <ui-step title="个人信息录入"></ui-step>
        <ui-step title="设置登录密码"></ui-step>
        <ui-step title="注册结果"></ui-step>
      </ui-steps>
    </div>-->
    <!--表单-->
    <ui-form ref="form" :rules="rules" :model="form" label-width="150px">
      <ui-row class="bordB">
        <ui-col :span="20" :offset="2">
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
    </ui-form>
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
    CodeTimer
  },
  computed: {},
  data() {
    return {
      form: {
        //    登录名
        loginName: '',
        //    登陆密码
        pass: ''
      },
      rules: {
        loginName: [
          { required: true, message: '请输入登录名', trigger: 'blur' },
          { validator: LoginName, trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { validator: Pass, trigger: 'blur' }
        ]
      },
      // 控制退出弹窗是否显示
      centerDialogVisible: false
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
.register-pre {
  .ui-breadcrumb {
    width: 50%;
    margin: 0 auto;
  }
  .register-step {
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
    width: 50%;
    padding: 12px 20px;
    margin: 20px 0 0 20px;
  }
}
</style>
