<!--
 * @Author: your name
 * @Date: 2020-07-20 16:50:40
 * @LastEditTime: 2020-07-30 15:43:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JNRCB-PC\src\views\member\publishedassets\PublishedQry.vue
--> 

<template>
  <div class="wrap">
    <ui-form ref="ruleForm" :model="form" :rules="rules" label-width="100px">
      <ui-form-item label="产品类型">
        <div class="clear">
          <div class="float-left" v-for="item in form.proTypeList" :key="item.label">
            <SelectItem
              :selText="item.value"
              :selActive="item.active"
              @hit="item.active=!item.active"
            ></SelectItem>
          </div>
        </div>
      </ui-form-item>
      <ui-form-item label="活动时间" required>
        <div class="clear">
          <ui-date-picker type="date" placeholder="选择起始日期" v-model="form.startDate"></ui-date-picker>
          <span class="split-line"></span>
          <ui-date-picker type="date" placeholder="选择终止时间" v-model="form.endDate"></ui-date-picker>
        </div>
      </ui-form-item>
      <ui-form-item>
        <div class="query-buttons">
          <ButtonItem
            text="查询"
            backgroundColor="#CE2848"
            marginRight="20px"
            @click.native="submitForm('ruleForm')"
          ></ButtonItem>
          <ButtonItem text="重置" backgroundColor="#BE9D62" @click.native="resetForm('ruleForm')"></ButtonItem>
        </div>
      </ui-form-item>
    </ui-form>
    <ui-table :data="tableData" stripe v-if="showTable">
      <ui-table-column prop="proType" label="产品类型" min-width="100px"></ui-table-column>
      <ui-table-column prop="serviceType" label="业务类型" min-width="200px"></ui-table-column>
      <ui-table-column prop="proName" label="产品名称" min-width="100px"></ui-table-column>
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
        startDate: '',
        endDate: '',
        tradeDirec: '',
        proTypeList: [
          {
            label: '全部',
            value: '全部',
            active: false,
          },
          {
            label: '同业资金',
            value: '同业资金',
            active: false,
          },
          {
            label: '债券业务',
            value: '债券业务',
            active: false,
          },
          {
            label: '线上资金业务',
            value: '线上资金业务',
            active: false,
          },
          {
            label: '同业投资',
            value: '同业投资',
            active: false,
          },
          {
            label: '同业存单',
            value: '同业存单',
            active: false,
          },
          {
            label: '票据业务',
            value: '票据业务',
            active: false,
          },
        ],
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
/* form表单 */
.wrap /deep/ .ui-input {
  display: inline-block;
  width: 120px;
  margin-left: 10px;
}
.wrap /deep/ .ui-input__inner {
  width: 100%;
  height: 22px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(83, 83, 83, 1);
  border-radius: 11px;
}
.wrap /deep/ .ui-form-item__label {
  font-size: 12px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(61, 61, 61, 1);
}

/* 日期分割线 */
.split-line {
  display: inline-block;
  width: 17px;
  height: 1px;
  background: #3d3d3d;
  margin: 0 20px;
}
</style>