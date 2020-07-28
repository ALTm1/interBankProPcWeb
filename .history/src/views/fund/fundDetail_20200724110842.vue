<template>
  <div>
    <div class="header-wrap">
      <!-- 面包屑 -->
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">基金通</ui-breadcrumb-item>
        <ui-breadcrumb-item>产品详情</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <div class="detail-info">
      <div>
        <li>{{fundinfo.code}}</li>
        <li>{{fundinfo.name}}</li>
        <li>{{fundinfo.risk}}</li>
      </div>
      <div>
        <ul>
          <li>{{fundinfo.rate7}}</li>
          <li>7日年化收益率</li>
        </ul>
        <ul>
          <li>{{fundinfo.rate}}</li>
          <li>万份收益</li>
        </ul>
        <ul>
          <li>{{fundinfo.company}}</li>
          <li>发行公司</li>
        </ul>
        <ul>
          <li>{{fundinfo.risk}}</li>
          <li>货币类型</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "funddetail",
  data() {
    return {
      fundinfo: {
        code: "000001",
        name: "XXX天天理财",
        rate7: "1，6225",
        rate: "0.42",
        company: "XXX基金公司",
        risk: "低风险",
        amount: "500000",
        type:""
      }
    };
  }
};
</script>
<style scoped>
.header-wrap {
  padding: 30px;
}
</style>