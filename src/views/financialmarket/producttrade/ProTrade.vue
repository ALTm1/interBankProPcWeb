<!--
 * @Author: your name
 * @Date: 2020-07-27 17:20:46
 * @LastEditTime: 2020-07-30 13:40:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \interBankProPcWeb\src\views\financialmarket\producttrade\ProTrade.vue
--> 

<template>
  <div class="wrap">
    <div class="content">
      <div class="pro-info">
        <HeaderItem text="产品信息"></HeaderItem>
        <div class="pro-info-content clear">
          <div
            v-for="item in proInfo"
            :key="item.itemTitle"
            :class="[index%2==0?'float-left':'float-right']"
          >
            <Item :itemTitle="item.itemTitle">
              <span>{{item.itemValue}}</span>
            </Item>
          </div>
        </div>
      </div>
      <div class="attention-info">
        <HeaderItem text="意向信息"></HeaderItem>
        <div class="attention-info-content clear">
          <div class="float-left">
            <Item itemTitle="意向金额">
              <input class="item-input" type="text" v-model="attentionMoney" placeholder="请输入" />
              <span>万元</span>
            </Item>
          </div>
          <div class="float-right">
            <Item itemTitle="意向利率">
              <input class="item-input" type="text" v-model="attentionRate" placeholder="请输入" />
              <span>%</span>
            </Item>
          </div>
          <div class="float-left">
            <Item itemTitle="备注">
              <input class="item-input" type="text" v-model="remark" placeholder="请输入" />
            </Item>
          </div>
        </div>
      </div>
      <div style="marginTop:56px">
        <ButtonItem text="提交" backgroundColor="#CE2848" @click.native="goNext()"></ButtonItem>
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
      // 意向金额
      attentionMoney: '',
      // 意向利率
      attentionRate: '',
      // 备注
      remark: '',
    }
  },
  created() {
    this.proInfo = [
      {
        itemTitle: '产品类型',
        itemValue: '同业资金',
      },
      {
        itemTitle: '业务类型',
        itemValue: '同业存放',
      },
      {
        itemTitle: '交易方向',
        itemValue: '资金融入',
      },
      {
        itemTitle: '产品状态',
        itemValue: '正常',
      },
      {
        itemTitle: '产品发布者',
        itemValue: '江南农村商业银行',
      },
      {
        itemTitle: '发布日期',
        itemValue: '2020-06-16',
      },
      {
        itemTitle: '利率',
        itemValue: '4.5%',
      },
      {
        itemTitle: '金额',
        itemValue: '5000W',
      },
      {
        itemTitle: '期限',
        itemValue: '360天',
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
    // 下一步
    goNext() {
      this.$router.push({
        path: '/financialMarket/productTrade/proTradeSucc',
      })
    },
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
.pro-info {
  display: inline-block;
}
.pro-info-content {
  width: 880px;
  display: inline-block;
}
.organ-list {
  width: 500px;
}
.publish-contact-list {
  width: 500px;
}

.item-input {
  height: 30px;
  outline: none;
  border: none;
}

.attention-info-content {
  width: 880px;
  display: inline-block;
}
</style>