<template>
    <div>
        <!-- 交易信息 -->
        <div class="transcation-wrap">
            <div class="transcation-list" v-for="(item,index) in transcation" :key="index">
                <div>
                    <li class="transcation-title">{{item.state}}</li>
                    <ul>
                        <li>产品类型：{{item.type}}</li>
                        <li>交易方向：{{item.direction}}</li>
                    </ul>
                    <li>发布时间：{{item.time}}</li>
                </div>
                <div>
                    <button>查看详情</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            transcation:[
                {
                    state:'您的意向已被确认',
                    type:"同业存放",
                    direction:"资金融入",
                    time:"2020-09-10  19：00"
                },
                {
                    state:'您的意向已被确认',
                    type:"同业存放",
                    direction:"资金融入",
                    time:"2020-09-10  19：00"
                },
            ]
        }
    }
}
</script>
<style scoped>
.transcation-wrap{
    width: 80%;
    margin: 0 auto;
}
.transcation-title{
    font-size: 26px;
}
.transcation-list{
    /* display: -webkit-box;
    text-align: center; */
    border: 1px solid #999;
    width:892px;
height:100px;
background:rgba(255,254,253,1);
border-radius:4px;
}
.transcation-list ul{
    display: -webkit-box;
    
}
.transcation-list button{
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