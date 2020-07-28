<template>
    <div>
         <!-- 产品搜索 -->
      <div class="approval-search">
        <div class="search-wrap">
          <div>
            <ul>状态</ul>
            <ul v-for="(item,index) in state" :key="index" class="state-wrap">
              <li :class="index==tab?'selected':'nosele'" @click="sele(index)">{{item}}</li>
            </ul>
          </div>
          <div class="approval-rate">
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
            tab:0,
            btnid:0,
            state:["全部","待审批","已审批","同业借款"],
            btn: ["重置", "查询"],
        }
    }
}
</script>
<style scoped>
.selected {
  background: skyblue;
  color: #fff;
  border: none;
}
.nosele {
  border: 1px solid #999;
}
.selebtn {
  background: skyblue;
  color: #fff;
}
.nobtn {
  border: 1px solid #999;
}
.approval-search {
  width: 800px;
  margin-left: 200px;
}
.search-wrap {
  border: 1px solid #999;
  border-radius: 20px;
}
.search-wrap div {
  display: -webkit-box;
}
.state-wrap li {
  border-radius: 20px;
  width: 100px;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
.approval-rate{
  padding: 30px;
}
.approval-rate input {
  border-radius: 20px;
  border: 1px solid #999;
  height: 30px;
  line-height: 30px;
  outline: none;
  margin-left: 40px;
}
.btn-wrap button {
  width: 150px;
  height: 40px;
  line-height: 40px;
  border: none;
  border-radius: 20px;
  margin-left: 50px;
  outline: none;
}
</style>