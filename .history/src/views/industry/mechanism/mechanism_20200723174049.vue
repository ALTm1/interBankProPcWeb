<template>
  <div>
    <div class="training-wrap">
      <div class="train-list" v-for="(item,index) in trainList" :key="index">
        <div class="train-left">
          <ul>
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
  width: 80%;
  height: 100px;
  margin: 0 auto;
  /* display: -webkit-box; */
  border-radius: 20px;
  border: 1px solid #999;
  padding: 20px 0;
  text-align: center;
  /* margin-top: 30px; */
}
.train-left{
    float: left;
}
.train-right{
    float: right;
}
.train-list img {
  width: 60px;
  height: 60px;
}
.train-list button {
  cursor: pointer;
  outline: none;
  width: 150px;
  height: 50px;
  color: #ffffff;
  background: skyblue;
  border-radius: 20px;
  border: none;
}
</style>