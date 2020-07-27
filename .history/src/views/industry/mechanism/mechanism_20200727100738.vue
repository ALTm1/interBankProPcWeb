<template>
  <div>
    <div class="training-wrap">
      <div class="train-list" v-for="(item,index) in trainList" :key="index">
        <div class="train-left">
          <ul class="img-wrap">
            <img :src="item.imgUrl" alt />
          </ul>
          <ul>
            <li>{{item.title}}</li>
            <li>发布时间：{{item.time}}</li>
          </ul>
        </div>

        <div class="train-right">
          <button @click="toDetail(index)">查看详情</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
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
 
  border: 1px solid #999;
  /* padding: 20px 0; */
  /* text-align: center; */
 
  padding: 20px;
}
.train-left{
    float: left;
    display: -webkit-box;
}
.img-wrap{
    width: 60px;
    height: 60px;
    background: rosybrown;
}
.train-right{
    float: right;
    line-height: 100px;
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
</style>