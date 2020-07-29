<!--
 * @Author: your name
 * @Date: 2020-07-20 18:26:04
 * @LastEditTime: 2020-07-21 10:06:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JNRCB-PC\src\views\member\publishedassets\PublishedDetail.vue
--> 


<template>
  <div class="intention-detail">
    <!-- 标题导航 -->
    <div>
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">会员中心</ui-breadcrumb-item>
        <ui-breadcrumb-item>待确认意向详情</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <div class="pro-info item">
      <div class="item-title">
        <p></p>
        <p>产品信息</p>
      </div>
      <div v-for="item in proInfo" :key="item.itemTitle">
        <Item :itemTitle="item.itemTitle">
          <span>{{item.itemValue}}</span>
        </Item>
      </div>
    </div>
    <!--机构列表 -->
    <div class="pro-info item">
      <div class="item-title">
        <p></p>
        <p>机构列表</p>
        <div class="arrow-right"></div>
      </div>
      <ui-table :data="organList" border style="width: 100%">
        <ui-table-column prop="index" label="序号" width="180"></ui-table-column>
        <ui-table-column prop="name" label="机构名称"></ui-table-column>
      </ui-table>
    </div>
    <!--发布方联系人 -->
    <div class="pro-info item">
      <div class="item-title">
        <p></p>
        <p>发布方联系人</p>
        <div class="arrow-right"></div>
      </div>
      <ui-table :data="publishedList" border style="width: 100%">
        <ui-table-column prop="index" label="序号" width="180"></ui-table-column>
        <ui-table-column prop="contactName" label="联系人名称"></ui-table-column>
        <ui-table-column prop="contactPhone" label="联系人电话"></ui-table-column>
        <ui-table-column prop="contactOnline" label="在线聊天"></ui-table-column>
      </ui-table>
    </div>
    <!-- 意向信息 -->
    <div class="pro-info item">
      <div class="item-title">
        <p></p>
        <p>意向信息</p>
      </div>
      <div v-for="item in proInfo" :key="item.itemTitle">
        <Item :itemTitle="item.itemTitle">
          <!-- <span>{{item.itemValue}}</span> -->
        </Item>
      </div>
    </div>
    <!-- 确认意见 -->
    <div class="pro-info item">
      <div class="item-title">
        <p></p>
        <p>确认意见</p>
      </div>
      <div>
        <Item :itemTitle="confTitle">
          <ui-radio v-model="radio" label="1">备选项</ui-radio>
          <ui-radio v-model="radio" label="2">备选项</ui-radio>
        </Item>
        <Item :itemTitle="confTitle" v-show="confResult===0">
          <ui-input-business v-model="reason" placeholder="请输入拒绝原因"></ui-input-business>
        </Item>
      </div>
    </div>
    <!-- 按钮 -->
    <div class="btn">
      <ui-button type="primary" @click="submitForm('form')">提交</ui-button>
    </div>
  </div>
</template>


<script>
import Item from '@/views/member/components/Item.vue'
export default {
  name: 'intentionDetail',
  components: {
    Item,
  },
  data() {
    return {
      proInfo: [
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
          itemValue: '同业存放',
        },
      ],
      // 机构列表数据
      organList: [
        {
          index: 1,
          name: '王小虎',
        },
        {
          index: 2,
          name: '王小虎',
        },
        {
          index: 3,
          name: '王小虎',
        },
      ],
      // 已发布联系人列表
      publishedList: [
        {
          index: 1,
          contactName: '刘诗诗',
          contactPhone: '13148888888',
          contactOnline: '你好嘛',
        },
        {
          index: 2,
          contactName: '朱一龙',
          contactPhone: '13148888888',
          contactOnline: '可好啦',
        },
        {
          index: 3,
          contactName: '郑好',
          contactPhone: '13148888888',
          contactOnline: '长歌',
        },
      ],
      // 确认意见
      radio: 1,
      confTitle: '确认结果',
      confResult: 0,
      reason: '',
    }
  },
  methods: {
    submitForm(form) {
      this.$router.push('/member/intentionRes')
    },
  },
}
</script>

<style lang="scss" scoped>
.intention-detail {
  .item-title {
    overflow: hidden;
  }
  .item-title p {
    float: left;
    line-height: 30px;
  }
  .item-title p:nth-child(1) {
    width: 10px;
    height: 30px;
    background: #f0f;
    margin-right: 20px;
  }
  .arrow-right {
    width: 20px;
    height: 20px;
    float: right;
    margin-top: 20px;
    background: #f0f;
  }
  .btn {
    margin-top: 40px;
    width: 100%;
    text-align: center;
  }
  .btn .ui-button {
    width: 30%;
    font-size: 16px;
    font-family: SimHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    border-radius: 18px;
    background-color: #ce2848;
    border-color: #ce2848;
    padding: 12px 20px !important;
  }
}
</style>