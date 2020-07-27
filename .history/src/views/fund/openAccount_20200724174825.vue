<template>
  <div>
    <!-- 已开户 -->
    <div class="open-account" v-if="state=='申请开户成功'">
      <ul>
        <li class="account-left">机构代码</li>
        <li class="account-right">{{code}}</li>
      </ul>
      <ul>
        <li class="account-left">机构名称</li>
        <li class="account-right">{{name}}</li>
      </ul>
      <ul>
        <li class="account-left">机构简称</li>
        <li class="account-right">{{name1}}</li>
      </ul>
      <ul>
        <li class="account-left">机构证件类型</li>
        <li class="account-right">{{type}}</li>
      </ul>
      <ul>
        <li class="account-left">证件号码</li>
        <li class="account-right">{{number}}</li>
      </ul>
      <ul>
        <li class="account-left">证件有效期</li>
        <li class="account-right">{{day}}</li>
      </ul>
      <ul>
        <li class="account-left">发起时间</li>
        <li class="account-right">{{date}}</li>
      </ul>
      <ul>
        <li class="account-left">银行账户</li>
        <li class="account-right">{{account}}</li>
      </ul>
      <ul>
        <li class="account-left">申请状态</li>
        <li class="account-right">{{state}}</li>
      </ul>
    </div>
    <!-- 未开户 -->
    <div class="open-account">
      <li class="account-title">您暂未开通基金账户，填写以下信息完成签约</li>
      <ul>
        <li class="account-left">机构代码</li>
        <ui-input v-model="code1" placeholder="请输入机构代码"></ui-input>
      </ul>
      <ul>
        <li class="account-left">机构名称</li>
        <ui-input v-model="orgname" placeholder="请输入机构名称"></ui-input>
      </ul>
      <ul>
        <li class="account-left">机构简称</li>
        <ui-input v-model="orgname1" placeholder="请输入机构简称"></ui-input>
      </ul>
      <ul>
        <li class="account-left">机构证件类型</li>
        <ui-select v-model="type1" placeholder="请选择">
          <ui-option
            v-for="item in options"     
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></ui-option>
        </ui-select>
      </ul>
      <ul>
        <li class="account-left">证件号码</li>
      </ul>
      <ul>
        <li class="account-left">证件有效期</li>
      </ul>
      <ul>
        <li class="account-left">银行账户</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "openaccount",
  data() {
    return {
      code: "12",
      name: "张三",
      name1: "1000",
      type: "江南银行",
      number: "1234567890877654",
      day: "2020-09-09",
      date: "2020-09-09",
      account: "***********8888",
      // state:"申请开户成功",
      options:[
          {
            value: '身份证',
          label: '身份证'
          }
      ]
    };
  }
};
</script>
<style scoped>
.account-title {
  text-align: center;
  margin-top: 50px;
}
.open-account ul {
  border-radius: 10px;
  background: #f0f0f0;
  height: 40px;
  line-height: 40px;
  width: 80%;
}
.open-account ul li:nth-child(2) {
  padding-right: 30px;
}
.account-left {
  float: left;
}
.account-right {
  float: right;
}
.open-account {
  width: 60%;
  margin: 0 auto;
}
</style>