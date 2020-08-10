

<template>
  <div class="intention-query">
    <!-- 标题 -->
    <div style="margin: 40px 0">
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">待确认意向</ui-breadcrumb-item>
        <ui-breadcrumb-item>待确认意向查询</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <ui-table :data="tableData">
      <ui-table-column prop="proType" label="产品类型" width="150"></ui-table-column>
      <ui-table-column prop="serviceType" label="业务类型" width="120"></ui-table-column>
      <ui-table-column prop="proName" label="产品名称" width="120"></ui-table-column>
      <ui-table-column prop="organName" label="机构全称" width="150"></ui-table-column>
      <!-- <ui-table-column prop="proRate" label="利率" width="150"> -->
      <ui-table-column label="利率" min-width="100px">
        <template slot-scope="scope">
          <span class="pro-rate">{{ scope.row.proRate}}</span>
        </template>
      </ui-table-column>

      <!-- </ui-table-column> -->
      <ui-table-column prop="proMoney" label="金额" width="120"></ui-table-column>
      <ui-table-column prop="proExpires" label="期限" width="120"></ui-table-column>
      <ui-table-column prop="publishDate" label="发布日期" width="120"></ui-table-column>
      <!-- <ui-table-column label="操作">-->
      <ui-table-column label="操作">
        <template slot-scope="scope">
          <span class="detail-button" @click="goDetail(scope.row)">查看详情</span>
        </template>
      </ui-table-column>
      <!-- </ui-table-column> -->
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
    goDetail() {
      this.$router.push({ path: '/member/intentionDetail' })
    },
  },
}
</script>

<style lang="scss">
.intention-query {
  .ui-table td,
  .ui-table th.is-leaf {
    border-bottom: none;
  }
  .rate .cell {
    color: #d13051 !important;
  }
}
</style>