<template>
    <div>
       <div>
        <!-- 产品信息 -->
        <ul class="product-info">
          <li></li>
          <li>产品信息</li>
        </ul>
        <div class="info-wrap">
          <div>
            <ul>
              <li>产品类型</li>
              <li>{{proinfo.infotype}}</li>
            </ul>
            <ul>
              <li>业务类型</li>
              <li>{{proinfo.type}}</li>
            </ul>
            <ul>
              <li>交易方向</li>
              <li>{{proinfo.transcation}}</li>
            </ul>
            <ul>
              <li>产品状态</li>
              <li>{{proinfo.state}}</li>
            </ul>
            <ul>
              <li>产品发布者</li>
              <li>{{proinfo.publish}}</li>
            </ul>
            <ul>
              <li>发布日期</li>
              <li>{{proinfo.date}}</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>利率</li>
              <li>{{proinfo.rate}}</li>
            </ul>
            <ul>
              <li>金额</li>
              <li>{{proinfo.amount}}</li>
            </ul>
            <ul>
              <li>期限</li>
              <li>{{proinfo.day}}</li>
            </ul>
            <ul>
              <li>产品标签</li>
              <li>{{proinfo.label}}</li>
            </ul>
            <ul>
              <li>备注</li>
              <li>{{proinfo.beizhu}}</li>
            </ul>
            <ul>
              <li>属性类型</li>
              <li>{{proinfo.option}}</li>
            </ul>
          </div>
        </div>
      </div>
        <!-- 发布方联系人 -->
        <div>
            <div>
                <li></li>
                <li>发布方联系人</li>
            </div>
            <div></div>

        </div>
    </div>
</template>
<script>
export default {
    name:'leagueDetail'
}
</script>
<style scoped>

</style>