<!--
 * @Author: your name
 * @Date: 2020-07-21 18:28:48
 * @LastEditTime: 2020-07-21 18:43:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jn-pc\src\views\memberaddressbook\AddressBookDetail.vue
--> 


<template>
  <div>
    <div v-for="item in firendInfo" :key="item.itemTitle">
      <Item :itemTitle="item.itemTitle">
        <span>{{item.itemValue}}</span>
      </Item>
    </div>
    <ui-button @click="goNext()" type="primary" size="small" style=" width:200px">添加好友</ui-button>
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
      firendInfo: []
    }
  },
  created() {
    var detail = JSON.parse(this.$route.query.detail)
    this.firendInfo = [
      {
        itemTitle: '好友姓名',
        itemValue: detail.friendName
      },
      {
        itemTitle: '好友所属机构',
        itemValue: detail.friendOrgan
      },
      {
        itemTitle: '手机号码',
        itemValue: '18890898900'
      },
      {
        itemTitle: '邮箱',
        itemValue: '34785690@qq.com'
      }
    ]
  },
  methods: {
    goNext() {},
    goChat() {}
  }
}
</script>

<style lang="css" scoped>
</style>