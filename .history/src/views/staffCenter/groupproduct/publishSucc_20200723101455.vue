<template>
    <div>
        <!-- 发布成功页面 -->
        <div class="success-wrap">
            <li>发布成功</li>
            <li>您可进入产品中心查看已发布产品</li>
        </div>
        <div class="success-btn">
            <button>完成</button>
        </div>
    </div>
</template>
<script>
export default {
    name:"publishsucc"
}
</script>
<style scoped>
.success-btn{
    text-align: center;
}
.success-wrap{
    text-align: center;
    margin-top: 50px;
}
.success-wrap li:nth-child(1){
    margin-bottom: 30px;
}
.success-btn button{
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