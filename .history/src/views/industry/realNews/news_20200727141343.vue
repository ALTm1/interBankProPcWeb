<template>
  <div>
    <!-- 舆情信息 -->
    <div class="realnews-wrap">
      <div class="news-list" v-for="(list,index) in infoList" :key="index">
        <div class="news-content">
          <li>{{list.title}}</li>
          <li>{{list.time}}</li>
        </div>
        <div class="news-btn">
          <button @click="toDetail(index)">查看详情</button>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <div>
      <ui-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></ui-pagination>
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
        currentPage4: 4,
      infoList: [
        {
          title: "舆情标题舆情标题舆情标题",
          time: "2020-03-23"
        },
        {
          title: "舆情标题舆情标题舆情标题",
          time: "2020-03-23"
        }
      ]
    };
  },
  methods: {
    toDetail(index) {
      this.$router.push("newsdetail");
    },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
};
</script>
<style scoped>
.news-list {
  width: 892px;
  height: 100px;
  height: 80px;
  margin: 0 auto;
  border-radius: 20px;
  background: #fffefd;
  margin-top: 30px;
}
.news-list {
  padding: 30px;
}
.news-content {
  float: left;
}
.news-btn {
  float: right;
}
.news-list li:nth-child(1) {
  font-size: 30px;
}
.news-list li:nth-child(2) {
  font-size: 26px;
}
.news-list button {
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