<template>
  <ui-container-full class="bank-inner-pre">
    <!-- {{$store.state.vxadmin.page.keepAlive}} -->
    <ui-form ref="form" :rules="rules" :model="form" label-width="150px">
      <ui-row class="bordB">
        <ui-col :span="20" :offset="2">
          <ui-form-item label="付款账户：">
            <ui-select v-model="payerIndex" placeholder="请选择付款账户" @change="changepayer">
              <ui-option
                v-for="(item,index) in accList"
                :key="index"
                :label="$filter('wordcut')(item.AcNo,6,4)+'/'+item.AcName"
                :value="index"
              ></ui-option>
            </ui-select>
          </ui-form-item>
          <ui-form-item label="可用余额：">
            <span class="money">{{accountInfo.ActualBal|number(2)}}</span>
          </ui-form-item>
        </ui-col>
      </ui-row>
      <ui-row>
        <ui-col :span="20" :offset="2">
          <ui-form-item label="收款人账号：" prop="payeeAccountAcNo">
            <!-- <ui-input
              v-model="form.payeeAccountAcNo"
              type="text"
              placeholder="请输入收款人账号"
              :maxlength="22"
            ></ui-input>-->
            <ui-input-business
              v-model="form.payeeAccountAcNo"
              type="bankCard"
              placeholder="请输入收款人账号"
              :maxlength="27"
            ></ui-input-business>
          </ui-form-item>
          <ui-form-item label="转账金额：" prop="trsAmount">
            <ui-input-business
              v-model="form.trsAmount"
              type="money"
              :isFormative="false"
              :isMoneyFormat="true"
              maxlength="13"
              placeholder="请输入转账金额"
            ></ui-input-business>
          </ui-form-item>
          <ui-form-item label="大写金额：">
            <span slot="label">金额大写：</span>
            <span class="gray" v-show="!form.trsAmount">显示金额大写</span>
            <span class="red" v-show="form.trsAmount">{{form.trsAmount|amount}}</span>
          </ui-form-item>
        </ui-col>
      </ui-row>
      <ui-row class="text-center padtop20">
        <ui-button type="primary" @click="submitForm('form')">下一步</ui-button>
      </ui-row>
    </ui-form>
  </ui-container-full>
</template>
<script>
export default {
  name: 'demo-business-bankInner',
  computed: {
    payerAc() {
      // 付款账号
      if (this.accList.length > 0) {
        return this.accList[this.payerIndex]
      }
      return {}
    }
  },
  data() {
    return {
      payerIndex: '',
      accList: [],
      form: {
        payeeAccountAcNo: '1234567890123456',
        trsAmount: 1
      },
      accountInfo: {},
      rules: {
        payeeAccountAcNo: [
          {
            required: true,
            message: '请输入科蓝银行账号',
            trigger: 'blur'
          },
          // { validator: this.validateAcNo, trigger: 'blur' },
          {
            pattern: /^\d{16,22}$/,
            message: '科蓝银行账号不符合要求格式',
            trigger: 'blur'
          }
        ],
        trsAmount: [
          { required: true, message: '请输入转账金额', trigger: 'change' }
        ]
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    if (from.fullPath !== '/demo/business/bankInnerConf') {
      to.meta.reloadData = true
    } else {
      to.meta.reloadData = false
    }
    next()
  },
  created() {
    // 初始化数据
    this.init()
  },
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
    // 数据初始化
    init() {
      // 请求付款账号集合
      this.$axios
        .post('eweb-query.QryAcctList.do', {})
        .then(data => {
          this.accList = data.AcList
          // 没有参数时，默认选中第一个
          this.payerIndex = 0
          // 获得该账户的转账限额
          this.changepayer(this.payerIndex)
        })
        .catch(function(err) {
          console.log(err.message)
        })
    },
    // 校验收款账号
    validateAcNo(rule, value, callback) {
      if (!value) {
        return callback(new Error('自定义请输入科蓝银行账号'))
      }
      setTimeout(() => {
        if (!/^\d{16,22}$/.test(value)) {
          return callback(new Error('自定义收款账号不符合要求格式'))
        }
        callback()
      }, 0)
    },
    // 切换付款账户,查询对应的余额
    changepayer(index) {
      // 选中的账户的账号
      const payerAcNo = this.accList[index].AcNo
      console.log(payerAcNo);
      
      // 获得选择的付款账户对象
      this.$axios
        .post('eweb-query.QryAcctInfo.do', {
          BaseAcctNo: payerAcNo
        })
        .then(data => {
          this.accountInfo = data.Map
        })
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
          this.onSubmit()
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
    // 校验业务逻辑
    transferPre(pargs) {
      if (!pargs.payerAccountNo) {
        this.$message.error('不存在可用账户或账户信息!')
        return false
      }
      if (pargs.payerAccountNo === pargs.payeeAccountAcNo) {
        this.$message.error('付款账号和收款账号一致!')
        return false
      }
      if (pargs.trsAmount === 0) {
        this.$message.error('转账金额不能为0!')
        return false
      }
      // 校验限额 start
      if (pargs.trsAmount > parseFloat(this.accountInfo.ActualBal, 10)) {
        this.$message.error('转账金额不能大于可用余额!')
        return false
      }
      // 校验限额 end

      // 提交表单
      this.submitPre(pargs)
    },
    // 提交表单
    submitPre(pargs) {
      // 向后台校验数据
      this.$axios
        .post('eweb-transfer.BankInnerTransferConfirm.do', pargs)
        .then(data => {
          this.confirmData = pargs
          // 防重复提交码
          this.confirmData._token = data._token
          this.confirmData.RiskFlag = data.RiskFlag
          this.confirmData.SignBase64Data = data.SignBase64Data
          this.goto({
            name: 'demo-business-bankInnerConf',
            params: { info: this.confirmData }
          })
        })
    }
  }
}
</script>
<style lang="scss">
.bank-inner-pre {
  .ui-select {
    width: 100%;
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
}
</style>
