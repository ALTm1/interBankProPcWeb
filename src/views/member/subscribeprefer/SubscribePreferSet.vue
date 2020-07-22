<!--
 * @Author: your name
 * @Date: 2020-07-21 14:19:46
 * @LastEditTime: 2020-07-21 15:05:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jn-pc\src\views\member\subscribeprefer\subscribePreferSet.vue
--> 

<template>
  <div>
    <div>
      <p class="block-title">偏好设置</p>
      <Item itemTitle="高风险">
        <ui-switch v-model="switchs.highRisk"></ui-switch>
      </Item>
      <Item itemTitle="低风险">
        <ui-switch v-model="switchs.lowRisk"></ui-switch>
      </Item>
      <Item itemTitle="高收益">
        <ui-switch v-model="switchs.highYield"></ui-switch>
      </Item>
    </div>
    <div>
      <p class="block-title">订阅产品类型</p>
      <Item itemTitle="同业资金">
        <ui-switch v-model="switchs.interbankFund"></ui-switch>
      </Item>
      <Item itemTitle="债权业务">
        <ui-switch v-model="switchs.creditorService"></ui-switch>
      </Item>
      <Item itemTitle="线上资金">
        <ui-switch v-model="switchs.onlineFund"></ui-switch>
      </Item>
      <Item itemTitle="同业投资">
        <ui-switch v-model="switchs.interbankInvest"></ui-switch>
      </Item>
      <Item itemTitle="同业存单">
        <ui-switch v-model="switchs.interbankDeposit"></ui-switch>
      </Item>
      <Item itemTitle="票据业务">
        <ui-switch v-model="switchs.billService"></ui-switch>
      </Item>
      <Item itemTitle="福费廷">
        <ui-switch v-model="switchs.forfaiting"></ui-switch>
      </Item>
    </div>
  </div>
</template>

<script>
import Item from '@/views/member/components/Item.vue'
export default {
  components: {
    Item
  },
  data() {
    return {
      perferList: [
        {
          itemTitle: '高风险'
        },
        {
          itemTitle: '低风险'
        },
        {
          itemTitle: '高收益'
        }
      ],
      switchs: {
        highRisk: false,
        lowRisk: true,
        highYield: false,
        interbankFund: false,
        creditorService: true,
        onlineFund: true,
        interbankInvest: true,
        interbankDeposit: false,
        billService: false,
        forfaiting: true
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>