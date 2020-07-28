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
     width:160px;
height:36px;
background:rgba(206,40,72,1);
border-radius:18px;
  border: none;

  line-height: 36px;
 
 font-size:16px;
font-weight:bold;
color:rgba(255,255,255,1);
  margin: 0 auto;

  cursor: pointer;
}
</style>