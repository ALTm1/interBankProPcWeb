<template>
  <!-- <ui-container-full class="register-pre"> -->
  <div class="pre">
    <!--表单-->
    <!-- :rules="rules" -->
    <ui-form ref="form" label-width="100px" :model="form">
      <ui-row class="bordB">
        <div class="form-top">
          <div class="form-content">
            <ui-form-item label="姓名：" prop="name">
              <ui-input v-model="form.name" maxlength="13" placeholder="请输入注册人姓名"></ui-input>
            </ui-form-item>
            <ui-form-item label="登录名：" prop="loginName">
              <ui-input-business
                v-model="form.loginName"
                minlength="4"
                maxlength="20"
                placeholder="请输入登录名"
              ></ui-input-business>
            </ui-form-item>
            <ui-form-item label="机构简称：" prop="organName">
              <ui-input-business v-model="form.organName" placeholder="请输入机构简称"></ui-input-business>
            </ui-form-item>
            <ui-form-item label="身份证号码：" prop="idCard">
              <ui-input-business v-model="form.idCard" placeholder="请输入身份证号码"></ui-input-business>
            </ui-form-item>
            <ui-form-item label="邮箱：" prop="email">
              <ui-input-business v-model="form.email" maxlength="13" placeholder="请输入邮箱"></ui-input-business>
            </ui-form-item>
          </div>
        </div>
      </ui-row>
      <ui-row>
        <div class="form-top top">
          <div class="form-content">
            <ui-form-item label="手机号：" prop="phone">
              <ui-input-business v-model="form.phone" maxlength="13" placeholder="请输入您的注册手机号"></ui-input-business>
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
          </div>
        </div>
      </ui-row>

      <ui-row class="text-center padtop20">
        <ui-button type="primary" round @click="submitForm('form')">注册</ui-button>
      </ui-row>
    </ui-form>
  </div>

  <!-- </ui-container-full> -->
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
      form: {
        // 姓名
        name: '',
        //    登录名
        loginName: '',
        //    机构简称
        organName: '',
        //    身份证号码
        idCard: '',
        //    邮箱
        email: '',
        //    手机号
        phone: '',
        //    验证码
        code: '',
      },
      rules: {
        // name: [
        //   {
        //     required: true,
        //     message: '请输入注册人姓名',
        //     trigger: 'blur'
        //   }
        //   // { validator: this.validateAcNo, trigger: 'blur' },
        // ],
        loginName: [
          { required: true, message: '请输入登录名', trigger: 'blur' },
          { validator: LoginName, trigger: 'blur' },
        ],
        organName: [
          { required: true, message: '请输入登录名', trigger: 'blur' },
        ],
        idCard: [
          { required: true, message: '请输入证件号码', trigger: 'blur' },
          { validator: IdCard, trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: Email, trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '请输入您的注册手机号', trigger: 'blur' },
          { validator: Phone, trigger: 'blur' },
        ],
        code: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' },
        ],
      },
      //   是否开始倒计时
      isBegin: false,
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
<style lang="scss" scoped>
.pre {
  background: #fff;
  padding: 40px 0 0;
  .ui-form {
    margin: 0 auto !important;
    .form-top {
      border-bottom: 1px dashed #999;
    }
    .top {
      border-bottom: none;
    }
  }
}
</style>