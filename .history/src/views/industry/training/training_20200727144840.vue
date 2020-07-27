<template>
  <div>
    <div class="training-wrap">
      <div class="train-list" v-for="(item,index) in trainList" :key="index">
        <div class="title-wrap">
          <ul class="img-wrap">
            <img :src="item.imgUrl" alt />
          </ul>

          <ul class="content-wrap">
            <li>{{item.title}}</li>
            <li>发布时间：{{item.time}}</li>
          </ul>
        </div>
        <div class="title-right">
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
          title: "培训标题培训标题培训标题",
          imgUrl: "",
          time: "2020-09-10  19：00"
        },
        {
          title: "培训标题培训标题培训标题",
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
      this.$router.push("trainDetail");
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
.title-wrap {
  float: left;
}
.title-right{
  float: right;
  margin-right: 34px;
  line-height: 100px;
}
.train-list img {
  width: 60px;
  height: 60px;
  margin-left: 30px;
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
.img-wrap {
  float: left;
  width: 60px;
  height: 60px;
  background: cornflowerblue;
  margin-left: 30px;
}
.content-wrap{
  float: right;
}
.content-wrap li:nth-child(1){
  font-size:18px;
font-family:SimHei;
font-weight:400;
color:rgba(40,40,40,1);
}
.content-wrap li:nth-child(2){
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