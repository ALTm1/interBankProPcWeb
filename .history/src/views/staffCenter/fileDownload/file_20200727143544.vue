<template>
  <div>
    <!-- 面包屑 -->
    <div class="file-title">
       <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">员工中心</ui-breadcrumb-item>
        <ui-breadcrumb-item>对账文件下载</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <!-- 查询条件 -->
    <div class="bill-form">
      <ui-form ref="ruleForm" :model="form" :rules="rules" label-width="100px">
        <ui-form-item label="月账单" prop="proType">
          <ui-select v-model="form.proType" placeholder="请选择">
            <ui-option label="2019-09" value="选项一"></ui-option>
            <ui-option label="2019-10" value="选项二"></ui-option>
            <ui-option label="2019-11" value="选项三"></ui-option>
            <ui-option label="2019-12" value="选项三"></ui-option>
          </ui-select>
        </ui-form-item>
      </ui-form>
    </div>

    <div class="bill-btn">
      <button>查询</button>
    </div>
    <!-- 表格 -->
    <div class="bill-table">
      <ui-table header-row-class-name="header" :data="tableData" border>
        <ui-table-column prop="number" label="对账编号" width="150"></ui-table-column>
        <ui-table-column prop="name" label="客户名称" width="120"></ui-table-column>
        <ui-table-column prop="date" label="账单日" width="120"></ui-table-column>
        <ui-table-column prop="file" label="对账文件" width="120"></ui-table-column>
        <ui-table-column prop="state" label="对账状态" width="140"></ui-table-column>
        <ui-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <ui-button @click="handleClick(scope.row)" type="text" size="small">下载</ui-button>
          </template>
        </ui-table-column>
      </ui-table>
    </div>
     <!-- 分页 -->
    <div class="page-wrap">
      <ui-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        layout="total, prev, pager, next, jumper,slot"
        :total="4"
      >
      <template>
          <!-- <span>首页</span> -->
          <span>当前第{{currentPage4}}页</span>
          <!-- <span>尾页</span> -->
      </template>
      </ui-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "file",
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 1,
      tableData: [
        {
          date: "2016-05-02",
          name: "南京银行",
          number: "82394789057",
          file: "对账文件.pdf",
          state: "已对账"
        },
        {
          date: "2016-05-04",
          name: "南京银行",
          number: "82394789057",
          file: "对账文件.pdf",
          state: "已对账"
        },
        {
          date: "2016-05-01",
          name: "南京银行",
          number: "82394789057",
          file: "对账文件.pdf",
          state: "已对账"
        },
        {
          date: "2016-05-03",
          name: "南京银行",
          number: "82394789057",
          file: "对账文件.pdf",
          state: "已对账"
        }
      ],
      form: {
        proType: ""
      },
      rules: {
        proType: [
          { required: true, message: "请输入产品类型", trigger: "change" }
        ]
      }
    };
  },
  methods:{
    handleClick(row){
      
    }
  }
};
</script>
<style>
.ui-table th,
.ui-table tr {
  background: unset;
}
.bill-table .ui-table .header {
  background: cornflowerblue;
  color: #333;
}
</style>
<style scoped>
.bill-form form {
  width: 400px;
  margin: 0 auto;
  border: 1px solid #999;
  padding-top: 20px;
}
.bill-btn {
  text-align: center;
  margin-top: 40px;
}
.bill-btn button {
  width:160px;
height:36px;
background:rgba(206,40,72,1);
border-radius:18px;
 outline: none;
 cursor: pointer;
  line-height: 36px;
  font-size:16px;
  font-size:16px;
  color: #ffffff;
  border: none;
}
.bill-btn {
  text-align: center;
}
.bill-btn .ui-table--border {
  width: 600px;
}
.bill-table {
  margin-top: 50px;
}
.bill-table .ui-table {
  width: 800px;
  margin: 0 auto;
}
.file-title{
  margin: 30px;
}
</style>