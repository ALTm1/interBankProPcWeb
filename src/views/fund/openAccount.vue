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
        <input v-model="code1" placeholder="请输入机构代码" class="account-right"/>

      </ul>
      <ul>
        <li class="account-left">机构名称</li>
        <input v-model="orgname" placeholder="请输入机构名称" class="account-right" />
      </ul>
      <ul>
        <li class="account-left">机构简称</li>
        <input v-model="orgname1" placeholder="请输入机构简称" class="account-right" />
      </ul>
      <ul>
        <li class="account-left">机构证件类型</li>
        <ui-select v-model="type1" placeholder="请选择" class="account-right">
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
        <input v-model="number1" placeholder="请输入证件号码" class="account-right" />
      </ul>
      <ul>
        <li class="account-left">证件有效期</li>
        <ui-date-picker v-model="day1" type="date" placeholder="请选择" class="account-right"></ui-date-picker>
      </ul>
      <ul>
        <li class="account-left">银行账户</li>
        <input v-model="account1" placeholder="请输入银行账号" class="account-right" />
      </ul>
      <div class="account-btn">
        <button>开户</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "openaccount",
  data() {
    return {
      code: "12",
      code1: "",
      orgname: "",
      orgname1: "",
      type1: "",
      name: "张三",
      name1: "1000",
      type: "江南银行",
      number1: "",
      account1: "",
      day1:"",
      number: "1234567890877654",
      day: "2020-09-09",
      date: "2020-09-09",
      account: "***********8888",
       state:"申请开户成功",
      options: [
        {
          value: "身份证",
          label: "身份证"
        }
      ]
    };
  }
};
</script>
<style scoped>
.open-account input{
    width: 200px;
    text-align: right;
    background: #f0f0f0;
  line-height: 2;
  border: none;
  padding-right: 30px;
  outline: none;
  font-size: 17px;
}
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
.account-btn{
  text-align: center;
  margin: 30px 0;
}
.account-btn button{
   width:160px;
height:36px;
background:rgba(206,40,72,1);
border-radius:18px;
 outline: none;
 cursor: pointer;
  /* line-height: 36px; */
  font-size:16px;

  color: #ffffff;
  border: none;
}
</style>