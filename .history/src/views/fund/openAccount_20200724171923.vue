<template>
    <div>
        <!-- 已开户 -->
        <div class="open-account">
            <ul>
                <li class="account-left"></li>
                <li class="account-right"></li>
            </ul>
            <ul>
                <li class="account-left"></li>
                <li class="account-right"></li>
            </ul>
            <ul>
                <li class="account-left"></li>
                <li class="account-right"></li>
            </ul>
            <ul>
                <li class="account-left"></li>
                <li class="account-right"></li>
            </ul>
            <ul>
                <li class="account-left"></li>
                <li class="account-right"></li>
            </ul>
            <ul>
                <li class="account-left"></li>
                <li class="account-right"></li>
            </ul>
            <ul>
                <li class="account-left"></li>
                <li class="account-right"></li>
            </ul>
            <ul>
                <li class="account-left"></li>
                <li class="account-right"></li>
            </ul>
            <ul>
                <li class="account-left"></li>
                <li class="account-right"></li>
            </ul>
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
.open-account ul{
    border-radius: 10px;
    background: #f0f0f0;
    height: 30px;
    line-height: 30px;
}
.account-left{
    float: left;
}
.account-right{
    float: right;
}
</style>