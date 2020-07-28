<template>
  <div>
    <div class="fund-sele">
      <!-- 筛选 -->
      <li class="fund-title">基金筛选</li>
      <ul v-for="(item,index) in type" :key="index">
        <li :class="index==tid?'selected':'nosele'" @click="sele(index)">{{item}}</li>
      </ul>
      <input type="text" placeholder="请输入基金名称" v-model="name" />
      <input type="text" placeholder="请输入基金代码" v-model="code" />
    </div>
    <!-- table -->
    <div class="fund-table">
      <ui-table :data="tableData" border>
        <ui-table-column prop="code" label="基金代码" width="120"></ui-table-column>
        <ui-table-column prop="name" label="基金名称" width="120"></ui-table-column>
        <ui-table-column prop="rate7" label="7日年化收益率" width="120"></ui-table-column>
        <ui-table-column prop="rate" label="万份收益（元）" width="150"></ui-table-column>
        <ui-table-column prop="company" label="发行公司" width="120"></ui-table-column>
        <ui-table-column prop="risk" label="风险等级" width="120"></ui-table-column>
        <ui-table-column prop="amount" label="单日累计购买限额" width="120"></ui-table-column>
        <ui-table-column label="操作" width="120">
          <template slot-scope="scope">
            <ui-button @click="todetail(scope.row)" type="text" size="small">详情</ui-button>
            <ui-button type="text" size="small" @click="buy(scope.row)">申购</ui-button>
          </template>
        </ui-table-column>
      </ui-table>
    </div>
    <!-- 申购的弹出框 -->
    <ui-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div>
        <span>基金购买</span>
        <div slot="footer" >
            <ul></ul>
            <ul></ul>
        </div>
        <div>
            <input type="text">
            <input type="text">
        </div>
        <span slot="footer" class="dialog-footer">
          <ui-button @click="dialogVisible = false">取 消</ui-button>
          <ui-button type="primary" @click="dialogVisible = false">确 定</ui-button>
        </span>
      </div>
    </ui-dialog>
  </div>
</template>
<script>
export default {
  name: "fundproduct",
  data() {
    return {
      name: "",
      code: "",
      tid: 0,
      type: ["货币型", "债券型"],
      tableData: [
        {
          code: "000001",
          name: "XXX天天理财",
          rate7: "1，6225",
          rate: "0.42",
          company: "XXX基金公司",
          risk: "低风险",
          amount: "500000"
        },
        {
          code: "000001",
          name: "XXX天天理财",
          rate7: "1，6225",
          rate: "0.42",
          company: "XXX基金公司",
          risk: "低风险",
          amount: "500000"
        },
        {
          code: "000001",
          name: "XXX天天理财",
          rate7: "1，6225",
          rate: "0.42",
          company: "XXX基金公司",
          risk: "低风险",
          amount: "500000"
        }
      ],
      dialogVisible: false
    };
  },
  methods: {
    sele(index) {
      this.tid = index;
    },
    todetail(row) {
      // 跳转到详情页
      this.$router.push("/index/funddetail");
    },
    buy(row) {
      //弹出框
      this.dialogVisible = true;
    }
  }
};
</script>
<style scoped>
.fund-sele {
  border-radius: 20px;
  background: #f0f0f0;
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
}
.fund-title {
  margin: 25px 0 0 20px;
}
.fund-sele,
.fund-sele ul {
  display: -webkit-box;
}
.fund-sele ul li {
  width: 100px;
  height: 25px;
  line-height: 25px;
  border-radius: 20px;
  text-align: center;
  margin-top: 10px;
}
.fund-sele input {
  width: 180px;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  border: none;
  text-align: center;
  margin: 20px;
  outline: none;
}
.nosele {
  border: 1px solid #999;
}
.selected {
  background: skyblue;
  color: #ffffff;
}
.fund-table {
  width: 991px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>