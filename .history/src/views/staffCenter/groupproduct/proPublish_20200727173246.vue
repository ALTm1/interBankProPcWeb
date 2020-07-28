<template>
  <div>
    <!-- 产品发布 -->
    <div class="publish-wrap">
      <div class="publish-type">
        <li>业务类型</li>
        <ul>团购产品</ul>
      </div>
      <div>
        <li>产品名称</li>
        <input type="text" name="name" id placeholder="请输入产品名称" />
      </div>
      <div class="transcation-wrap">
        <li>交易方向</li>
      
          <ul
          class="transcation"
            @click="choose(index)"
            v-for="(item,index) in transcation"
            :key="index"
            :class="index==trans?'sele':'nosele'"
          >{{item}}</ul>
       
      </div>
      <div>
        <li>产品标签</li>
        <div>
          <ui-radio v-model="risk" label="1">高风险</ui-radio>
          <ui-radio v-model="risk" label="2">低风险</ui-radio>
          <ui-radio v-model="risk" label="3">高收益</ui-radio>
        </div>
      </div>
      <div>
        <li>金额</li>
        <input type="text" name="amount" id placeholder="请输入金额" />
        <li>万元</li>
      </div>
      <div>
        <li>利率</li>
        <input type="text" name="rate" id placeholder="请输入利率" />
        <li>%</li>
      </div>
      <div>
        <li>期限</li>
        <input type="text" name="day" id placeholder="请输入期限" />
        <li>天</li>
      </div>
      <div>
        <li>备注</li>
        <input type="text" name="beizhu" id placeholder="请输入备注（选填）" />
      </div>
    </div>
    <!-- 选择联系人 -->
    <div class="people-wrap">
      <div class="people-choose">
        <li>联系人列表</li>
        <li>选择联系人</li>
        <li></li>
      </div>
      <div>
        <ui-table :data="tableData" border>
          <ui-table-column prop="number" label="序号" width="120"></ui-table-column>
          <ui-table-column prop="name" label="联系人姓名" width="180"></ui-table-column>
          <ui-table-column prop="phone" label="联系人电话"></ui-table-column>
        </ui-table>
      </div>
    </div>
    <!-- 属性类型 -->
    <div class="type-wrap">
        <li>
            属性类型
        </li>
        <div>
          <ui-radio v-model="all" label="4">全部可见</ui-radio>
          <ui-radio v-model="all" label="5">指定交易对手</ui-radio>
          <ui-radio v-model="all" label="6">指定好友</ui-radio>
        </div>
    </div>
    <!-- 选择机构 -->
    <div class="orgnizatin-wrap">
      <div class="orgnizatin-choose">
        <li>机构列表</li>
        <li>选择机构</li>
        <li></li>
      </div>
      <div>
        <ui-table :data="orgnization" border>
          <ui-table-column prop="number" label="序号" width="180"></ui-table-column>
          <ui-table-column prop="name" label="机构全称" width="330"></ui-table-column>
        </ui-table>
      </div>
    </div>
    <!-- 提交按钮 -->
    <div class="publish-btn">
      <button @click="publish">提交</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "propublish",
  data() {
    return {
      risk: "1",
      all:"4",
      trans: 0,
      transcation: ["买入", "卖出"],
       tableData: [{
            number: '1',
            name: '张三三',
            phone: '18888888888'
          }, {
             number: '2',
            name: '王小虎',
            phone: '18888888888'
          }, {
            number: '3',
            name: '王小虎',
            phone:'18888888888'
          }],
          orgnization:[
            {
              number:"1",
              name:"南京银行"
            },
            {
              number:"2",
              name:"江苏银行"
            },
            {
              number:"3",
              name:"招商银行"
            },
          ]
    };
  },
  methods: {
    choose(index) {
      this.trans = index;
    },
    publish(){
      this.$router.push('publishsucc')
      
    }
  }
};
</script>
<style scoped>
.transcation-wrap{
  display: -webkit-box;
}
.publish-wrap {
  width: 500px;
  margin: 0 auto;
}
.publish-wrap div {
  margin-top: 20px;
  display: -webkit-box;
}
.publish-wrap div li {
  width: 140px;
}
.publish-wrap div input {
  width: 200px;
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  border: 1px solid #999;
}
.publish-type ul {
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 20px;
  background: darkgray;
}
.transcation ul {
  width: 90px;
  height: 30px;
  line-height: 30px;
  /* text-align: center; */
  border-radius: 20px;
  margin-right: 30px;
}
.sele {
  color:rgba(190,157,98,1);
background:rgba(255,255,255,1);
border:1px solid rgba(190,157,98,1);
}
.nosele {
  border: 1px solid #999;
  color: #999999; 
}
.people-choose ,.orgnizatin-choose{
  display: -webkit-box;
  margin-bottom: 30px;
}
.people-wrap,.type-wrap,.orgnizatin-wrap{
    width: 500px;
    margin: 0 auto;
    padding-top: 50px;
}
.publish-btn{
  text-align: center;
  margin: 30px;
}
.publish-btn button{
  width: 150px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  border: none;
  background: skyblue;
  color: #fff;
  margin: 0 auto;
  cursor: pointer;
}
</style>