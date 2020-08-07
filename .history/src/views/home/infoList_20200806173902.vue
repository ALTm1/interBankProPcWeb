<template>
  <div>
    <div class="infolist-wrap">
      <div v-for="(info,index) in infoList" :key="index">
        <li>{{info.name}}</li>
        <li>{{info.rate}}</li>
        <li>预期收益</li>
        <img src="../../assets/image/line.png" alt />
        <li>{{info.content}}</li>
        <button>查看详情</button>
      </div>
    </div>
    <div>
      <div class="img-wrap">
        <div class="card-wrap">
          <ui-carousel :interval="4000" type="card" height="301px">
            <ui-carousel-item v-for="(item,index) in card" :key="index">
              <img :src="item.url" alt srcset />
            </ui-carousel-item>
          </ui-carousel>
        </div>
        <div class="code-wrap">
            <img src="../../assets/image/code.png" alt />
        </div>
        <!-- <img src="../../assets/image/animation.png" alt=""> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      card: [
        {
          url: require("../../assets/image/animation.png")
        },
        {
          url: require("../../assets/image/animation.png")
        },
        {
          url: require("../../assets/image/animation.png")
        }
      ],
      infoList: [
        {
          name: "产品名称产品名称",
          rate: "3.45%",
          content: "文案内容文案内容文案内容文案内容文案内容"
        },
        {
          name: "产品名称产品名称",
          rate: "3.45%",
          content: "文案内容文案内容文案内容文案内容文案内容"
        },
        {
          name: "产品名称产品名称",
          rate: "3.45%",
          content: "文案内容文案内容文案内容文案内容文案内容"
        },
        {
          name: "产品名称产品名称",
          rate: "3.45%",
          content: "文案内容文案内容文案内容文案内容文案内容"
        }
      ]
    };
  }
};
</script>
<style scoped>
.infolist-wrap {
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  padding: 60px 80px 80px 80px;
}
.infolist-wrap div {
  text-align: center;
  width: 20%;
  /* height:390px; */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 60px 0px rgba(8, 20, 35, 0.2);
  border-radius: 10px;
  margin-right: 40px;
}
.infolist-wrap div:hover {
  margin-top: -30px;
  cursor: pointer;
  box-shadow: 0px 0px 60px 0px #f0f0f0 ;
}
/* .infolist-wrap div:nth-child(1),.infolist-wrap div:nth-child(2),.infolist-wrap div:nth-child(3){
    margin-right: 40px;
} */
.infolist-wrap div li:nth-child(1) {
  font-size: 20px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-top: 44px;
}
.infolist-wrap div li:nth-child(2) {
  font-size: 40px;
  font-weight: 400;
  color: rgba(206, 40, 72, 1);
  margin-top: 38px;
}
.infolist-wrap div li:nth-child(3) {
  margin-top: 18px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 30px;
}
.infolist-wrap div img {
  width: 60px;
  height: 8px;
  margin: 30px 0;
}
.infolist-wrap div li:nth-child(5) {
  font-size: 14px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 26px;
  width: 167px;
  margin: 0 auto;
}
.infolist-wrap div:nth-child(2n + 1) {
  border-top: 4px solid #ce2848;
}
.infolist-wrap div:nth-child(2n) {
  border-top: 4px solid #be9d62;
}
.infolist-wrap div button {
  border: none;
  width: 180px;
  height: 40px;
  color: #fff;
  border-radius: 20px;
  margin-bottom: 39px;
  margin-top: 40px;
}
.infolist-wrap div:nth-child(2n + 1) button {
  background: #ce2848;
}
.infolist-wrap div:nth-child(2n) button {
  background: #be9d62;
}
.img-wrap {
  width: 100%;
  display: -webkit-box;
  padding: 0 30px;
}
.card-wrap ,.code-wrap{
  width: 50%;
}
.code-wrap img{
    width: 126px;
}
</style>