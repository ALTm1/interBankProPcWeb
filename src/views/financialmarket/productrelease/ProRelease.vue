
<template>
  <div class="wrap">
    <div class="form-block">
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
          <!-- <ui-form-item label="联系人列表" prop="contactPeople">
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
          </ui-form-item>-->
        </div>
      </ui-form>
    </div>
    <div class="second-content-block">
      <div class="contact">
        <div class="contact-header">
          <span>联系人列表</span>
          <span>选择联系人</span>
        </div>
        <ui-table :data="contactList" cell-class-name="tabel-cell">
          <ui-table-column prop="order" label="序号" min-width="100px"></ui-table-column>
          <ui-table-column prop="name" label="联系人姓名" min-width="200px"></ui-table-column>
          <ui-table-column prop="phone" label="联系人电话" min-width="200px"></ui-table-column>
        </ui-table>
      </div>
      <div class="attr-type">
        <span class="attr-type-label">属性类型</span>
        <ui-radio v-model="form.attrTypeRadio" label="1">全部可见</ui-radio>
        <ui-radio v-model="form.attrTypeRadio" label="2">指定交易对手</ui-radio>
        <ui-radio v-model="form.attrTypeRadio" label="3">指定好友</ui-radio>
      </div>
      <div class="organ">
        <div class="organ-header">
          <span>机构列表</span>
          <span>选择机构</span>
        </div>
        <ui-table :data="organList" cell-class-name="tabel-cell">
          <ui-table-column prop="order" label="序号" min-width="100px"></ui-table-column>
          <ui-table-column prop="name" label="机构全称" min-width="200px"></ui-table-column>
        </ui-table>
      </div>
      <div class="buttons">
        <ButtonItem text="提交" backgroundColor="#CE2848" @click.native="submitForm('ruleForm')"></ButtonItem>
      </div>
    </div>
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
          order: '1',
          name: '江南银行',
        },
        {
          order: '2',
          name: '江南银行',
        },
        {
          order: '3',
          name: '江南银行',
        },
      ],
      contactList: [
        {
          order: '1',
          name: '张三',
          phone: '18890889999',
        },
        {
          order: '2',
          name: '李斯',
          phone: '18890889999',
        },
        {
          order: '3',
          name: '王可',
          phone: '18890889999',
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
.form-block {
  background: #fffefd;
}
.wrap /deep/ .ui-form {
  width: 500px;
  margin: 10px auto;
  padding: 50px 0px;
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

.second-content-block {
  background: #fffefd;
  margin-top: 20px;
  padding: 20px 0px;
}
.contact {
  width: 500px;
  margin: 0 auto;
}
.contact-header {
  margin-bottom: 22px;
}
.contact-header > span:first-of-type {
  font-size: 16px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-right: 10px;
}
.contact-header > span:last-of-type {
  font-size: 12px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(167, 25, 49, 1);
}
.contact /deep/ .ui-table {
  background: rgba(255, 254, 253, 1);
  box-shadow: 0px 0px 3px 0px rgba(190, 157, 98, 0.48);
  border-radius: 4px;
}
.attr-type {
  width: 500px;
  margin: 20px auto 40px;
}
.attr-type-label {
  font-size: 16px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-right: 20px;
}

.organ {
  width: 500px;
  margin: 0 auto;
}
.organ-header {
  margin-bottom: 22px;
}
.organ-header > span:first-of-type {
  font-size: 16px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-right: 10px;
}
.organ-header > span:last-of-type {
  font-size: 12px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(167, 25, 49, 1);
}
.organ /deep/ .ui-table {
  background: rgba(255, 254, 253, 1);
  box-shadow: 0px 0px 3px 0px rgba(190, 157, 98, 0.48);
  border-radius: 4px;
}

.buttons{
  margin-top: 63px;
  text-align: center;
}
</style>
