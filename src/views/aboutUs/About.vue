<template>
  <div class='aboutUs'>
    <div class="contentArea animated fadeIn">
      <div class="usImg">
        <img src="../../assets/images/index/aboutUs.png" alt="">
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="公司简介" name="first" class='animated fadeInUpBig'>
          <p>策知通高新技术企业服务平台专注于国家高新技术企业认定服务。团队拥有10年以上高新技术企业申报经验、财务规范辅导经验、知识产权申报经验；拥有资深科技项目申报专家、财务辅导专家，另邀请高企评审专家组建平台的专家顾问团队。平台推出高新技术企业认定咨询服务、保姆式服务、专家预审服务、担保服务等。策知通高新技术企业服务平台专注于国家高新技术企业认定服务。团队拥有10年以上高新技术企业申报经验、财务规范辅导经验、知识产权申报经验；拥有资深科技项目申报专家、财务辅导专家，另邀请高企评审专家组建平台的专家顾问团队。平台推出高新技术企业认定咨询服务、保姆式服务、专家预审服务、担保服务等。 </P>
          <p>平台致力于高新技术企业全生命周期托管服务，高新申请、审核、年审等一条龙服务，全程辅导知识产权、财务问题，解决高企认定核心问题；全程提供稳定的专家团队辅导，保证申报成功率；全方位挖掘企业核心技术和优势，申报材料不脱离企业实际情况。全生命周期的托管服务，解决高新技术企业的后顾之忧。</P>
          <p>目前我们团队申请资助和节税已经累计突破亿元。其中，单个客户最高申请资助额达1224万元，最高节税额达3000万左右，辅导的国家高新技术企业过百家。您的利益，我们将竭尽全力维护！</P>
        </el-tab-pane>
        <el-tab-pane label="联系我们" name="second" class='animated fadeIn'> 
          <div class="title">联系我们</div>
          <div class="addressUs">
            <div class="leftp fl">
              <p>联系电话： <span style="font-size:28px;color:#4A90E2;">400-878-0703</span></p>
              <p>公司：杭州策知通科技有限公司</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;杭州快知科技有限公司</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;杭州快知知识产权代理事务所</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;杭州双元知识产权代理有限公司</p>
              <p>邮箱：server@cezhitong.com</p>
              <p>地址：浙江省杭州市江干区红普路759号汇禾禧福汇电商创业大厦4-312室</p>
            </div>
            <div class="rightp fl">
              <aMap :style='mapStyle'></aMap>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <btArea></btArea>
    
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import btArea from '@/components/bottom/index.vue';
import aMap from '@/components/map/map.vue';
export default {
  name: '',
  //  metaInfo: {
  //   title: '关于我们-策知通', // set a title
  //   meta: [
  //     {                 // set meta
  //       name: 'keyWords',
  //       content: '策知通'
  //     },
  //     {                 // set meta
  //       name: 'description',
  //       content: '杭州快知科技有限公司'
  //     }
  //   ]
  // },
  data () {
    return {
      activeName: 'first',
      mapStyle:{
        height: '400px',
        width:'100%'
      }
    }
  },
  components:{
    btArea,
    aMap,
  },
  computed: {
     ...mapState([

    ])
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted(){

  },
}
</script>
<style lang='scss'>
@import './aboutUs.scss';
</style>
