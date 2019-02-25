<template>
  <div class='FAQs'>
      <div class="wrap">
        <div class="topSearch animated fadeIn">
            <el-input
                placeholder="请输入您需要解答的问题"
                v-model="param.primaryKey"
                @keyup.enter.native='searchQue'
                clearable>  
            </el-input>
            <el-button icon="el-icon-search" @click='searchQue'></el-button>
        </div>
        <div class="downArea animated fadeIn">
            <div class="leftArea" >
                <div class="none1" v-if='noQue'>
                    <img style='width: 35%;' src="../../assets/images/index/noneSubsidize.png" alt="">
                    <div style='font-size: 14px;margin-top: 25px;'>小通没有找到您要搜索的问题，试试人工客服解决问题吧…</div>
                </div>
                <ul v-loading='loading'>
                    <li v-for='(x,index) in hightTechQList' :key='index'>
                        <div class="title">
                            <span class='ellipsis'>{{x.question.replace(reg,'')}}</span>
                            <span style="font-size:11px;font-family:SourceHanSansCN-Regular;font-weight:400;color:rgba(133,133,133,1);">{{new Date(x.updatedTime).Format('yyyy-MM-dd hh:mm:ss')}}</span>
                        </div>
                        <div class="content">
                            <span class='ellipsis'>{{x.answer.replace(reg,'')}}</span>
                            <el-button type="text" @click='toDetail(x)'>查看详情 》</el-button>
                        </div>
                    </li>
                    <div class="noneList" style='text-align:center;color:#9e9e9e;font-size: 12px;' v-if='hightTechQList.length == totalNum && hightTechQList.length!=0'>---没有更多了---</div>
                </ul>
                <el-button class='toTop' circle type="primary" icon='el-icon-arrow-up' v-if='hightTechQList.length>6' @click='smoothscroll'></el-button>
                <div class="loadMore" v-loading='loadMore'></div>
            </div>
            <div class="rightArea">
                <div class="topTitle">
                    热门搜索
                </div>
                <div class="texts">
                    <div>
                        <span class='font12' >科技成果转化</span>
                    </div>
                    <div>
                        <span class='font15'>研发费用归集</span>
                    </div>
                    <div>
                        <span class='font14'>研究开发活动</span>
                        <span class='font18'>科技人员占比</span>
                    </div>
                    <div>
                        <span class='font15'>所有权人</span>
                        <span class='font28'>知识产权</span>
                        <span class='font12'>专利有效性</span>
                    </div>
                    <div>
                        <span class='font20'>企业创新能力评价指标</span>
                    </div>
                    <div>
                        <span class='font14'>研究开发组织管理水平</span>
                    </div>
                    <div>
                        <span class='font12'>高新技术产品（服务）收入</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <btArea></btArea>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import {getHighTechQ} from '@/api/index';
import btArea from '@/components/bottom/index.vue';
export default {
  name: '',
  data () {
    return {
        hightTechQList:[],
        param:{
            pageIndex:1,
            limit:10,
            primaryKey:''
        },
        loading:true,
        noQue:false,
        loadMore:false,
        totalNum: 0,
        reg:/<\/?.+?\/?>/g,
    }
  },
  computed: {
     ...mapState([

    ])
  },
  components:{
      btArea,
  },
  methods: {
      scrollBottom(){
        // console.log($('.leftArea').height()+$('.leftArea').scrollTop(),$('.leftArea ul').height())
        if($('.leftArea').height()+$('.leftArea').scrollTop()==$('.leftArea ul').height()+20){
        // console.log($('.leftArea').height(),$('.leftArea').scrollTop(),$('.leftArea').height()+$('.leftArea').scrollTop(),$('.leftArea ul').height())
        this.param.pageIndex++;
        let isOver = true;
        if(isOver){
            if(this.hightTechQList.length<this.totalNum){
                this.loadMore = true;
                isOver = false;
                getHighTechQ({param:this.param}).then(res=>{
                    isOver = true;
                    // console.log('this.subscribeList.length;',this.subscribeList.length)
                    this.hightTechQList = this.hightTechQList.concat(res.data.content);
                    this.loadMore = false;
                })
            }
        }
        }
      },
      toDetail(data){
          this.$router.push({name:'FAQsDetail',params:{data}});
      },
      searchQue(){
        this.loading = true;
        this.param.pageIndex = 1;
        getHighTechQ({param:this.param}).then(res=>{
            if(res.data.content.length>0){
                this.loading = false;
                this.noQue = false;
                this.hightTechQList = res.data.content;
                this.totalNum = res.data.total;
                // window.sessionStorage.setItem('primaryKey',this.param.primaryKey);
            }else{
                this.loading = false;
                this.hightTechQList = [];
                this.totalNum = 0;
                this.noQue = true;
            }
        }).catch(err=>{
            this.loading = false;
        })
      },
      initLeftContent(param){
        getHighTechQ({param}).then(res=>{
            this.loading = false;
            this.noQue = false;
            this.totalNum = res.data.total;
            this.hightTechQList = res.data.content;
        }).catch(err=>{
            this.loading = false;
        })
      },
      smoothscroll(){
        var currentScroll = $('.leftArea').scrollTop();
        if (currentScroll > 0) {
            window.requestAnimationFrame(this.smoothscroll);
            $('.leftArea')[0].scrollTo (0,currentScroll - (currentScroll/5));
        }
      }
  },
  mounted(){
    // this.param.primaryKey = window.sessionStorage.getItem('primaryKey');
      // 添加滚动事件，检测滚动到页面底部
    $('.leftArea')[0].addEventListener('scroll', this.scrollBottom);
    this.initLeftContent(this.param);
    $('.texts span').on('click',(e)=>{
        // console.log('e',e)
        this.param.primaryKey =$(e.target).text();
        this.searchQue();
    })
  }
}
</script>

