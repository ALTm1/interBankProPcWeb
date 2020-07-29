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
      <!-- 机构列表 -->
      <div>
        <ul class="product-info">
          <li></li>
          <li>机构列表</li>
          <div class="info-icon"></div>
        </ul>
        <div class="org-list">
          <ui-table :data="tableData" border header-row-class-name="header">
            <ui-table-column prop="number" label="序号" width="180"></ui-table-column>
            <ui-table-column prop="name" label="机构全称" width="320"></ui-table-column>
          </ui-table>
        </div>
      </div>
       <!-- 发布方联系人 -->
       <div>  
        <ul class="product-info">
          <li></li>
          <li>发布方联系人</li>
        </ul>
        <!-- 表格 -->
        <div class="people-list">
          <ui-table :data="peopleData" border header-row-class-name="header1">
            <ui-table-column prop="number" label="序号" width="180"></ui-table-column>
            <ui-table-column prop="name" label="联系人姓名" width="180"></ui-table-column>
            <ui-table-column prop="phone" label="联系人电话" width="180"></ui-table-column>
            <ui-table-column prop="chat" label="在线聊天" width="180"></ui-table-column>
          </ui-table>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
             proinfo: {
        infotype: "团购产品",
        type: "同业存放",
        transcation: "买入",
        state: "正常",
        publish: "江南农村商业银行",
        date: "2020-06-16",
        rate: "4.5 %",
        amount: "5000 W",
        day: "360 天",
        label: "高风险",
        beizhu: "XXXXXXX",
        option: "指定交易机构可见"
      },
        }
    }
}
</script>
<style scoped>

</style>