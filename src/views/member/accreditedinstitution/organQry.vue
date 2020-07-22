
<template>
  <div class="organ-query">
    <!-- 标题导航 -->
    <div>
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">会员中心</ui-breadcrumb-item>
        <ui-breadcrumb-item>机构认证</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <!-- 信息列表 -->
    <div>
      <ui-row>
        <ui-col>
          <div class="pro-info item item1">
            <div class="item-title">
              <p></p>
              <p>机构信息</p>
              <div class="arrow-right"></div>
            </div>
          </div>
        </ui-col>
      </ui-row>
      <ui-row>
        <ui-col :span="12">
          <Item itemTitle="机构全称">
            <span>江南农村商业银行</span>
          </Item>
          <Item itemTitle="部门">
            <span>金融同业部</span>
          </Item>
          <Item itemTitle="归属机构全称">
            <span>江南农村商业银行</span>
          </Item>
          <Item itemTitle="归属机构统一社会信用代码">
            <span>SBH12387474848</span>
          </Item>
          <Item itemTitle="归属机构组织机构代码">
            <span>SBH12387474848</span>
          </Item>
        </ui-col>
        <ui-col :span="12">
          <Item itemTitle="机构类型">
            <span>本行</span>
          </Item>
          <Item itemTitle="是否为总机构">
            <ui-radio v-model="radio" label="1">是</ui-radio>
            <ui-radio v-model="radio" label="2">否</ui-radio>
          </Item>
          <Item itemTitle="附件-营业执照扫描件（加盖公章）">
            <a href="javascripr:;">预览</a>
          </Item>
          <Item itemTitle="附件-授权委托书（加盖公章）">
            <a href="javascripr:;">预览</a>
          </Item>
        </ui-col>
      </ui-row>

      <!--证件信息 -->
      <ui-row>
        <ui-col>
          <div class="pro-info item item1">
            <div class="item-title">
              <p></p>
              <p>证件信息</p>
              <div class="arrow-right"></div>
            </div>
          </div>
        </ui-col>
      </ui-row>
      <ui-row>
        <ui-col :span="12">
          <Item itemTitle="统一社会信用代码">
            <span>SBH12387474848</span>
          </Item>
          <Item itemTitle="法定代表人">
            <span>郑好</span>
          </Item>
          <Item itemTitle="净资产（亿）">
            <span>40</span>
          </Item>
        </ui-col>
        <ui-col :span="12">
          <Item itemTitle="组织机构代码证">
            <span>SBH12387474848</span>
          </Item>
          <Item itemTitle="资产规模（亿）">
            <span>40</span>
          </Item>
        </ui-col>
      </ui-row>

      <!--当前机构地址 -->
      <ui-row>
        <ui-col>
          <div class="pro-info item item1">
            <div class="item-title">
              <p></p>
              <p>证件信息</p>
              <div class="arrow-right"></div>
            </div>
          </div>
        </ui-col>
      </ui-row>
      <ui-row>
        <ui-col :span="12">
          <Item itemTitle="省、市">
            <span>眉间心上</span>
          </Item>
          <Item itemTitle="联系人">
            <span>郑好</span>
          </Item>
          <Item itemTitle="手机号码">
            <span>13148888888888</span>
          </Item>
          <Item itemTitle="电子邮件">
            <span>13148888888@qq.com</span>
          </Item>
          <Item :itemTitle="accessory">
            <a href="javascripr:;">预览</a>
          </Item>
        </ui-col>
        <ui-col :span="12">
          <Item itemTitle="详细地址">
            <span>左右心房</span>
          </Item>
          <Item itemTitle="电话">
            <span>010-888888</span>
          </Item>
          <Item itemTitle="传真">
            <span>010-888888</span>
          </Item>
          <Item itemTitle="用户信息描述">
            <span>江南银行</span>
          </Item>
          <Item itemTitle="附件-授权委托书（加盖公章）">
            <a href="javascripr:;">预览</a>
          </Item>
        </ui-col>
      </ui-row>
    </div>
    <!-- 按钮 -->
    <div class="btn">
      <ui-button type="primary" @click="submitForm('form')">重新认证</ui-button>
    </div>
  </div>
</template>


<script>
import Item from '@/views/member/components/Item.vue'
export default {
  name: 'organQry',
  components: {
    Item
  },
  data() {
    return {
      proInfo: [
        {
          itemTitle: '产品类型',
          itemValue: '同业资金'
        },
        {
          itemTitle: '业务类型',
          itemValue: '同业存放'
        },
        {
          itemTitle: '交易方向',
          itemValue: '同业存放'
        }
      ],
      // 是否为总机构
      headOffice: '是否为总机构',
      // 附件加盖公章
      accessory: '附件-营业执照扫描件（加盖公章）',
      // 机构列表数据
      organList: [
        {
          index: 1,
          name: '王小虎'
        },
        {
          index: 2,
          name: '王小虎'
        },
        {
          index: 3,
          name: '王小虎'
        }
      ],
      // 已发布联系人列表
      publishedList: [
        {
          index: 1,
          contactName: '刘诗诗',
          contactPhone: '13148888888',
          contactOnline: '你好嘛'
        },
        {
          index: 2,
          contactName: '朱一龙',
          contactPhone: '13148888888',
          contactOnline: '可好啦'
        },
        {
          index: 3,
          contactName: '郑好',
          contactPhone: '13148888888',
          contactOnline: '长歌'
        }
      ],
      // 确认意见
      radio: '1',
      confTitle: '确认结果',
      confResult: 0,
      reason: ''
    }
  },
  methods: {
    submitForm(form) {
      this.$router.push('/member/reauthentication')
    }
  }
}
</script>

<style lang="scss" scoped>
.organ-query {
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
    padding: 12px 20px !important;
  }
}
</style>