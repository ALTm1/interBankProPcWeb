<template>
  <div>
    <div class="training-wrap">
      <div class="train-list" v-for="(item,index) in trainList" :key="index">
        <div class="title-wrap">
          <ul class="img-wrap">
            <img :src="item.imgUrl" alt />
          </ul>

          <ul>
            <li>{{item.title}}</li>
            <li>发布时间：{{item.time}}</li>
          </ul>
        </div>
        <div>
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
  width: 600px;
  margin: 0 auto;
  display: -webkit-box;
  border-radius: 20px;
  border: 1px solid #999;
  padding: 20px 0;
  text-align: center;
  margin-top: 30px;
}
.title-wrap {
  display: -webkit-box;
}
.train-list img {
  width: 60px;
  height: 60px;
  margin-left: 30px;
}
.train-list button {
  cursor: pointer;
  outline: none;
  width: 150px;
  height: 40px;
  line-height: 40px;
  color: #ffffff;
  background: skyblue;
  border-radius: 20px;
  border: none;
}
.img-wrap {
  width: 60px;
  height: 60px;
  background: cornflowerblue;
  margin-left: 30px;
}
</style>