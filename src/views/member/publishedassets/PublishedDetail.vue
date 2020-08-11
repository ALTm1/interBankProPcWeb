<!--
 * @Author: your name
 * @Date: 2020-07-20 18:26:04
 * @LastEditTime: 2020-07-30 15:49:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JNRCB-PC\src\views\member\publishedassets\PublishedDetail.vue
--> 


<template>
  <div class="wrap">
    <div class="content">
      <div class="pro-info">
        <HeaderItem text="产品信息"></HeaderItem>
        <div class="pro-info-content clear">
          <div
            v-for="(item,index) in proInfo"
            :key="item.itemTitle"
            :class="[index%2==0?'float-left':'float-right']"
          >
            <Item :itemTitle="item.itemTitle">
              <span>{{item.itemValue}}</span>
            </Item>
          </div>
        </div>
      </div>
      <div class="organ-list">
        <HeaderItem text="机构列表"></HeaderItem>
        <ui-table :data="organList">
          <ui-table-column prop="order" label="序号" min-width="100px"></ui-table-column>
          <ui-table-column prop="organName" label="机构全称" min-width="300px"></ui-table-column>
        </ui-table>
      </div>
      <div class="publish-contact-list">
        <HeaderItem text="发布方联系人"></HeaderItem>
        <ui-table :data="pubContactList">
          <ui-table-column prop="order" label="序号" min-width="100px"></ui-table-column>
          <ui-table-column prop="contactName" label="联系人姓名" min-width="100px"></ui-table-column>
          <ui-table-column label="在线聊天" min-width="100px">
            <template slot-scope="scope">
              <ui-button @click="goChat(scope.row)" type="text" size="small">聊天</ui-button>
            </template>
          </ui-table-column>
        </ui-table>
      </div>
      <div class="buttons">
        <ButtonItem text="下架" backgroundColor="#CE2848" @click.native="goNext()"></ButtonItem>
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
      // 产品信息
      proInfo: [],
      // 机构列表
      organList: [
        {
          order: 1,
          organName: '南京银行',
        },
        {
          order: 2,
          organName: '江苏银行',
        },
        {
          order: 3,
          organName: '招商银行',
        },
      ],
      // 发布方联系人
      pubContactList: [
        {
          order: 1,
          contactName: '张三',
          contactPhone: '19988907868',
        },
      ],
    }
  },
  created() {
    var detail = JSON.parse(this.$route.query.detail)
    this.proInfo = [
      {
        itemTitle: '产品类型',
        itemValue: detail.proType,
      },
      {
        itemTitle: '业务类型',
        itemValue: detail.serviceType,
      },
      {
        itemTitle: '交易方向',
        itemValue: detail.proName,
      },
      {
        itemTitle: '产品状态',
        itemValue: '正常',
      },
      {
        itemTitle: '产品发布者',
        itemValue: detail.organName,
      },
      {
        itemTitle: '发布日期',
        itemValue: detail.publishDate,
      },
      {
        itemTitle: '利率',
        itemValue: detail.proRate,
      },
      {
        itemTitle: '金额',
        itemValue: detail.proMoney,
      },
      {
        itemTitle: '期限',
        itemValue: detail.proExpires,
      },
      {
        itemTitle: '产品标签',
        itemValue: '高风险',
      },
      {
        itemTitle: '备注',
        itemValue: 'XXXXXXX',
      },
      {
        itemTitle: '属性类型',
        itemValue: '指定交易对手可见',
      },
    ]
  },
  methods: {
    // 去聊天
    goChat() {},
    // 下一步
    goNext() {
      this.$router.push({
        path: '/member/publishSucc',
      })
    },
  },
}
</script>

<style lang="css" scoped>
.wrap {
  text-align: center;
  background: #ffffff;
}
.content {
  display: inline-block;
  text-align: center;
}

.pro-info-content {
  width: 880px;
  display: inline-block;
}
.buttons{
  margin: 50px 0px;
}
</style>