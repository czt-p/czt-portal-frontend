<template>
  <div class="home">
    <carousel :carouseData='carouseData1' class='firstP'>
      <!-- <template>
        <div slot='content1'>
          <div class="words animated fadeInRightBig">
            <p>CEZHITONG.com</p>
            <p>高新技术企业测评</p>
            <p><span style="font-size: 80px;">1/3</span><span>目前我们团队申请资助和节税已经累计突破亿元。其中，单个客户最高<br>申请资助额达1224万元，最高节税额达3000万左右，辅导的国家高新技<br>术企业过百家。您的利益，我们将竭尽全力维护</span></p>
            <p>拥有核心知识产权的都可以申请测评</p>
          </div>
        </div>
        <div slot='content2'>
          <div class="words animated fadeInRightBig">
            <p>CEZHITONG.com</p>
            <p>高新技术企业全生命周期托管服务</p>
            <p><span style="font-size: 80px;">1/3</span><span>目前我们团队申请资助和节税已经累计突破亿元。其中，单个客户最高<br>申请资助额达1224万元，最高节税额达3000万左右，辅导的国家高新技<br>术企业过百家。您的利益，我们将竭尽全力维护</span></p>
            <p>拥有核心知识产权的都可以申请测评</p>
          </div>
        </div>
      </template> -->
    </carousel>
    <div class="tab">
      <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="" name="first"> -->
          <div class="paneH">
            <div slot="label" @click='scrollToP(1)' :class="[activeName=='first'?'activeA':'']" >
              <img v-if='activeName==="first"' src="../assets/images/index/svg/home_icon_gqpc_pre.svg" alt="" style="width: 37px;height: 34px;"> 
              <img v-else src="../assets/images/index/svg/home_icon_gqpc_nor.svg" alt="" style="width: 37px;height: 34px;"> 
                高企评测
            </div>
            <div slot="label" @click='scrollToP(2)' :class="[activeName=='second'?'activeA':'']" >
              <img v-if='activeName==="second"' src="../assets/images/index/svg/home_icon_gqcbhs_pre.svg" alt="" style="width: 37px;height: 34px;"> 
              <img v-else src="../assets/images/index/svg/home_icon_gqcchs_nor.svg" alt="" style="width: 37px;height: 34px;"> 
                高企资助查询
            </div>
            <div slot="label" @click='scrollToP(3)' :class="[activeName=='third'?'activeA':'']">
              <img v-if='activeName==="third"' src="../assets/images/index/svg/home_icon_gqzzcx_pre.svg" alt="" style="width: 37px;height: 34px;"> 
              <img v-else  src="../assets/images/index/svg/home_icon_gqzzcx_nor.svg" alt="" style="width: 37px;height: 34px;">
                高企成本核算
            </div>
          </div>
          
          <div class='contentArea animated fadeInUpBig' id='p1'>
            <div class="leftContent" >
              <img src="../assets/images/index/home_img_gqpc.png" alt="">
            </div>
            <div class="rightContent">
              <h1>高企评测</h1>
              <!-- <p>HIGH-TECH ENTERPRISE EVALUATION</p> -->
              <p>1、企业须注册成立一年以上</p>
              <p>2、拥有核心自主知识产权</p>
              <p>3、配置稳定的技术团队</p>
              <p>4、开展持续的技术研发活动</p>
              <p>5、认定前一年自主知识产权的产品（服务）已实现销售</p>
              <el-button style='bottom: -100px;left:35%;' @click="goPage('/evaluating')" class='waveBtn1'>免费测一测</el-button>
            </div>
          </div>
        <!-- </el-tab-pane> -->
        <!-- <el-tab-pane label="" name="second"> -->
          
          <div class='contentArea animated fadeInUpBig' style='vertical-align:text-bottom;' id='p2'>
            <div class="rightContent extend_rightContent">
              <h1 style="border-color:#FF8D26;">高企资助查询</h1>
              <!-- <p>HIGH-TECH ENTERPRISE FUNDING FOR THE QUERY</p> -->
              <p>1、企业所得税税率由25%降低至15%</p>
              <p>2、地方政府财政补贴最高可达60-200万</p>
              <p>3、国家级荣誉</p>
              <p>4、提升企业品牌</p>
              <p>5、500万以上的银行信用贷款资质证明</p>
              <el-button @click="goPage('/subsidize')" class='waveBtn2' style="box-shadow:0px 4px 20px 0px rgba(255,141,38,1);background:rgba(255,141,38,1);margin-left: -3%;bottom:-100px;">资助快速查</el-button>
            </div>
            <div class="leftContent" style="text-align: left;">
              <img src="../assets/images/index/home_img_gqcx.png" alt="">
            </div>
          </div>
        <!-- </el-tab-pane>
        <el-tab-pane label="" name="third"> -->
          
          <div class='contentArea animated fadeInUp' id='p3'>
            <div class="leftContent animated fadeInUpBig">
              <img src="../assets/images/index/home_img_gqcbhs.png" alt="">
            </div>
            <div class="rightContent">
              <h1>高企成本核算</h1>
              <!-- <p>HIGH-TECH ENTERPRISE COST ACCOUNTING</p> -->
              <p>1、咨询服务费</p>
              <p>2、审计报告费用 </p>
              <p>3、知识产权费用</p>
              <p>4、其他</p>
              <el-button class='waveBtn3' style='bottom: -100px;left:30%;' @click="goPage('/costing')">高企成本免费估</el-button>
            </div>
          </div>
        <!-- </el-tab-pane> -->
      <!-- </el-tabs> -->
    </div>
    <div class="parenter">
      <div class="title">
        <i></i> <span>合作伙伴</span> <i></i>
      </div>
      <carousel :carouseData='carouseData2'>
        <template>
            <div slot='content1'>
              <div class="imgList" :style='{width:imgListWidth}'>
                <ul>
                  <li v-for="(item,index) in 10" :key='index' :style='{height:liHeight,width:liWidth}' class='partnerList'>
                    <img :src="require(`../assets/images/index/parenter/home_logo${index+1}.png`)" alt="">
                  </li>
                </ul>
              </div>
            </div>
            <div slot='content2'>
              <div class="imgList" :style='{width:imgListWidth}'>
                <ul>
                  <li v-for="(item,index) in 10" :key='index' :style='{height:liHeight,width:liWidth}' class='partnerList'>
                    <img :src="require(`../assets/images/index/parenter/home_logo${index+11}.png`)" alt="">
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </carousel>
      <!-- <div class="imgList" :style='{width:imgListWidth}'>
        <ul>
          <li v-for="(item,index) in 16" :key='index' :style='{height:liHeight,width:liWidth}'>
            <img :src="require(`../assets/images/index/parenter/home_partner_logo${index}.png`)" alt="">
          </li>
        </ul>
      </div> -->
    </div>
    <btArea></btArea>
  </div>