<style lang='scss'>
.FAQs{
    margin:0 auto;
    // height:100%;
    background-color: #f7f7f7;
    .wrap{
        width:80.5%;
        margin:0 auto;
        padding-top: 56px;
        .topSearch{
            text-align: center;
            .el-input{
                width:auto;
                vertical-align: middle;
                input{
                    height: 55px;
                    border: none;
                    width: 600px;
                    float: left;
                }
            }
            button{
                height: 56px;
                padding: 12px 15px;
                background: linear-gradient(319deg,rgba(33,100,233,1) 0%,rgba(41,183,248,1) 100%);
                border-radius: 0px 1px 0px 1px;
                vertical-align: middle;
                .el-icon-search{
                    font-size: 24px;
                    color: #fff;
                }
            }
            .el-cascader{
                float: left;
                line-height: 56px;
            }
        }
        .downArea{
            display: flex;
            justify-content: space-between;
            margin-top: 50px;
            height: 800px;
            .leftArea{
                width: 73%;
                min-width: 751px;
                height: 680px;
                overflow: auto;
                .toTop{
                    position: absolute;
                    right: 28%;
                    bottom: 37%;
                }
                ul{padding-bottom: 20px;}
                li{
                    text-align: left;
                    padding: 20px 80px;
                    background: #fff;
                    margin-bottom: 16px;
                    .title{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size:16px;
                        font-family:SourceHanSansCN-Medium;
                        font-weight:500;
                        color:rgba(53,60,69,1);
                        em{
                            color:red;
                        }
                    }
                    .content{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size:12px;
                        font-family:SourceHanSansCN-Regular;
                        font-weight:400;
                        color:rgba(53,60,69,1);
                        height: 40px;
                        overflow: hidden;
                        color: #353c45;
                        margin-top: 20px;
                    }
                }
                
            }
            .rightArea{
                min-width: 315px;
                width: 23%;
                height: 520px;
                background: #fff;
                box-shadow:0px 4px 10px 0px rgba(0,0,0,0.2);
                .topTitle{
                    height:48px;
                    background:linear-gradient(319deg,rgba(33,100,233,1) 0%,rgba(41,183,248,1) 100%);
                    font-size: 16px;
                    font-family: SourceHanSansCN-Bold;
                    font-weight: bold;
                    color: rgba(255,255,255,1);
                    line-height: 48px;
                }
                .texts{
                    height: 140px;
                    margin-top: 70px;
                    font-family:SourceHanSansCN-Medium;
                    span{margin:5px;cursor:pointer;}
                    .font12{color:rgba(85,85,85,1);font-size:12px}
                    .font14{color:rgba(74,144,226,1);;font-size:14px}
                    .font15{color:#000;font-size:14px}
                    .font16{color:rgba(85,85,85,1);font-size:16px;font-weight:bold;}
                    .font18{color:rgba(85,85,85,1);font-size:18px}
                    .font20{color:rgba(85,85,85,1);font-size:20px;font-weight:bold;}
                    .font22{color:rgba(85,85,85,1);font-size:22px}
                    .font24{color:rgba(85,85,85,1);font-size:24px;font-weight:bold;}
                    .font26{color:rgba(85,85,85,1);font-size:26px}
                    .font28{color:rgba(74,144,226,1);font-size:28px}
                }
            }
        }
    }
}
/*移动端or低分辨率样式补丁*/
@media (max-device-width:768px ){
    .wrap{
        padding: 0 16px;
        .topSearch{
            .el-tabs{
                box-sizing: border-box;
                padding-left: 10%!important;
            }
        }
        .downArea{
            .leftArea{
                flex: 1 1 auto;
                width: 0%;
                min-width: auto!important;
                margin-right: 16px;
                li{
                    padding:20px 40px!important;
                    .title{
                        font-size: 14px!important;
                        flex-wrap: nowrap;
                        white-space: nowrap;
                    }
                }
                .toTop{
                    right: 28% !important;
                }
            }
            .rightArea{
                min-width: auto!important;
            }
        }
    }
}
</style>
