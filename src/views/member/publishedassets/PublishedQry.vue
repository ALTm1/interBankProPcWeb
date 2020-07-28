<!--
 * @Author: your name
 * @Date: 2020-07-20 16:50:40
 * @LastEditTime: 2020-07-23 11:21:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JNRCB-PC\src\views\member\publishedassets\PublishedQry.vue
--> 

<template>
  <div class="pro-query">
    <ui-form ref="ruleForm" :model="form" :rules="rules" label-width="100px">
      <ui-form-item label="产品类型" prop="proType">
        <ui-select v-model="form.proType" placeholder="请选择">
          <ui-option label="同业资金" value="选项一"></ui-option>
          <ui-option label="债权业务" value="选项二"></ui-option>
          <ui-option label="线上资金业务" value="选项三"></ui-option>
        </ui-select>
      </ui-form-item>
      <ui-form-item label="活动时间" required>
        <ui-col :span="6">
          <ui-form-item prop="startDate">
            <ui-date-picker
              type="date"
              placeholder="选择起始日期"
              v-model="form.startDate"
              style="width: 100%;"
            ></ui-date-picker>
          </ui-form-item>
        </ui-col>
        <ui-col class="line" :span="2" style="textAlign:center">--</ui-col>
        <ui-col :span="6">
          <ui-form-item prop="endDate">
            <ui-date-picker
              type="date"
              placeholder="选择终止时间"
              v-model="form.endDate"
              style="width: 100%;"
            ></ui-date-picker>
          </ui-form-item>
        </ui-col>
      </ui-form-item>
      <ui-form-item>
        <ui-button type="primary" @click="submitForm('ruleForm')">查询</ui-button>
        <ui-button @click="resetForm('ruleForm')">重置</ui-button>
      </ui-form-item>
    </ui-form>
    <ui-table :data="tableData" stripe v-if="showTable">
      <ui-table-column prop="proType" label="产品类型" min-width="100px"></ui-table-column>
      <ui-table-column prop="serviceType" label="业务类型" min-width="200px"></ui-table-column>
      <ui-table-column prop="proName" label="产品名称" min-width="200px"></ui-table-column>
      <ui-table-column prop="organName" label="机构全称" min-width="200px"></ui-table-column>
      <ui-table-column prop="proRate" label="利率" min-width="100px"></ui-table-column>
      <ui-table-column prop="proMoney" label="金额" min-width="200px"></ui-table-column>
      <ui-table-column prop="proExpires" label="期限" min-width="100px"></ui-table-column>
      <ui-table-column prop="publishDate" label="发布日期" min-width="100px"></ui-table-column>
      <ui-table-column label="操作">
        <template slot-scope="scope">
          <ui-button @click="goDetail(scope.row)" type="text" size="small">查看详情</ui-button>
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
        startDate: '',
        endDate: '',
      },
      rules: {
        proType: [
          { required: true, message: '请输入产品类型', trigger: 'change' },
        ],
        startDate: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change',
          },
        ],
        endDate: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change',
          },
        ],
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
          this.showTable = true
        } else {
          this.showTable = false
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
</style>