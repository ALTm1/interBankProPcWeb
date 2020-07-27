<template>
    <div>
        <!-- 已开户 -->
        <div>

        </div>
        <!-- 未开户 -->
        <div v-if="state=='1'">

        </div>
    </div>
</template>
<script>
export default {
    name:'openaccount',
    data(){
        return{
            state:'0',
            
        }
    }
};
</script>
<style scoped>

</style>