</template>

<script>
// @ is an alias to /src
import carousel from '@/components/carousel/index.vue'
import btArea from '@/components/bottom/index.vue'
import {getSeoConfig} from "@/api/index";
import { mapGetters } from 'vuex'
export default {
  metaInfo(){
     return {
      title: this.seoConfig.title, // set a title
      meta: this.seoConfig.meta
     }
  },
  name: 'home',
  components: {
    carousel,
    btArea,
  },
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'tdks',
    ]),
  },
  data() {
    return {
      seoConfig:(this.$store.state.tdks.filter(x=>x.pageCode===this.$options.name))[0],
      activeName: 'first',
      liWidth:'',
      liHeight:'',
      imgListWidth:'',
      tabHeadWidth:'',//tab栏标题宽度
      tabHeadHeight:'',//tab栏标题高度,
      carouseData1:{
        imgList:[
          {src: require('../assets/images/index/home_bg3.jpg')},
          {src: require('../assets/images/index/home_bg2.jpg')},
          {src: require('../assets/images/index/home_bg1.jpg')},
        ],//头部轮播图
        arrow:'always',
        carouselHeight:'',
      },
      carouseData2:{
        imgList:[
          {},
          {},
        ],//头部轮播图
        arrow:'always',
        carouselHeight:'',
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    goPage(path){
      this.$router.push({path});
    },
    scrollToP(num){
      // console.log("$('.root').height()",$('.root').height(),num)
      var top1 = $('.root').height();
      var top2 = $('.root').height()+$('#p1').height()+150;
      var top3 = top2+$('#p2').height()+150;
      switch (num){
        case 1:
        // console.log('top1',num,top1)
        this.activeName = 'first';
        $("html,body").finish().animate({"scrollTop":top1},400);
        break;
        case 2:
        // console.log('top2',num,top2)
        this.activeName = 'second';
        $("html,body").finish().animate({"scrollTop":top2},400);
        break;
        case 3:
        // console.log('top3',num,top3)
        this.activeName = 'third';
        $("html,body").finish().animate({"scrollTop":top3},400);
        break;
        default:
      }
      
    }
  },
  mounted(){
    //考虑到移动端，此处不应使用屏幕分辨率的宽，而是使用游览器的宽度
    let screenWidth = document.body.clientWidth - 0
    let screenHeight = window.screen.height - 0
    // console.log(screenWidth)
    this.liWidth = (screenWidth*191/1440)+'px';
    this.liHeight = (this.liWidth*140/191)+'px';
    this.imgListWidth = (screenWidth*191/1440)*5+'px';
    this.tabHeadWidth = screenWidth*387/1440+'px';
    this.tabHeadHeight = screenWidth*387/1440*88/387+'px';
    // this.carouseData1.carouselHeight = (screenWidth*640/1440)+'px';
    this.carouseData1.carouselHeight = (screenHeight-210)+'px';
    this.carouseData2.carouselHeight = (screenWidth*260/1440)+'px';
    //获取seo配置
    // this.$axios.get('./tdk.json',{}).then(res=>{
    //   const tdks = res.data;
    //   tdks.map(x=>{
    //     if(x.pageCode == this.$options.name){
    //       this.seoConfig = x;
    //     }
    //   })
    // })
    // getSeoConfig(this.$options.name).then(res=>{
    //   res.data&& res.data.meta?this.seoConfig = res.data:'';
    //   // console.log('this.seoConfig ',this.seoConfig );
    // })
  }
}
</script>
<style lang='scss'>
// html,body{
//   height:100%;
//   overflow: auto;
// }
#app{
  overflow: hidden;
}
.waveBtn1{ 
  // -webkit-animation: twinkling 1s infinite ease-in-out 
 -webkit-animation: twinkling1 linear 2s 1.5s infinite;
  -moz-animation: twinkling1 linear 2s 1.5s infinite;
  animation: twinkling1 linear 2s 1.5s infinite;
} 
.waveBtn2{ 
  // -webkit-animation: twinkling 1s infinite ease-in-out 
 -webkit-animation: twinkling1 linear 2s 1.5s infinite;
  -moz-animation: twinkling1 linear 2s 1.5s infinite;
  animation: twinkling1 linear 2s 1.5s infinite;
} 
.waveBtn3{ 
  // -webkit-animation: twinkling 1s infinite ease-in-out 
 -webkit-animation: twinkling1 linear 2s 1.5s infinite;
  -moz-animation: twinkling1 linear 2s 1.5s infinite;
  animation: twinkling1 linear 2s 1.5s infinite;
} 
@keyframes twinkling1{ 
  0% {
    // box-shadow: inset -1px 1px 3px 2px #444444, inset 1px -1px 3px 2px #222222, 0 0 0px 0 #b2ff1a;
    box-shadow: inset -1px 1px 3px 2px #fff, inset 1px -1px 3px 2px #fff, 0 0 0px 0 #795548;
  }

  50% {
        box-shadow: inset -1px 1px 3px 2px #f0612c, inset 1px -1px 3px 2px #f0612c, 0 0 20px 0 #795548;
  }

  100% {
    box-shadow: inset -1px 1px 3px 2px #f0612c, inset 1px -1px 3px 2px #f0612c, 0 0 0px 0 #795548;
  }
}
@keyframes twinkling2{ 
  0% {
    // box-shadow: inset -1px 1px 3px 2px #444444, inset 1px -1px 3px 2px #222222, 0 0 0px 0 #b2ff1a;
    box-shadow: inset -1px 1px 3px 2px #fff, inset 1px -1px 3px 2px #fff, 0 0 0px 0 #795548;
  }

  50% {
        box-shadow: inset -1px 1px 3px 2px #ff8d26, inset 1px -1px 3px 2px #ff8d26, 0 0 20px 0 #795548;
  }

  100% {
    box-shadow: inset -1px 1px 3px 2px #ff8d26, inset 1px -1px 3px 2px #ff8d26, 0 0 0px 0 #795548;
  }
}
@keyframes twinkling3{ 
  0% {
    // box-shadow: inset -1px 1px 3px 2px #444444, inset 1px -1px 3px 2px #222222, 0 0 0px 0 #b2ff1a;
    box-shadow: inset -1px 1px 3px 2px #fff, inset 1px -1px 3px 2px #fff, 0 0 0px 0 #795548;
  }

  50% {
        box-shadow: inset -1px 1px 3px 2px #f0612c, inset 1px -1px 3px 2px #f0612c, 0 0 20px 0 #795548;
  }

  100% {
    box-shadow: inset -1px 1px 3px 2px #f0612c, inset 1px -1px 3px 2px #f0612c, 0 0 0px 0 #795548;
  }
}


