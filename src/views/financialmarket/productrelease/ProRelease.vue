
<template>
  <div class="wrap">
    <ui-form ref="ruleForm" :model="form" :rules="rules" label-width="100px">
      <div class="pro-release">
        <ui-form-item label="业务类型">
          <div class="clear">
            <div class="float-left" v-for="item in form.serviceTypeList" :key="item.label">
              <SelectItem
                :selText="item.value"
                :selActive="item.active"
                @hit="item.active=!item.active"
              ></SelectItem>
            </div>
          </div>
        </ui-form-item>
        <ui-form-item label="产品名称" prop="proName">
          <ui-input v-model="form.proName" style="width: 100%" placeholder="请输入"></ui-input>
        </ui-form-item>
        <ui-form-item label="交易方向">
          <div class="clear">
            <div class="float-left" v-for="item in form.tradeDirecList" :key="item.label">
              <SelectItem
                :selText="item.value"
                :selActive="item.active"
                @hit="item.active=!item.active"
              ></SelectItem>
            </div>
          </div>
        </ui-form-item>
        <ui-form-item label="产品标签" prop="proTagList">
          <ui-checkbox-group v-model="form.proTagList">
            <ui-checkbox label="高风险" name="type"></ui-checkbox>
            <ui-checkbox label="低风险" name="type"></ui-checkbox>
            <ui-checkbox label="高收益" name="type"></ui-checkbox>
          </ui-checkbox-group>
        </ui-form-item>
        <ui-form-item label="金额" prop="proMoney">
          <ui-input v-model="form.proMoney" placeholder="请输入"></ui-input>
          <span slot>万元</span>
        </ui-form-item>
        <ui-form-item label="利率" prop="proRate">
          <ui-input v-model="form.proRate" placeholder="请输入"></ui-input>
          <span slot>%</span>
        </ui-form-item>
        <ui-form-item label="期限" prop="proExpires">
          <ui-input v-model="form.proExpires" placeholder="请输入"></ui-input>
          <span slot>天</span>
        </ui-form-item>
        <ui-form-item label="备注" prop="proDesc">
          <ui-input type="textarea" v-model="form.proDesc" placeholder="请输入"></ui-input>
        </ui-form-item>
        <ui-form-item label="联系人列表" prop="contactPeople">
          <ui-select v-model="form.contactPeople" multiple placeholder="请选择联系人">
            <div v-for="item in form.contactPeopleList" :key="item.label">
              <ui-option :label="item.label" :value="item.value"></ui-option>
            </div>
          </ui-select>
        </ui-form-item>
        <ui-form-item label="属性类型" prop="attrTypeRadio">
          <ui-radio v-model="form.attrTypeRadio" label="1">全部可见</ui-radio>
          <ui-radio v-model="form.attrTypeRadio" label="2">指定交易对手</ui-radio>
          <ui-radio v-model="form.attrTypeRadio" label="3">指定好友</ui-radio>
        </ui-form-item>
        <ui-form-item label="机构列表" prop="organization">
          <ui-select v-model="form.organization" multiple placeholder="请选择机构">
            <div v-for="item in organList" :key="item.value">
              <ui-option :label="item.label" :value="item.value"></ui-option>
            </div>
          </ui-select>
        </ui-form-item>
        <ui-form-item>
          <div>
            <ButtonItem text="提交" backgroundColor="#CE2848" @click.native="submitForm('ruleForm')"></ButtonItem>
          </div>
        </ui-form-item>
      </div>
    </ui-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        // 业务类型
        serviceTypeList: [
          {
            label: '同业存放',
            value: '同业存放',
            active: false,
          },
          {
            label: '协议存款',
            value: '协议存款',
            active: false,
          },
          {
            label: '同业借款',
            value: '同业借款',
            active: false,
          },
        ],
        // 产品名称
        proName: '',
        // 交易方向
        tradeDirec: '',
        tradeDirecList: [
          {
            label: '买入',
            value: '买入',
            active: false,
          },
          {
            label: '卖出',
            value: '卖出',
            active: false,
          },
        ],
        // 产品标签
        proTagList: [],
        // 金额
        proMoney: '',
        // 利率
        proRate: '',
        // 期限
        proExpires: '',
        // 备注
        proDesc: '',
        // 联系人列表
        contactPeople: [],
        contactPeopleList: [
          {
            value: '张三',
            label: '张三',
          },
          {
            value: '李四',
            label: '李四',
          },
          {
            value: '王五',
            label: '王五',
          },
        ],
        // 属性类型
        attrTypeRadio: '',
        // 机构
        organization: '',
      },
      organList: [
        {
          value: '南京银行',
          label: '南京银行',
        },
        {
          value: '江苏银行',
          label: '江苏银行',
        },
        {
          value: '招商银行',
          label: '招商银行',
        },
      ],

      rules: {
        proName: [
          { required: true, message: '请输入产品名称', trigger: 'blur' },
        ],
        tradeDirec: [
          { required: true, message: '请输入交易方向', trigger: 'change' },
        ],
        proTagList: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个产品标签',
            trigger: 'change',
          },
        ],
        proMoney: [{ required: true, message: '请输入金额', trigger: 'blur' }],
        proRate: [{ required: true, message: '请输入利率', trigger: 'blur' }],
        proExpires: [
          { required: true, message: '请输入期限', trigger: 'blur' },
        ],
        proDesc: [{ required: true, message: '请输入备注', trigger: 'blur' }],
        contactPeople: [
          {
            required: true,
            message: '请至少选择一个联系人',
            trigger: 'change',
          },
        ],
        attrTypeRadio: [
          { required: true, message: '请选择属性类型', trigger: 'blur' },
        ],
        organization: [
          { required: true, message: '请选择机构', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$ruter.push('/financialmarket/proReleaseSucc')
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style lang="css" scoped>
.wrap {
  width: 100%;
  margin: 0 auto;
}
.wrap /deep/ .ui-form {
  width: 600px;
  margin: 10px auto;
  padding: 50px 0px;
  background: #ffffff;
}
.wrap /deep/ .ui-input {
  width: auto;
}
.wrap /deep/ .ui-input__inner {
  width: 327px;
  height: 30px;
  border: 1px solid rgba(229, 229, 229, 1);
  border-radius: 4px;
}
.wrap /deep/ .ui-textarea__inner {
  width: 327px;
  height: 30px;
  border: 1px solid rgba(229, 229, 229, 1);
  border-radius: 4px;
}
.wrap /deep/ .ui-form-item__label {
  font-size: 12px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(61, 61, 61, 1);
}

</style>
