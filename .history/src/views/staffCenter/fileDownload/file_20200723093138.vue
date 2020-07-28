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
      <ui-form-item label="月账单" prop="proType">
        <ui-select v-model="form.proType" placeholder="请选择">
          <ui-option label="2019-09" value="选项一"></ui-option>
          <ui-option label="2019-10" value="选项二"></ui-option>
          <ui-option label="2019-11" value="选项三"></ui-option>
          <ui-option label="2019-12" value="选项三"></ui-option>
        </ui-select>
      </ui-form-item>
    <!-- 表格 -->
    </div>
</template>
<script>
export default {
    name:'file',
    data(){
      return{
        form: {
        proType: '',
        
      },
      rules: {
        proType: [
          { required: true, message: '请输入产品类型', trigger: 'change' }
        ],
       
      },
      }
    }
}
</script>
<style scoped>

</style>