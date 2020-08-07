<template>
  <div class="forget-pass-conf">
    <!--表单-->
    <!-- :rules="rules" -->
    <ui-form ref="form" :model="form" label-width="120px">
      <ui-row class="bordB">
        <div class="form-top">
          <div class="form-content">
            <ui-form-item label="登陆密码：" prop="loginPass">
              <ui-input-business v-model="form.loginPass" maxlength="13" placeholder="请输入登陆密码"></ui-input-business>
            </ui-form-item>
            <ui-form-item label="确认登陆密码：" prop="confirmLoginPass">
              <ui-input-business v-model="form.confirmLoginPass" placeholder="请再次输入"></ui-input-business>
            </ui-form-item>
          </div>
        </div>
      </ui-row>
      <ui-row class="text-center padtop20">
        <ui-button type="primary" round @click="submitForm('form')">确定</ui-button>
      </ui-row>
    </ui-form>
  </div>
</template>
<script>
import { Pass, validateConfirmPass } from '@/libs/validator'
import CodeTimer from '@/components/codetimer'
export default {
  name: 'forgetPassConf',
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
          this.$router.push('/forgetPassRes')
          //   this.onSubmit()
        } else {
          return false
        }
      })
    },
    // 组装数据
    onSubmit() {
      // 获取上送数据，对数据按照要求的格式上送
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
    },
  },
}
</script>
<style lang="scss" scoped>
.forget-pass-conf {
  background: #fff;
  padding: 40px 0;
  .ui-form {
    margin: 159px auto 0 !important;
  }
}
</style>
