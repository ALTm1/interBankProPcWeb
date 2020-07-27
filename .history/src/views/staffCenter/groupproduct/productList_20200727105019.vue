<template>
  <div>
    <div class="product-wrap">
      <!-- 产品搜索 -->
      <div class="product-search">
        <div class="search-wrap">
          <div>
            <ul>状态</ul>
            <ul v-for="(item,index) in state" :key="index" class="state-wrap">
              <li :class="index==tab?'selected':'nosele'" @click="sele(index)">{{item}}</li>
            </ul>
          </div>
          <div class="product-rate">
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
      <!-- 产品发布 -->
      <div>
        <img src alt />
        <li @click="publish">团购产品发布</li>
      </div>
    </div>
    <!-- 产品列表 -->
    <div class="product-list">
      <ui-table :data="tableData" border>
        <ui-table-column prop="name" label="产品名称" width="120"></ui-table-column>
        <ui-table-column prop="type" label="产品类型" width="120"></ui-table-column>
        <ui-table-column prop="transcation" label="交易方向" width="120"></ui-table-column>
        <ui-table-column prop="orgnization" label="机构全称" width="150"></ui-table-column>
        <ui-table-column prop="rate" label="利率" width="120"></ui-table-column>
        <ui-table-column prop="amount" label="金额" width="120"></ui-table-column>
        <ui-table-column prop="date" label="期限" width="120"></ui-table-column>
        <ui-table-column prop="state" label="产品状态" width="120"></ui-table-column>
        <ui-table-column label="操作" width="120">
          <template slot-scope="scope">
            <ui-button @click="handleClick(scope.row)" type="text" size="small">查看详情</ui-button>
            <ui-button type="text" size="small" v-if="scope.row.state=='生效'"  @click="drop(scope.row)" >下架</ui-button>
          </template>
        </ui-table-column>
      </ui-table>
    </div>
    <div>
        <ui-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
          <span>确认下架？</span>
          <span slot="footer" class="dialog-footer">
            <ui-button @click="dialogVisible = false">取 消</ui-button>
            <ui-button type="primary" @click="toDown">确 定</ui-button>
          </span>
        </ui-dialog>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible:false,
      tab: 0,
      btnid: 0,
      state: ["全部", "生效", "已下架"],
      btn: ["重置", "查询"],
      minrate: "",
      maxrate: "",
      tableData: [
        {
          date: "360 天",
          name: "产品1111",
          type: "团购产品",
          transcation: "买入",
          orgnization: "江南农村商业银行",
          rate: "4.55 %",
          amount: "5,000 W",
          state: "生效"
        },
        {
          date: "360 天",
          name: "产品1111",
          type: "团购产品",
          transcation: "卖出",
          orgnization: "江南农村商业银行",
          rate: "4.55 %",
          amount: "5,000 W",
          state: "已下架"
        },
        {
          date: "360 天",
          name: "产品1111",
          type: "团购产品",
          transcation: "买入",
          orgnization: "江南农村商业银行",
          rate: "4.55 %",
          amount: "5,000 W",
          state: "生效"
        },
        {
          date: "360 天",
          name: "产品1111",
          type: "团购产品",
          transcation: "买入",
          orgnization: "江南农村商业银行",
          rate: "4.55 %",
          amount: "5,000 W",
          state: "生效"
        }
      ]
    };
  },
  methods: {
    // 产品发布
    publish(){
      this.$router.push("propublish");
    },
    drop(row){
      // 产品下架
    this.dialogVisible=true;
    },
    toDown(){
      this.$router.push("productdrop");
    },
    handleClick(row) {
      console.log(row);
      this.$router.push("productdetail");
    },
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
.product-wrap {
  display: -webkit-box;
  margin-top: 50px;
 
}
.product-search {
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
.selected {
  color:rgba(190,157,98,1);
background:rgba(255,255,255,1);
border:1px solid rgba(190,157,98,1);

}
.nosele {
  background:rgba(255,255,255,1);
border:1px solid rgba(191,191,191,1);
color:rgba(153,153,153,1);
}
.state-wrap li {
  width:91px;
height:22px;
line-height: 22px;
border-radius:11px;
  /* border-radius: 20px;
  width: 100px; */
  text-align: center;
  /* height: 30px;
  line-height: 30px; */
  font-size:12px;
font-family:SimHei;
font-weight:400;

}
.selebtn {
  
  
border:1px solid rgba(208,47,80,1);
border-radius:15px;
}
.btn-wrap{
  margin-bottom: 30px;
}
.btn-wrap button {
 
  width:99px;
height:30px;
  line-height: 30px;
  border: none;
 border-radius:15px;
  margin-left: 150px;
  outline: none;
}
.nobtn {
  border: 1px solid #999;
}
.product-rate {
  /* padding: 30px; */
  margin-left: 40px;
  padding-bottom: 20px;
}
.product-rate input {
  font-size:12px;
font-family:SimHei;
font-weight:400;
color:rgba(194,194,194,1);
  outline: none;
  margin-left: 40px;
  width:120px;
height:22px;
background:rgba(255,255,255,1);
border:1px solid rgba(83,83,83,1);
border-radius:11px;
}
.product-list {
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
}
</style>