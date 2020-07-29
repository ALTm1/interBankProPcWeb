<template>
  <div>
    <!-- 面包屑 -->
    <div>
      <ui-breadcrumb separator-class="el-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: 'news' }">员工中心</ui-breadcrumb-item>
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
      <ui-table
    :data="tableData"
    border
    style="width: 100%">
    <ui-table-column
      fixed
      prop="number"
      label="对账编号"
      width="150">
    </ui-table-column>
    <ui-table-column
      prop="name"
      label="客户名称"
      width="120">
    </ui-table-column>
    <ui-table-column
      prop="date"
      label="账单日"
      width="120">
    </ui-table-column>
    <ui-table-column
      prop="city"
      label="市区"
      width="120">
    </ui-table-column>
    <ui-table-column
      prop="address"
      label="地址"
      width="300">
    </ui-table-column>
    <ui-table-column
      prop="zip"
      label="邮编"
      width="120">
    </ui-table-column>
    <ui-table-column
      fixed="right"
      label="操作"
      width="100">
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
  name: "file",
  data() {
    return {
       tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }],
      form: {
        proType: ""
      },
      rules: {
        proType: [
          { required: true, message: "请输入产品类型", trigger: "change" }
        ]
      }
    };
  }
};
</script>
<style scoped>
.bill-form form{
    width: 400px;
    margin: 0 auto;
    border: 1px solid #999;
    padding-top: 20px;
}
.bill-btn{
  text-align: center;
  margin-top: 40px;
}
.bill-btn button{
  width: 200px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  background: skyblue;
  color: #ffffff;
  border: none;
}
</style>