<!--
 * @Author: your name
 * @Date: 2020-07-21 17:51:14
 * @LastEditTime: 2020-07-30 16:16:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jn-pc\src\views\member\friendmanage\FriendDetail.vue
--> 

<template>
  <div class="wrap">
    <div class="content">
      <div v-for="item in firendInfo" :key="item.itemTitle">
        <Item :itemTitle="item.itemTitle">
          <span>{{item.itemValue}}</span>
        </Item>
      </div>

      <div style="marginTop:56px">
        <ButtonItem
          text="删除好友"
          backgroundColor="#CE2848"
          marginRight="20px"
          @click.native="deleteFriend()"
        ></ButtonItem>
        <ButtonItem text="发起会话" backgroundColor="#CE2848" @click.native="goChat()"></ButtonItem>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '@/views/member/components/Item.vue'

export default {
  components: {
    Item,
  },
  data() {
    return {
      firendInfo: [],
    }
  },
  created() {
    var detail = JSON.parse(this.$route.query.detail)
    this.firendInfo = [
      {
        itemTitle: '好友姓名',
        itemValue: detail.friendName,
      },
      {
        itemTitle: '好友所属机构',
        itemValue: detail.friendOrgan,
      },
      {
        itemTitle: '手机号码',
        itemValue: '18890898900',
      },
      {
        itemTitle: '邮箱',
        itemValue: '34785690@qq.com',
      },
    ]
  },
  methods: {
    deleteFriend() {},
    goChat() {},
  },
}
</script>

<style lang="css" scoped>
.wrap {
  text-align: center;
}
.content {
  display: inline-block;
  text-align: center;
}
</style>