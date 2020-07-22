<!--
 * @Author: your name
 * @Date: 2020-07-21 18:25:43
 * @LastEditTime: 2020-07-22 16:12:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jn-pc\src\views\member\addressbook\AddressBookList.vue
--> 


<template>
  <div>
    <ui-table :data="tableData" stripe>
      <ui-table-column prop="order" label="序号" min-width="100px"></ui-table-column>
      <ui-table-column prop="friendName" label="好友姓名" min-width="200px"></ui-table-column>
      <ui-table-column prop="friendOrgan" label="好友所属机构" min-width="300px"></ui-table-column>
      <ui-table-column label="操作" min-width="200px">
        <template slot-scope="scope">
          <ui-button @click="goDetail(scope.row)" type="text" size="small">查看详情</ui-button>
          <ui-button @click="addFriend(scope.row)" type="text" size="small">添加好友</ui-button>
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
          order: 1,
          friendName: '张三',
          friendOrgan: '江南农村银行'
        },
        {
          order: 2,
          friendName: '张三',
          friendOrgan: '江南农村银行'
        },
        {
          order: 3,
          friendName: '张三',
          friendOrgan: '江南农村银行'
        }
      ]
    }
  },
  methods: {
    goDetail(row) {
      this.$router.push({
        path: '/member/friendDetail',
        query: {
          detail: JSON.stringify(row)
        }
      })
    },
    addFriend(row) {}
  }
}
</script>

<style lang="css" scoped>
</style>