<template>
  <div>
    <!-- 会议 -->
    <div class="meeting-wrap">
      <div class="meeting-list" v-for="(meet,index) in meetList" :key="index">
        <div class="meeting-left">
          <ul>
            <img src alt />
          </ul>

          <div>
            <li>{{meet.title}}</li>
            <li>发布时间：{{meet.time}}</li>
          </div>
        </div>
        <div class="meeting-right">
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
      meetList: [
        {
          imgUrl: "",
          title: "会议标题会议标题会议标题",
          time: "2019-02-23"
        },
        {
          imgUrl: "",
          title: "会议标题会议标题会议标题",
          time: "2019-02-23"
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
      this.$router.push("meetdetail");
    }
  }
};
</script>
<style scoped>
.meeting-wrap {
  width: 80%;
  margin: 0 auto;
}
.meeting-list {
  width: 892px;
  height: 100px;
  background: rgba(255, 254, 253, 1);
  border-radius: 4px;
  margin: 0 auto;
  /* border: 1px solid #999; */
  margin-bottom: 30px;
}

.meeting-left {
  float: left;
  width: 600px;
}
.meeting-left ul {
  width: 60px;
  height: 60px;
  background: rosybrown;
  float: left;
  margin-left: 30px;
  margin-right: 30px;
}

.meeting-left div li:nth-child(1) {
  font-size: 18px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(40, 40, 40, 1);
  margin-top: 26px;
}
.meeting-left div li:nth-child(2) {
  font-size: 14px;
  font-family: SimHei;
  font-weight: 400;
  margin-top: 14px;
  color: rgba(153, 153, 153, 1);
}

.meeting-right {
  float: right;
  margin-right: 30px;
  line-height: 100px;
}
.meeting-list img {
  width: 60px;
  height: 60px;
}
.meeting-list button {
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
.page-wrap{
  text-align: center;
  margin-top: 50px;
}
</style>