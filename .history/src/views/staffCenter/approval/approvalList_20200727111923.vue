<template>
  <div>
    <!-- 产品搜索 -->
    <div class="approval-search">
      <div class="search-wrap">
        <div>
          <ul>状态</ul>
          <ul v-for="(item,index) in state" :key="index" class="state-wrap">
            <li :class="index==tab?'selected':'nosele'" @click="sele(index)">{{item}}</li>
          </ul>
        </div>
        <div class="approval-rate">
          <li>利率</li>
          <input type="number" placeholder="请输入最小利率" v-model="minrate" />——
          <input type="number" placeholder="请输入最大利率" v-model="maxrate" />
        </div>
        <div class="btn-wrap">
          <button
            v-for="(btn,index) in btn"
            :key="index"
            :class="index==btnid?'selebtn':'nobtn'"
            @click="selebtn(index)"
          >{{btn}}</button>
        </div>
      </div>
    </div>
    <div class="approval-table">
      <ui-table header-row-class-name="header" :data="tableData" border>
        <ui-table-column prop="protype" label="产品类型" width="150"></ui-table-column>
        <ui-table-column prop="type" label="业务类型" width="120"></ui-table-column>
        <ui-table-column prop="name" label="产品名称" width="120"></ui-table-column>
        <ui-table-column prop="orgnization" label="机构全称" width="120"></ui-table-column>
        <ui-table-column prop="rate" label="利率" width="140"></ui-table-column>
        <ui-table-column prop="amount" label="金额" width="140"></ui-table-column>
        <ui-table-column prop="day" label="期限" width="140"></ui-table-column>
        <ui-table-column prop="date" label="发布日期" width="140"></ui-table-column>
        <ui-table-column prop="state" label="产品状态" width="140"></ui-table-column>
        <ui-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <ui-button  @click="toDetail(scope.row)"  type="text" size="small" v-if="scope.row.state=='待审批'">审批</ui-button>
            <ui-button @click="handleClick(scope.row)" type="text" size="small" v-if="scope.row.state=='已审批'">详情</ui-button>
          </template>
        </ui-table-column>
      </ui-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "approvallist",
  data() {
    return {
      tab: 0,
      btnid: 0,
      state: ["全部", "待审批", "已审批", "同业借款"],
      btn: ["重置", "查询"],
      minrate: "",
      maxrate: "",
      tableData: [
        {
          protype:"同业资金",
          type:"同业存放",
          date: "2016-05-02",
          name: "资金融入",
          orgnization: "江南农村商业银行",
          rate: "4.55 %",
          amount: "5,000 W",
          day: "360 天",
          state:"待审批"
        },
        {
          protype:"同业资金",
          type:"同业存放",
          date: "2016-05-02",
          name: "资金融入",
          orgnization: "江南农村商业银行",
          rate: "4.55 %",
          amount: "5,000 W",
          day: "360 天",
          state:"待审批"
        },
        {
          protype:"同业资金",
          type:"同业存放",
          date: "2016-05-02",
          name: "资金融入",
          orgnization: "江南农村商业银行",
          rate: "4.55 %",
          amount: "5,000 W",
          day: "360 天",
          state:"已审批"
        },
       
      ]
    };
  },
  methods: {
    sele(index) {
      this.tab = index;
    },
    selebtn(index) {
      this.btnid = index;
      if (index == 0) {
        //   点击重置
        this.tab = 0;
        this.minrate = "";
        this.maxrate = "";
      } else {
        //   点击查询
        if (this.maxrate < this.minrate) {
          this.minrate = "";
          this.maxrate = "";
          alert("最大利率不得小于最小利率");
        }
      }
    },
    toDetail(row){
      // 跳转到详情页
      this.$router.push('approvaldetail')
    }
  }
};
</script>
<style scoped>
.selected {
 color:rgba(190,157,98,1);
background:rgba(255,255,255,1);
border:1px solid rgba(190,157,98,1);
  /* background: skyblue;
  color: #fff;
  border: none; */
}
.nosele {
  border: 1px solid #999;
  color: #999999;
}
.selebtn {
 color: #D02F50;
  border:1px solid rgba(208,47,80,1);
}
.nobtn {
  border:1px solid rgba(190,157,98,1);
  color: #BE9D62;
}
.approval-search {
  width: 800px;
  margin: 0 auto;
  margin-top: 50px;
}
.search-wrap {
  border: 1px solid #999;
  border-radius: 20px;
}
.search-wrap div {
  display: -webkit-box;
}
.state-wrap li {

  text-align: center;
  line-height: 22px;
   width:91px;
height:22px;
border-radius:11px;
font-size:12px;
font-family:SimHei;
font-weight:400;
}
.approval-rate {
  /* padding-left: 30px; */
  padding-left: 20px;
  margin: 20px;
}
.approval-rate input {
 text-align: center;
  line-height: 22px;
  outline: none;
  margin-left: 40px;
  width:120px;
height:22px;
background:rgba(255,255,255,1);
border:1px solid rgba(83,83,83,1);
border-radius:11px;
font-size:12px;
font-family:SimHei;
font-weight:400;
color:rgba(194,194,194,1);
}
.btn-wrap{
  margin-bottom: 30px;
}
.btn-wrap button {
  width:99px;
  background-color: #fff;
height:30px;
border-radius:15px;
  /* line-height: 30px; */
  margin-left: 150px;
  outline: none;
}
.approval-table{
  margin: 50px 60px 0 60px;
}
</style>