<template>
  <div>
    <div>
        <ul class="product-info">
      <li></li>
      <li>产品信息</li>
    </ul>
    <div class="detail-info">
      <div>
        <li>{{fundinfo.code}}</li>
        <li>{{fundinfo.name}}</li>
        <li>{{fundinfo.risk}}</li>
      </div>
      <div>
        <ul>
          <li class="fund-rate">{{fundinfo.rate7}}</li>
          <li>7日年化收益率</li>
        </ul>
        <ul>
          <li class="fund-rate">{{fundinfo.rate}}</li>
          <li>万份收益</li>
        </ul>
        <ul>
          <li>{{fundinfo.company}}</li>
          <li>发行公司</li>
        </ul>
        <ul>
          <li>{{fundinfo.type}}</li>
          <li>货币类型</li>
        </ul>
      </div>
    </div>
    <ul class="product-info">
        <li></li>
        <li>交易信息</li>
      </ul>
    </div>
    

    

  </div>
</template>
<script>
export default {
  name: "mufunddetail"
};
</script>
<style scoped>
.product-info {
  display: -webkit-box;
  font-size: 20px;
  position: relative;
}
.product-info li:nth-child(1) {
  width: 5px;
  background: royalblue;
  margin-right: 10px;
}
</style>