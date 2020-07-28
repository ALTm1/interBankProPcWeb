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
    <!-- 意向信息 -->
    <div>
      <ul class="product-info">
        <li></li>
        <li>意向信息</li>
      </ul>
      <div class="info-wrap">
        <div>
          <ul>
            <li>金额</li>
            <li>{{intention.amount}}</li>
          </ul>
          <ul>
            <li>利率</li>
            <li>{{intention.rate}}</li>
          </ul>
          <ul>
            <li>备注</li>
            <li>{{intention.beizhu}}</li>
          </ul>
          <ul>
            <li>意向状态</li>
            <li>{{intention.state}}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>意向方机构全称</li>
            <li>{{intention.orgnization}}</li>
          </ul>
          <ul>
            <li>意向方用户姓名</li>
            <li>{{intention.name}}</li>
          </ul>
          <ul>
            <li>意向方手机号码</li>
            <li>{{intention.phone}}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 票据信息 -->
    <div v-if="proinfo.infotype=='票据业务'">
      <ul class="product-info">
        <li></li>
        <li>票据信息</li>
      </ul>
      <div class="ticket-wrap">
        <ui-table :data="ticket" border header-row-class-name="header1">
          <ui-table-column prop="number" label="序号" width="50"></ui-table-column>
          <ui-table-column prop="ticket" label="票据号码" width="140"></ui-table-column>
          <ui-table-column prop="jiezhi" label="票据介质" width="80"></ui-table-column>
          <ui-table-column prop="type" label="票据类别" width="80"></ui-table-column>
          <ui-table-column prop="origin" label="票据来源" width="80"></ui-table-column>
          <ui-table-column prop="amount" label="票据金额（元）" width="110"></ui-table-column>
          <ui-table-column prop="startdate" label="出票日" width="100"></ui-table-column>
          <ui-table-column prop="lastdate" label="票据到期日" width="100"></ui-table-column>
          <ui-table-column prop="shiji" label="票据实际到期日" width="120"></ui-table-column>
          <ui-table-column prop="name" label="承兑人名称" width="95"></ui-table-column>
          <ui-table-column prop="bank" label="承兑人对应总行" width="140"></ui-table-column>
          <ui-table-column prop="bankname" label="承兑人开户名称" width="140"></ui-table-column>
          <ui-table-column prop="bankno" label="承兑人开户行行号" width="130"></ui-table-column>
          <ui-table-column prop="name1" label="出票人" width="80"></ui-table-column>
        </ui-table>
      </div>
    </div>
    <!-- 确认意见 -->
    <div>
        <ul class="product-info">
        <li></li>
        <li>确认意见</li>
      </ul>
      <div>
          <div>
              
          </div>
          <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      proinfo: {
        infotype: "票据业务",
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
      intention: {
        amount: "5000 W",
        rate: "4.5 %",
        state: "审核拒绝",
        beizhu: "XXXXXXX",
        orgnization: "XXXX银行",
        name: "蔡徐坤",
        phone: "18888888888"
      },
      tableData: [
        {
          number: "1",
          name: "南京银行"
        },
        {
          number: "2",
          name: "江苏银行"
        },
        {
          number: "3",
          name: "招商银行"
        }
      ],
      peopleData: [
        {
          number: "1",
          name: "南京银行",
          phone: "18888888888",
          chat: ""
        },
        {
          number: "1",
          name: "南京银行",
          phone: "18888888888",
          chat: ""
        },
        {
          number: "1",
          name: "南京银行",
          phone: "18888888888",
          chat: ""
        }
      ],
      ticket: [
        {
          number: "1",
          ticket:"102738990380458",
          jiezhi:"电票",
          type:'XXX',
          origin:"XXX",
        amount:"2,425,254",
             startdate:  '2020-09-09',
             lastdate:"2021-09-09",
             shiji:"2021-09-09",
             name:"李思思",
             bank:"江南农村商业银行",
             bankname:"江南农村商业银行",
             bankno:"421654735685789",
             name1:"张三三"
        },
         {
          number: "1",
          ticket:"102738990380458",
          jiezhi:"电票",
          type:'XXX',
          origin:"XXX",
        amount:"2,425,254",
             startdate:  '2020-09-09',
             lastdate:"2021-09-09",
             shiji:"2021-09-09",
             name:"李思思",
             bank:"江南农村商业银行",
             bankname:"江南农村商业银行",
             bankno:"421654735685789",
             name1:"张三三"
        },
         {
          number: "1",
          ticket:"102738990380458",
          jiezhi:"电票",
          type:'XXX',
          origin:"XXX",
        amount:"2,425,254",
             startdate:  '2020-09-09',
             lastdate:"2021-09-09",
             shiji:"2021-09-09",
             name:"李思思",
             bank:"江南农村商业银行",
             bankname:"江南农村商业银行",
             bankno:"421654735685789",
             name1:"张三三"
        },
      ]
    };
  }
};
</script>
<style scoped>
.product-info {
  display: -webkit-box;
  font-size: 20px;
  position: relative;
}
.info-icon {
  position: absolute;
  right: 60px;
}
.product-info li:nth-child(1) {
  width: 5px;
  background: royalblue;
  margin-right: 10px;
}
.info-wrap {
  display: -webkit-box;
  /* width: 80%; */
  width: 800px;
  margin: 0 auto;
}
.info-wrap div {
  width: 50%;
  background: #f0f0f0;
}
.info-wrap div ul {
  display: -webkit-box;
  position: relative;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.info-wrap div ul li:nth-child(2) {
  position: absolute;
  right: 50px;
}
.info-wrap div:nth-child(1) {
  margin-right: 10px;
}
.info-wrap div:nth-child(2) {
  margin-left: 10px;
}
.info-icon {
  position: absolute;
  right: 60px;
}
.org-list {
  width: 600px;
  margin: 0 auto;
}
.org-list .ui-table {
  width: 500px;
}
.people-list {
  width: 700px;
  margin: 0 auto;
}
.ticket-wrap{
    margin-bottom: 30px;
}
</style>