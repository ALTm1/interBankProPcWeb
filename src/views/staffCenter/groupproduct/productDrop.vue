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
    width: 200px;
    height: 40px;
    border-radius: 20px;
    background: darkcyan;
    color: #fff;
    text-align: center;
    border: none;
    cursor: pointer;
}
.drop-info{
    text-align: center;
    margin-top: 100px;
}
</style>