.ripple {
    position: relative;
    //隐藏溢出的径向渐变背景
    overflow: hidden;
}
  .tab{
    margin-top: -88px;
    z-index: 2;
    // position: absolute;
    width: 100%;
    background:#fff;
    .paneH{
      height: 88px;
      z-index: 3;
      position: relative;
      width: 80.5%;
      margin: 0 auto;
      background: rgba(0,0,0,0.2);
    }
    div[slot='label']{
      display: inline-block;
      width:33.3%;
      height:100%;
      line-height: 100px;
      color:#fff;
      cursor:pointer;
      font-size: 25px;
    }
    div[slot='label']:hover{
      background: rgba(255, 255, 255, 0.3);
      text-decoration: none;
    }
    .activeA{
      background:rgba(255,255,255,0.3);
    }
    .el-tabs__nav{
      float: none!important;
      .el-tabs__item {
        height: 88px!important;
        line-height: 88px!important;
        // width:387px;
        width:26.87%;
        font-size:24px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:36px;
      }
    }
    .el-tabs__active-bar{height:0!important;}
    .el-tabs__item.is-active {
      background: rgba(74,144,226,0.6);
      border: 1px solid rgba(74,144,226,1);
    }
    .contentArea{
      box-sizing: border-box;
      padding: 100px 30px;

      .leftContent{
        display: inline-block;
        width:50%;
        position: relative;
        img{
          width: 60%;
        }
        
      }
      .rightContent{
        display: inline-block;
        width:50%;
        text-align: left;
        vertical-align: middle;
        position: relative;
        h1{
          font-size:50px;
          font-weight:bold;
          color:rgba(53,60,69,1);
          border-left: 10px solid #EA6036;
          padding-left: 20px;
        }
        p{
          padding-left: 32px;
          // margin: 30px 0;
          font-size:20px;
          font-family:SourceHanSansCN-Regular;
          line-height: 50px;
          // &:nth-child(2){
          //   font-size:20px;
          //   font-family:SourceHanSansCN-Regular;
          //   font-weight:400;
          //   color:rgba(116,120,125,1);
          //   margin: 27px 0; 
          // }

        }
        button{
          position: absolute;
          bottom: 172px;
          border:none!important;
          width: 220px;
          height: 56px;
          background: rgba(240,97,44,1);
          box-shadow:0px 4px 20px 0px rgba(240,97,44,1);
          border-radius: 2px;
          font-size: 22px;
          font-family: SourceHanSansCN-Bold;
          font-weight: bold;
          color: rgba(255,255,255,1);
          left: 63%;
          margin-left: -110px;
        }
      }
    }
  }
  .parenter{
    background: rgba(247,247,247,1) url(../assets/images/index/parenter/home_partner_bg.png);
    background-size: contain;
    text-align: center;
    padding-bottom: 100px;
    .title{    
      padding: 35px 0;
      span{
        display: inline-block;
        margin: 0 50px;
        font-size:32px;
        font-family:SourceHanSansCN-Bold;
        font-weight:bold;
        color:rgba(53,60,69,1);
      }
      i{
        display: inline-block;
        width:75px;
        height:8px;
        background:rgba(53,60,69,1);
      }
    }
    .imgList{
      display: inline-block;
      li{
        display: inline-block;
      transition: transform .1s;
        &:hover{
          transform: scale(1.1);
        }
      }
    } 
  }
.extend_rightContent{
  padding-left: 15%;
  box-sizing: border-box;
}
/*移动端or低分辨率样式补丁*/
@media (max-device-width:768px ){
  .extend_rightContent{
    padding-left: 8%;
    box-sizing: border-box;
  }
}
</style>

