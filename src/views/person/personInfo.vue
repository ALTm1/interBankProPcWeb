<template>
  <div>
    <!-- 个人信息修改 -->
    <!-- 面包屑 -->
    <div>
      <ui-breadcrumb separator-class="el-icon-arrow-right">
        <ui-breadcrumb-item :to="{ path: 'news' }">个人设置</ui-breadcrumb-item>
        <ui-breadcrumb-item>个人信息修改</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <!-- 个人信息表单 -->
    <div class="info-list">
      <ui-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <ui-form-item label="姓名" prop="name">
          <ui-input v-model="ruleForm.name"></ui-input>
        </ui-form-item>
        <ui-form-item label="登录名" prop="username">
          <ui-input v-model="ruleForm.username"></ui-input>
        </ui-form-item>
         <ui-form-item label="积分" prop="point">
          <ui-input v-model="ruleForm.point"></ui-input>
        </ui-form-item>
        <ui-form-item label="机构简称" prop="organization">
          <ui-input v-model="ruleForm.organization"></ui-input>
        </ui-form-item>
        <ui-form-item label="身份证号码" prop="code">
          <ui-input v-model="ruleForm.code"></ui-input>
        </ui-form-item>
        <ui-form-item label="邮箱" prop="email">
          <ui-input v-model="ruleForm.email"></ui-input>
        </ui-form-item>
        <ui-form-item label="手机号" prop="phone">
          <ui-input v-model="ruleForm.phone"></ui-input>
        </ui-form-item>

        <ui-form-item>
          <ui-button type="primary" @click="submitForm('ruleForm')">修改</ui-button>
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </ui-form-item>
      </ui-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "张三",
        username:"name",
        point:"1000",
        organization:"江南银行",
        code:"2131312321321",
        email:"12331@263.com",
        phone:"1387893268"
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style>
.info-list .ui-input__inner{
    text-align: right;
    border: none;
}
.info-list .ui-form-item__label{
    text-align: left;
}
.info-list .ui-form-item{
    background: #ffffff;
}
.info-list .ui-button--primary{
    width: 300px;
}
</style>
<style scoped>
.info-list{
    width: 500px;
    margin: 0 auto;
    border: 1px solid #999;
    border-radius: 20px;
    padding: 30px;
}
</style>