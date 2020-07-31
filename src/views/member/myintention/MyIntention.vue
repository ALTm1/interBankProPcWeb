<!--
 * @Author: your name
 * @Date: 2020-07-21 15:32:59
 * @LastEditTime: 2020-07-30 16:06:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jn-pc\src\views\member\myintention\MyIntention.vue
--> 

<template>
  <div>
    <ui-table :data="tableData">
      <ui-table-column prop="proType" label="产品类型" min-width="100px"></ui-table-column>
      <ui-table-column prop="serviceType" label="业务类型" min-width="100px"></ui-table-column>
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
        path: '/member/myIntentionDetail',
        query: {
          detail: JSON.stringify(row),
        },
      })
    },
  },
}
</script>

<style lang="css" scoped>
</style>