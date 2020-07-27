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
    <div>
      <ui-table header-row-class-name="header" :data="tableData" border>
        <ui-table-column prop="protype" label="产品类型" width="150"></ui-table-column>
        <ui-table-column prop="typw" label="业务类型" width="120"></ui-table-column>
        <ui-table-column prop="name" label="产品名称" width="120"></ui-table-column>
        <ui-table-column prop="orgnization" label="机构全称" width="120"></ui-table-column>
        <ui-table-column prop="rate" label="利率" width="140"></ui-table-column>
        <ui-table-column prop="amount" label="金额" width="140"></ui-table-column>
        
        <ui-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <ui-button @click="handleClick(scope.row)" type="text" size="small">下载</ui-button>
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
          date: "2016-05-02",
          name: "产品111",
          orgnization: "江南农村商业银行",
          type: "闲钱参团",
          transcation: "上海市普陀区金沙江路 1518 弄",
          rate: "4.55 %",
          amount: "5,000 W",
          day: "360 天"
        },
        {
          date: "2016-05-02",
          name: "产品111",
          orgnization: "江南农村商业银行",
          type: "闲钱参团",
          transcation: "上海市普陀区金沙江路 1518 弄",
          rate: "4.55 %",
          amount: "5,000 W",
          day: "360 天"
        },
        {
          date: "2016-05-02",
          name: "产品111",
          orgnization: "江南农村商业银行",
          type: "闲钱参团",
          transcation: "上海市普陀区金沙江路 1518 弄",
          rate: "4.55 %",
          amount: "5,000 W",
          day: "360 天"
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
    }
  }
};
</script>
<style scoped>
.selected {
  background: skyblue;
  color: #fff;
  border: none;
}
.nosele {
  border: 1px solid #999;
}
.selebtn {
  background: skyblue;
  color: #fff;
}
.nobtn {
  border: 1px solid #999;
}
.approval-search {
  width: 800px;
  margin-left: 200px;
}
.search-wrap {
  border: 1px solid #999;
  border-radius: 20px;
}
.search-wrap div {
  display: -webkit-box;
}
.state-wrap li {
  border-radius: 20px;
  width: 100px;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
.approval-rate {
  padding: 30px;
}
.approval-rate input {
  border-radius: 20px;
  border: 1px solid #999;
  height: 30px;
  line-height: 30px;
  outline: none;
  margin-left: 40px;
}
.btn-wrap button {
  width: 150px;
  height: 40px;
  line-height: 40px;
  border: none;
  border-radius: 20px;
  margin-left: 50px;
  outline: none;
}
</style>