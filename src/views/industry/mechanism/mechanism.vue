<template>
  <div>
    <div class="training-wrap">
      <div class="train-list" v-for="(item,index) in trainList" :key="index">
        <div class="train-left">
          <ul class="img-wrap">
            <img :src="item.imgUrl" alt />
          </ul>
          <ul class="train-content">
            <li>{{item.title}}</li>
            <li>发布时间：{{item.time}}</li>
          </ul>
        </div>

        <div class="train-right">
          <button @click="toDetail(index)">查看详情</button>
        </div>
      </div>
    </div>
     <div class="page-wrap">
      <ui-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        layout="total, prev, pager, next, jumper,slot"
        :total="4"
      >
      <template>
          <!-- <span>首页</span> -->
          <span>当前第{{currentPage4}}页</span>
          <!-- <span>尾页</span> -->
      </template>
      </ui-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 1,
      trainList: [
        {
          title: "机构动态标题机构动态标题机构动态标题",
          imgUrl: "",
          time: "2020-09-10  19：00"
        },
        {
          title: "机构动态标题机构动态标题机构动态标题",
          imgUrl: "",
          time: "2020-09-10  19：00"
        }
      ]
    };
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick(row){
      this.$router.push('leaguedetail')
    },
    toDetail(index) {
      this.$router.push("mechanismdetail");
    }
  }
};
</script>
<style scoped>
.training-wrap {
  width: 80%;
  margin: 0 auto;
}
.train-list {
  width:892px;
height:100px;
background:rgba(255,254,253,1);
border-radius:4px;
  margin: 0 auto;
 margin-bottom: 13px;
}
.train-left{
    float: left;
    display: -webkit-box;
}
.img-wrap{
    width: 60px;
    height: 60px;
    background: rosybrown;
    margin-left: 26px;
}
.train-right{
    float: right;
    line-height: 100px;
    margin-right: 34px;
}
.train-list img {
  width: 60px;
  height: 60px;
}
.train-list button {
   width: 99px;
  height: 30px;
  border: 1px solid rgba(208, 47, 80, 1);
  border-radius: 15px;
  font-size: 16px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(208, 47, 80, 1);
  background-color: #fff;
  /* margin: 30px 0; */
  outline: none;
  cursor: pointer;
}
.train-content li:nth-child(1){
    font-size:18px;
font-family:SimHei;
font-weight:400;
color:rgba(40,40,40,1);
}
.train-content li:nth-child(2){
font-size:14px;
font-family:SimHei;
font-weight:400;
color:rgba(153,153,153,1);
margin-top: 14px;
}
.page-wrap{
  text-align: center;
  margin-top: 50px;
}
</style>