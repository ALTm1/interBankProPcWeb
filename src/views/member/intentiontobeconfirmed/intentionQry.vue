<!--
 * @Author: your name
 * @Date: 2020-07-20 16:50:40
 * @LastEditTime: 2020-07-20 18:15:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JNRCB-PC\src\views\member\publishedassets\PublishedQry.vue
--> 

<template>
  <div class="intention-query">
    <!-- <ui-form ref="form" :model="form" label-width="100px">
      <ui-form-item label="产品类型">
        <ui-select v-model="form.proType" placeholder="请选择">
          <ui-option label="同业资金" value="选项一"></ui-option>
          <ui-option label="债权业务" value="选项二"></ui-option>
          <ui-option label="线上资金业务" value="选项三"></ui-option>
        </ui-select>
      </ui-form-item>
      <ui-form-item label="活动时间">
        <ui-col :span="6">
          <ui-date-picker
            type="date"
            placeholder="选择起始日期"
            v-model="form.startDate"
            style="width: 100%;"
          ></ui-date-picker>
        </ui-col>
        <ui-col class="line" :span="2" style="textAlign:center">--</ui-col>
        <ui-col :span="6">
          <ui-date-picker
            type="date"
            placeholder="选择终止时间"
            v-model="form.endDate"
            style="width: 100%;"
          ></ui-date-picker>
        </ui-col>
      </ui-form-item>
    </ui-form>-->
    <!-- 标题 -->
    <div style="margin: 40px 0">
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">忘记密码</ui-breadcrumb-item>
        <ui-breadcrumb-item>个人信息录入</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <ui-table :data="tableData" border>
      <ui-table-column prop="proType" label="产品类型" width="150"></ui-table-column>
      <ui-table-column prop="serviceType" label="业务类型" width="120"></ui-table-column>
      <ui-table-column prop="proName" label="产品名称" width="120"></ui-table-column>
      <ui-table-column prop="organName" label="机构全称" width="150"></ui-table-column>
      <ui-table-column prop="proRate" label="利率" width="150"></ui-table-column>
      <ui-table-column prop="proMoney" label="金额" width="120"></ui-table-column>
      <ui-table-column prop="proExpires" label="期限" width="120"></ui-table-column>
      <ui-table-column prop="publishDate" label="发布日期" width="120"></ui-table-column>
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
  name: 'intentionQry',
  data() {
    return {
      //   form: {
      //     proType: '',
      //     startDate: '',
      //     endDate: ''
      //   },
      tableData: [
        {
          proType: '同业资金',
          serviceType: '同业存放',
          proName: '资金融入',
          organName: '江南农村商业银行',
          proRate: '4.55%',
          proMoney: '5,000W',
          proExpires: '360天',
          publishDate: '2020/09/10'
        },
        {
          proType: '同业资金',
          serviceType: '同业存放',
          proName: '资金融入',
          organName: '江南农村商业银行',
          proRate: '4.55%',
          proMoney: '5,000W',
          proExpires: '360天',
          publishDate: '2020/09/10'
        },
        {
          proType: '同业资金',
          serviceType: '同业存放',
          proName: '资金融入',
          organName: '江南农村商业银行',
          proRate: '4.55%',
          proMoney: '5,000W',
          proExpires: '360天',
          publishDate: '2020/09/10'
        },
        {
          proType: '同业资金',
          serviceType: '同业存放',
          proName: '资金融入',
          organName: '江南农村商业银行',
          proRate: '4.55%',
          proMoney: '5,000W',
          proExpires: '360天',
          publishDate: '2020/09/10'
        }
      ]
    }
  },
  methods: {
    goDetail() {
      this.$router.push({ path: '/member/intentionDetail' })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>