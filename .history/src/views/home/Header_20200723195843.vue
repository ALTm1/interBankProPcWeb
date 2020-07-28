<template>
    <div>
        <!-- 轮播图 -->
         <ui-carousel height="400px">
      <ui-carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src="item.imgUrl" alt="">
        <!-- <h3 class="small">{{ item.title }}</h3> -->
      </ui-carousel-item>
    </ui-carousel>
    <!-- 消息滚动条 -->
    <div class="news-scroll">
     <ui-carousel height="30px" direction="vertical" :autoplay="true">
    <ui-carousel-item v-for="item in list" :key="item">
      <h3 class="medium">{{ item.title }}</h3>
    </ui-carousel-item>
  </ui-carousel>
    </div>
    </div>
</template>
<script>
export default {
    name:'header',
    data(){
        return{
            imgList:[
                {
                    imgUrl:require("../../assets/image/header.png"),
                    title:'移动金融·创智未来'
                },
                {
                    imgUrl:require("../../assets/image/header.png"),
                    title:'移动金融·创智未来'
                },
                {
                    imgUrl:require("../../assets/image/header.png"),
                    title:'移动金融·创智未来'
                },
                {
                    imgUrl:require("../../assets/image/header.png"),
                    title:'移动金融·创智未来'
                },
            ],
            list:[
                {
                    title:'移动金融·创智未来'
                },
                {
                    title:'构舆情信息标题'
                },
                {
                    title:'业务信息推荐展示业务信息推荐展示业务信息推荐展示业务信息推荐展示业务信息推荐展示'
                },
            ]
        }
    },
     mounted(){
        this.scrollHeight = window.innerHeight*0.7 + 'px';
    }
}
</script>
<style scoped>
.news-scroll{
    padding-left: 30px;
}
</style>