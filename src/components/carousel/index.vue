<template>
  <div class='root'>
    <el-carousel v-if='carouselHeight' :height="carouselHeight">
        <el-carousel-item v-for="(item,index) in carousels" :key="index">
        <img :src="item.src" alt="">
        <div class="words">
          <p>CEZHITONG.com</p>
          <p>高新技术企业测评</p>
          <p><span style="font-size: 80px;">1/3</span><span>目前我们团队申请资助和节税已经累计突破亿元。其中，单个客户最高<br>申请资助额达1224万元，最高节税额达3000万左右，辅导的国家高新技<br>术企业过百家。您的利益，我们将竭尽全力维护</span></p>
          <p>拥有核心知识产权的都可以申请测评</p>
        </div>
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      carousels:[
        {src: require('../../assets/images/index/home_bg.png')},
      ],
      carouselHeight:''
    }
  },
  methods: {

  },
  mounted(){
    let screenWidth = window.screen.width-0;
    this.carouselHeight = (screenWidth*823/1440)+'px';
  },
}
</script>

<style lang='scss'>
.el-carousel__arrow{
  width: 50px;
  height: 50px;
  i{
    font-size: 50px!important;
  }
}
.el-carousel__arrow--right {
    right: 200px;
}
.el-carousel__arrow--left {
    left: 200px;
}
.el-carousel__indicators{
  bottom:100px!important;
}
.words{
    position: absolute;
    top: 38%;
    left: 20%;
    text-align: left;
    p{
      span{
        display: inline-block;
        line-height: 30px;
      }
      &:nth-child(1){
        font-size:20px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
      }
      &:nth-child(2){
        font-size:73px;
        font-family:SourceHanSansCN-Bold;
        font-weight:bold;
        color:rgba(255,255,255,1);
        margin: 20px 0;
      }
      &:nth-child(3){
        font-size:20px;
        font-family:SourceHanSansCN-Normal;
        font-weight:400;
        color:rgba(255,255,255,1);
        margin: 20px 0;
      }
      &:nth-child(4){
        font-size:16px;
        font-family:SourceHanSansCN-Normal;
        font-weight:400;
        color:rgba(255,255,255,1);
      }

    }
}
</style>
