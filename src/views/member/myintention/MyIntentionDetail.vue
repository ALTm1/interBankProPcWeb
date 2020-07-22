
<template>
  <div class="pro-info item">
    <div class="pro-info">
      <p class="item-title">产品信息</p>
      <div v-for="item in proInfo" :key="item.itemTitle">
        <Item :itemTitle="item.itemTitle">
          <span>{{item.itemValue}}</span>
        </Item>
      </div>
    </div>
    <div class="organ-list">
      <p class="item-title">机构列表</p>
      <ui-table :data="organList" border>
        <ui-table-column prop="order" label="序号" min-width="100px"></ui-table-column>
        <ui-table-column prop="organName" label="机构全称" min-width="100px"></ui-table-column>
      </ui-table>
    </div>
    <div class="publish-contact-list">
      <p class="item-title">发布方联系人</p>
      <ui-table :data="pubContactList" border>
        <ui-table-column prop="order" label="序号" min-width="100px"></ui-table-column>
        <ui-table-column prop="contactName" label="联系人姓名" min-width="100px"></ui-table-column>
        <ui-table-column label="在线聊天" min-width="100px">
          <template slot-scope="scope">
            <ui-button @click="goChat(scope.row)" type="text" size="small">聊天</ui-button>
          </template>
        </ui-table-column>
      </ui-table>
    </div>
    <div class="intention-info">
      <p>意向信息</p>
      <div v-for="item in intentionInfo" :key="item.itemTitle">
        <Item :itemTitle="item.itemTitle">
          <span>{{item.itemValue}}</span>
        </Item>
      </div>
    </div>
    <div class="confirm-comment">
      <p>确认员意见信息</p>
      <div v-for="item in confirmCommentInfo" :key="item.itemTitle">
        <Item :itemTitle="item.itemTitle">
          <span>{{item.itemValue}}</span>
        </Item>
      </div>
    </div>
    <div class="auditor-comment">
      <p>审核员意见信息</p>
      <div v-for="item in auditorCommentInfo" :key="item.itemTitle">
        <Item :itemTitle="item.itemTitle">
          <span>{{item.itemValue}}</span>
        </Item>
      </div>
    </div>
    <!-- <ui-button
      @click="goNext()"
      type="primary"
      size="small"
      style="marginTop:20px; width:200px"
    >取消关注</ui-button>-->
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
      // 产品信息
      proInfo: [],
      // 机构列表
      organList: [
        {
          order: 1,
          organName: '南京银行'
        },
        {
          order: 2,
          organName: '江苏银行'
        },
        {
          order: 3,
          organName: '招商银行'
        }
      ],
      // 发布方联系人
      pubContactList: [
        {
          order: 1,
          contactName: '张三',
          contactPhone: '19988907868'
        }
      ],
      // 意向信息
      intentionInfo: [
        {
          itemTitle: '金额',
          itemValue: '5000W'
        },
        {
          itemTitle: '利率',
          itemValue: '4.5%'
        },
        {
          itemTitle: '备注',
          itemValue: 'XXXXXXXX'
        },
        {
          itemTitle: '意向状态',
          itemValue: '审核拒绝'
        },
        {
          itemTitle: '意向方机构全称',
          itemValue: 'XXXX银行'
        },
        {
          itemTitle: '意向方用户姓名',
          itemValue: '蔡徐坤'
        },
        {
          itemTitle: '意向方手机号码',
          itemValue: '18966889089'
        }
      ],
      // 确认员意见信息
      confirmCommentInfo: [
        {
          itemTitle: '确认结果',
          itemValue: '通过'
        },
        {
          itemTitle: '拒绝原因',
          itemValue: 'XXXXXXXX'
        }
      ],
      // 审核员意向信息
      auditorCommentInfo: [
        {
          itemTitle: '确认结果',
          itemValue: '通过'
        },
        {
          itemTitle: '拒绝原因',
          itemValue: 'XXXXXXXX'
        }
      ]
    }
  },
  created() {
    var detail = JSON.parse(this.$route.query.detail)
    this.proInfo = [
      {
        itemTitle: '产品类型',
        itemValue: detail.proType
      },
      {
        itemTitle: '业务类型',
        itemValue: detail.serviceType
      },
      {
        itemTitle: '交易方向',
        itemValue: detail.proName
      },
      {
        itemTitle: '产品状态',
        itemValue: '正常'
      },
      {
        itemTitle: '产品发布者',
        itemValue: detail.organName
      },
      {
        itemTitle: '发布日期',
        itemValue: detail.publishDate
      },
      {
        itemTitle: '利率',
        itemValue: detail.proRate
      },
      {
        itemTitle: '金额',
        itemValue: detail.proMoney
      },
      {
        itemTitle: '期限',
        itemValue: detail.proExpires
      },
      {
        itemTitle: '产品标签',
        itemValue: '高风险'
      },
      {
        itemTitle: '备注',
        itemValue: 'XXXXXXX'
      },
      {
        itemTitle: '属性类型',
        itemValue: '指定交易对手可见'
      }
    ]
  },
  methods: {
    // 去聊天
    goChat() {},
    // 下一步
    goNext() {}
  }
}
</script>

<style lang="css" scoped>
</style>