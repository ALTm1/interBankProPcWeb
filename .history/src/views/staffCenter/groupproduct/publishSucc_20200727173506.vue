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
    margin-top: 150px;
}
.success-wrap{
    text-align: center;
    margin-top: 100px;
}
.success-wrap li:nth-child(1){
    margin-bottom: 30px;
    font-size: 28px;
}
.success-btn button{
    width:160px;
height:36px;
background:rgba(206,40,72,1);
border-radius:18px;
 outline: none;
 cursor: pointer;
  /* line-height: 36px; */
  font-size:16px;

  color: #ffffff;
  border: none;
}
</style>