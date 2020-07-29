<template>
    <div>
         <!-- 产品搜索 -->
      <div class="product-search">
        <div class="search-wrap">
          <div>
            <ul>状态</ul>
            <ul v-for="(item,index) in state" :key="index" class="state-wrap">
              <li :class="index==tab?'selected':'nosele'" @click="sele(index)">{{item}}</li>
            </ul>
          </div>
          <div class="product-rate">
            <li>利率</li>
            <input type="number" placeholder="请输入最小利率" v-model="minrate" />——
            <input type="number" placeholder="请输入最大利率" v-model="maxrate" />
          </div>
          <div class="btn-wrap">
            <button
              v-for="(btn,index) in btn"
              :key="index"
              :class="index==btnid?'selebtn':'nobtn'"
              @click="selebtn(index)"
            >{{btn}}</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name:'approvallist',
    data(){
        return{
            state:["全部","","",""]
        }
    }
}
</script>
<style scoped>

</style>