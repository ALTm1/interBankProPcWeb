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
            <li></li>
            <li></li>
            <li></li>
        </div>
        <div>
            <ul>
                <li></li>
                <li>7日年化收益率</li>
            </ul>
            <ul>
                <li></li>
                <li>万份收益</li>
            </ul>
            <ul>
                <li></li>
                <li>发行公司</li>
            </ul>
            <ul>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "funddetail"
};
</script>
<style scoped>
.header-wrap {
  padding: 30px;
}
</style>