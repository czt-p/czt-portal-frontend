<template>
  <div class="home">
    <carousel></carousel>
    <div class="tab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <span slot="label">
            <img v-if='activeName==="first"' src="../assets/images/index/svg/home_icon_gqpc_pre.svg" alt="" style="width: 37px;height: 34px;"> 
            <img v-else src="../assets/images/index/svg/home_icon_gqpc_nor.svg" alt="" style="width: 37px;height: 34px;"> 
              高企评测
          </span>
          <div class='contentArea'>
            <div class="leftContent">
              <img src="../assets/images/index/home_img_gqpc.png" alt="">
              <el-button>点击进入</el-button>
            </div>
            <div class="rightContent">
              <h1>高企评测</h1>
              <p>HIGH-TECH ENTERPRISE EVALUATION</p>
              <p>1、企业须注册成立一年以上</p>
              <p>2、拥有核心自主知识产权</p>
              <p>3、配置稳定的技术团队</p>
              <p>4、开展持续的技术研发活动</p>
              <p>5、认定前一年自主知识产权的产品（服务）已实现销售</p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          <span slot="label">
            <img v-if='activeName==="second"' src="../assets/images/index/svg/home_icon_gqcbhs_pre.svg" alt="" style="width: 37px;height: 34px;"> 
            <img v-else src="../assets/images/index/svg/home_icon_gqcchs_nor.svg" alt="" style="width: 37px;height: 34px;"> 
              高企资助查询
          </span>
          <div class='contentArea'>
            <div class="rightContent" style="padding-left: 15%;box-sizing: border-box;">
              <h1 style="border-color:rgba(80,204,168,1);">高企资助查询</h1>
              <p>HIGH-TECH ENTERPRISE FUNDING FOR THE QUERY</p>
              <p>1、企业所得税税率由25%降低至15%</p>
              <p>2、地方政府财政补贴最高可达60-200万 </p>
              <p>3、国家级荣誉提升企业品牌 </p>
              <p>4、500万以上的银行信用贷款资质证明</p>
            </div>
            <div class="leftContent" style="text-align: left;">
              <img src="../assets/images/index/home_img_gqcx.png" alt="">
              <el-button style="box-shadow:0px 4px 20px 0px rgba(80,204,168,1);background:rgba(80,204,168,1);margin-left: -36%;">点击进入</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third">
          <span slot="label">
            <img v-if='activeName==="third"' src="../assets/images/index/svg/home_icon_gqzzcx_pre.svg" alt="" style="width: 37px;height: 34px;"> 
            <img v-else  src="../assets/images/index/svg/home_icon_gqzzcx_nor.svg" alt="" style="width: 37px;height: 34px;">
              高企成本核算
          </span>
          <div class='contentArea'>
            <div class="leftContent">
              <img src="../assets/images/index/home_img_gqcbhs.png" alt="">
              <el-button>点击进入</el-button>
            </div>
            <div class="rightContent">
              <h1>高企成本核算</h1>
              <p>HIGH-TECH ENTERPRISE COST ACCOUNTING</p>
              <p>1、咨询费用5万起</p>
              <p>2、专项审计报告费用 </p>
              <p>3、知识产权费用</p>
              <p>4、开展持续的技术研发活动</p>
              <p>4、其他</p>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="parenter">
      <div class="title">
        <i></i> <span>合作伙伴</span> <i></i>
      </div>
      <div class="imgList" :style='{width:imgListWidth}'>
        <ul>
          <li v-for="(item,index) in 16" :key='index' :style='{height:liHeight,width:liWidth}'>
            <img :src="require(`../assets/images/index/parenter/home_partner_logo${index}.png`)" alt="">
          </li>
        </ul>
      </div>
    </div>
    <btArea></btArea>
  </div>
</template>

<script>
// @ is an alias to /src
import carousel from '@/components/carousel/index.vue'
import btArea from '@/components/bottom/index.vue'

export default {
  name: 'home',
  components: {
    carousel,
    btArea,
  },
  data() {
    return {
      activeName: 'first',
      liWidth:'',
      liHeight:'',
      imgListWidth:''
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted(){
    let screenWidth = window.screen.width-0;
    this.liWidth = (screenWidth*220/1440)+'px';
    this.liHeight = (this.liWidth*140/220)+'px';
    this.imgListWidth = (screenWidth*220/1440)*4+'px'
  }
}
</script>
<style lang='scss'>
  .tab{
    margin-top: -87px;
    z-index: 2;
    // position: absolute;
    width: 100%;
    .el-tabs__nav{
      float: none!important;
      .el-tabs__item {
        height: 88px!important;
        line-height: 88px!important;
        width:387px;
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
        button{
          position: absolute;
          bottom: -45px;
          border:none!important;
          width: 220px;
          height: 56px;
          background: rgba(74,144,226,1);
          box-shadow:0px 4px 20px 0px rgba(74,144,226,1);
          border-radius: 2px;
          font-size: 22px;
          font-family: SourceHanSansCN-Bold;
          font-weight: bold;
          color: rgba(255,255,255,1);
          left: 50%;
          margin-left: -110px;
        }
      }
      .rightContent{
        display: inline-block;
        width:50%;
        text-align: left;
        vertical-align: middle;
        h1{
          font-size:50px;
          font-weight:bold;
          color:rgba(53,60,69,1);
          border-left: 10px solid rgba(74,144,226,1);
          padding-left: 20px;
        }
        p{
          padding-left: 32px;
          margin: 30px 0;
          font-size:20px;
          font-family:SourceHanSansCN-Regular;
          &:nth-child(2){
            font-size:20px;
            font-family:SourceHanSansCN-Regular;
            font-weight:400;
            color:rgba(116,120,125,1);
            margin: 27px 0; 
          }

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
      padding: 70px 0;
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
      }
    } 
  }
</style>

