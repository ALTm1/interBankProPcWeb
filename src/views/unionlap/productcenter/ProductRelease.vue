
<template>
  <div class="pro-release">
    <ui-form ref="ruleForm" :model="form" :rules="rules" label-width="100px">
      <ui-form-item label="产品类型" prop="proType">
        <ui-select v-model="form.proType" placeholder="请选择">
          <div v-for="item in form.proTypeList" :key="item.label">
            <ui-option :label="item.label" :value="item.value"></ui-option>
          </div>
        </ui-select>
      </ui-form-item>
      <ui-form-item label="产品名称" prop="proName" placeholder="请输入">
        <ui-col :span="6">
          <ui-input v-model="form.proName" style="width: 100%"></ui-input>
        </ui-col>
      </ui-form-item>
      <ui-form-item label="交易方向" prop="tradeDirec">
        <ui-select v-model="form.tradeDirec" placeholder="请选择">
          <div v-for="item in form.tradeDirecList" :key="item.value">
            <ui-option :label="item.label" :value="item.value"></ui-option>
          </div>
        </ui-select>
      </ui-form-item>
      <ui-form-item label="产品标签" prop="proTagList">
        <ui-checkbox-group v-model="form.proTagList">
          <ui-checkbox label="高风险" name="type"></ui-checkbox>
          <ui-checkbox label="低风险" name="type"></ui-checkbox>
          <ui-checkbox label="高收益" name="type"></ui-checkbox>
        </ui-checkbox-group>
      </ui-form-item>
      <ui-form-item label="金额" prop="proMoney" placeholder="请输入">
        <ui-col :span="7">
          <ui-input v-model="form.proMoney" style="width:90%"></ui-input>
          <span slot>万元</span>
        </ui-col>
      </ui-form-item>
      <ui-form-item label="利率" prop="proRate" placeholder="请输入">
        <ui-col :span="6">
          <ui-input v-model="form.proRate" style="width:90%"></ui-input>
          <span slot>%</span>
        </ui-col>
      </ui-form-item>
      <ui-form-item label="期限" prop="proExpires" placeholder="请输入">
        <ui-col :span="6">
          <ui-input v-model="form.proExpires" style="width: 90%;"></ui-input>
          <span slot>天</span>
        </ui-col>
      </ui-form-item>
      <ui-form-item label="备注" prop="proDesc" placeholder="请输入">
        <ui-col :span="6">
          <ui-input type="textarea" v-model="form.proDesc"></ui-input>
        </ui-col>
      </ui-form-item>
      <ui-form-item label="联系人列表" prop="contactPeople">
        <ui-select v-model="form.contactPeople" placeholder="请选择联系人" multiple>
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
        <ui-select v-model="form.organization" placeholder="请选择机构">
          <div v-for="item in organList" :key="item.value">
            <ui-option :label="item.label" :value="item.value"></ui-option>
          </div>
        </ui-select>
      </ui-form-item>
      <ui-form-item>
        <ui-button type="primary" @click="submitForm('ruleForm')">提交</ui-button>
      </ui-form-item>
    </ui-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        // 产品类型
        proType: '',
        proTypeList: [
          {
            label: '同业资金',
            value: '同业资金',
          },
          {
            label: '债券业务',
            value: '债券业务',
          },
          {
            label: '线上资金',
            value: '线上资金',
          },
          {
            label: '同业投资',
            value: '同业投资',
          },
          {
            label: '同业存单',
            value: '同业存单',
          },
          {
            label: '票据业务',
            value: '票据业务',
          },
          {
            label: '福费廷',
            value: '福费廷',
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
          },
          {
            label: '卖出',
            value: '卖出',
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
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],

      rules: {
        proType: [
          { required: true, message: '请输入产品类型', trigger: 'change' },
        ],
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
          { required: true, message: '请选择机构', trigger: 'change' },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$ruter.push('/unionLap/productCenter/productRelease')
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style lang="css" scoped>
.pro-release /deep/ .ui-form {
  width: 80%;
}
</style>
