

<template>
  <div class="pro-query">
    <ui-form ref="ruleForm" :model="form" :rules="rules" label-width="100px">
      <ui-form-item label="产品类型" prop="proType">
        <ui-select v-model="form.proType" placeholder="请选择">
          <div v-for="item in form.proTypeList" :key="item.label">
            <ui-option :label="item.label" :value="item.value"></ui-option>
          </div>
        </ui-select>
      </ui-form-item>
      <ui-form-item label="交易方向" prop="tradeDirec">
        <ui-select v-model="form.tradeDirec" placeholder="请选择">
          <div v-for="item in form.tradeDirecList" :key="item.value">
            <ui-option :label="item.label" :value="item.value"></ui-option>
          </div>
        </ui-select>
      </ui-form-item>
      <ui-form-item label="利率" required>
        <ui-col :span="6">
          <ui-form-item prop="minRate">
            <ui-input placeholder="请输入最小利率" v-model="form.minRate" clearable></ui-input>
          </ui-form-item>
        </ui-col>
        <ui-col class="line" :span="1" style="textAlign:center">--</ui-col>
        <ui-col :span="6">
          <ui-form-item prop="maxRate">
            <ui-input placeholder="请输入最大利率" v-model="form.maxRate" clearable></ui-input>
          </ui-form-item>
        </ui-col>
      </ui-form-item>
      <ui-form-item label="期限" prop="expires">
        <ui-select v-model="form.expires" placeholder="请选择">
          <div v-for="item in form.expiresList" :key="item.value">
            <ui-option :label="item.label" :value="item.value"></ui-option>
          </div>
        </ui-select>
      </ui-form-item>
      <ui-form-item>
        <ui-button type="primary" @click="submitForm('ruleForm')">查询</ui-button>
        <ui-button @click="resetForm('ruleForm')">重置</ui-button>
      </ui-form-item>
    </ui-form>
    <ui-table :data="tableData" v-if="showTable" cell-class-name="tabel-cell">
      <ui-table-column prop="proType" label="产品类型" min-width="100px"></ui-table-column>
      <ui-table-column prop="serviceType" label="业务类型" min-width="200px"></ui-table-column>
      <ui-table-column prop="proName" label="产品名称" min-width="200px"></ui-table-column>
      <ui-table-column prop="organName" label="机构全称" min-width="200px"></ui-table-column>
      <ui-table-column label="利率" min-width="100px">
        <template slot-scope="scope">
          <span class="pro-rate">{{ scope.row.proRate }}</span>
        </template>
      </ui-table-column>
      <ui-table-column prop="proMoney" label="金额" min-width="200px"></ui-table-column>
      <ui-table-column prop="proExpires" label="期限" min-width="100px"></ui-table-column>
      <ui-table-column prop="publishDate" label="发布日期" min-width="100px"></ui-table-column>
      <ui-table-column label="操作">
        <template slot-scope="scope">
          <span class="detail-button" @click="goDetail(scope.row)">查看详情</span>
        </template>
      </ui-table-column>
    </ui-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
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
        minRate: '',
        maxRate: '',
        expires: '',
        expiresList: [
          {
            label: '30天以内',
            value: '30天以内',
          },
          {
            label: '30-90天',
            value: '30-90天',
          },
          {
            label: '91-180天',
            value: '91-180天',
          },
          {
            label: '181-360天',
            value: '181-360天',
          },
          {
            label: '一年以上',
            value: '一年以上',
          },
        ],
      },

      rules: {
        proType: [
          { required: true, message: '请输入产品类型', trigger: 'change' },
        ],
        tradeDirec: [
          { required: true, message: '请输入交易方向', trigger: 'change' },
        ],
        minRate: [
          { required: true, message: '请输入最小利率', trigger: 'blur' },
        ],
        maxRate: [
          { required: true, message: '请输入最大利率', trigger: 'blur' },
        ],
        expires: [{ required: true, message: '请输入期限', trigger: 'change' }],
      },

      showTable: false,
      tableData: [
        {
          proType: '同业资金',
          serviceType: '同业存放',
          proName: '资金融入',
          organName: '江南农村商业银行',
          proRate: '4.55%',
          proMoney: '5,000W',
          proExpires: '360天',
          publishDate: '2020/09/10',
        },
        {
          proType: '同业资金',
          serviceType: '同业存放',
          proName: '资金融入',
          organName: '江南农村商业银行',
          proRate: '4.55%',
          proMoney: '5,000W',
          proExpires: '360天',
          publishDate: '2020/09/10',
        },
        {
          proType: '同业资金',
          serviceType: '同业存放',
          proName: '资金融入',
          organName: '江南农村商业银行',
          proRate: '4.55%',
          proMoney: '5,000W',
          proExpires: '360天',
          publishDate: '2020/09/10',
        },
        {
          proType: '同业资金',
          serviceType: '同业存放',
          proName: '资金融入',
          organName: '江南农村商业银行',
          proRate: '4.55%',
          proMoney: '5,000W',
          proExpires: '360天',
          publishDate: '2020/09/10',
        },
      ],
    }
  },
  methods: {
    goDetail(row) {
      this.$router.push({
        path: '/member/publishedDetail',
        query: {
          detail: JSON.stringify(row),
        },
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.showTable = false
        } else {
          this.showTable = true
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="css" scoped>
.pro-rate {
  color: #d13051;
}

</style>
