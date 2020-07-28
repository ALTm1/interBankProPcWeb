<template>
    <div>
        <!-- 成功 -->
        <div class="success-wrap">
            <li>处理成功</li>
        </div>
        <div class="success-btn">
            <button>完成</button>
        </div>
    </div>
</template>
<script>
export default {
    name:''
}
</script>
<style scoped>
.success-wrap{
    width: 50%;
    text-align: center;
    margin: 0 auto;
    padding-top: 100px;
}
.success-btn{
    text-align: center;
    margin-top: 100px;
}
.success-btn button{
    border: none;
  width: 200px;
  height: 40px;
  line-height: 40px;
  background: skyblue;
  color: #fff;
  margin: 0 auto;
  border-radius: 20px;
  cursor: pointer;
}
</style>