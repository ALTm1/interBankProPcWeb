<template>
    <div>
        <div class="infolist-wrap">
            <div v-for="(info,index) in infoList" :key="index">
                <li>{{info.name}}</li>
                <li>{{info.rate}}</li>
                <li>预期收益</li>
                <img src="../../assets/image/line.png" alt="">
                <li>{{info.content}}</li>
                <button>查看详情</button>
            </div>
        </div>
        <div>
            <div class="img-wrap">
                 <img src="../../assets/image/animation.png" alt="">
            <img src="../../assets/image/code.png" alt="">
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return{
            infoList:[
                {
                    name:"产品名称产品名称",
                    rate:"3.45%",
                    content:"文案内容文案内容文案内容文案内容文案内容"
                },
                {
                    name:"产品名称产品名称",
                    rate:"3.45%",
                    content:"文案内容文案内容文案内容文案内容文案内容"
                },
                {
                    name:"产品名称产品名称",
                    rate:"3.45%",
                    content:"文案内容文案内容文案内容文案内容文案内容"
                },
                {
                    name:"产品名称产品名称",
                    rate:"3.45%",
                    content:"文案内容文案内容文案内容文案内容文案内容"
                },
            ]
        }
    }
}
</script>
<style scoped>
.infolist-wrap{
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    padding: 60px 80px 80px 80px;
}
.infolist-wrap div{
    text-align: center;
    width:20%;
/* height:390px; */
background:rgba(255,255,255,1);
box-shadow:0px 0px 60px 0px rgba(8,20,35,0.2);
border-radius:10px;
margin-right: 40px;
}
.infolist-wrap div:hover{
    margin-top: -30px;
    cursor: pointer;
    box-shadow:0px 0px 60px 0px #fff;
}
/* .infolist-wrap div:nth-child(1),.infolist-wrap div:nth-child(2),.infolist-wrap div:nth-child(3){
    margin-right: 40px;
} */
.infolist-wrap div li:nth-child(1){
    font-size:20px;
font-weight:400;
color:rgba(51,51,51,1);
margin-top: 44px;
}
.infolist-wrap div li:nth-child(2){
    font-size:40px;
font-weight:400;
color:rgba(206,40,72,1);
margin-top: 38px;
}
.infolist-wrap div li:nth-child(3){
    margin-top: 18px;
    font-size:14px;
font-weight:400;
color:rgba(153,153,153,1);
line-height:30px;
}
.infolist-wrap div img{
    width: 60px;
    height: 8px;
    margin: 30px 0;
}
.infolist-wrap div li:nth-child(5){
    font-size:14px;
font-weight:400;
color:rgba(102,102,102,1);
line-height:26px;
width: 167px;
margin: 0 auto;
}
.infolist-wrap div:nth-child(2n+1){
    border-top: 4px solid #CE2848;
}
.infolist-wrap div:nth-child(2n){
    border-top: 4px solid #BE9D62;
}
.infolist-wrap div button{
    border: none;
    width:180px;
height:40px;
color: #fff;
border-radius:20px;
margin-bottom: 39px;
margin-top: 40px;
}
.infolist-wrap div:nth-child(2n+1) button{
    background: #CE2848;
}
.infolist-wrap div:nth-child(2n) button{
    background: #BE9D62;
}
.img-wrap{
    width: 100%;
    display: -webkit-box;
    padding: 0 360px;
}
.img-wrap img:nth-child(1){
    width: 580px;
}
.img-wrap img:nth-child(2){
    width: 151px;
}
</style>