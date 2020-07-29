<template>
    <div>
        <div class="drop-info">
                下架成功
        </div>
        
        <div class="drop-done">
            <button @click="toMain">完成</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'productdrop',
    methods:{
        toMain(){
            this.$router.push('productlist')
        }
    }
}
</script>
<style scoped>
.drop-done{
    text-align: center;
    margin-top: 100px;
}
.drop-done button{
    width:160px;
height:36px;
left: 36px;
background:rgba(206,40,72,1);
border-radius:18px;
   
    border-radius: 20px;
    font-size:16px;
font-family:SimHei;
font-weight:bold;
color:rgba(255,255,255,1);
    text-align: center;
    border: none;
    cursor: pointer;
}
.drop-info{
    text-align: center;
    margin-top: 100px;
}
</style>