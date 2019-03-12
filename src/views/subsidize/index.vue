<template>
  <div class='subsidize'>
      <div class="wrap">
        <div class="topSearch animated fadeIn">
            <el-tabs type="card">
                <el-tab-pane label="按公司全称查询" class='company clearfix'>
                    <el-input
                        placeholder="请输入公司全称，查询当地高企资助政策；如：杭州快知科技有限公司"
                        v-model="companyName"
                        @keyup.enter.native='clickSearchCompany'
                        clearable>  
                    </el-input>
                    <el-button icon="el-icon-search" @click='clickSearchCompany'></el-button>
                </el-tab-pane>
                <el-tab-pane label="按所在地查询" class='company clearfix'>
                    <el-cascader
                        :options="regionList"
                        :props="props"
                        change-on-select
                        clearable
                        v-model="selectedOptions"
                        >
                    </el-cascader>
                    <el-button icon="el-icon-search" @click='clickSearchRegion'></el-button>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="downArea animated fadeIn">
            <div class="leftArea" >
                <div class="none1" v-if='companyNone'>
                    <img style='width: 35%;' src="../../assets/images/index/noneSubsidize.png" alt="">
                    <div style='font-size: 14px;margin-top: 25px;'>搜索无结果...</div>
                </div>
                <div class="none2" v-if='regionNone'>
                    <img style='width: 35%;' src="../../assets/images/index/noneRegion.png" alt="">
                    <div style='font-size: 14px;margin-top: 25px;'>该地区的高新资助正在努力扩展中，试试在线客服寻求帮助吧…</div>
                </div>
                <ul v-loading="loading">
                    <li v-for="(item,index) in subscribeList" :key='index'>
                        <div class="title">
                            <span class='ellipsis tName'>{{item.name}}</span>
                            <span style="font-size:11px;font-family:SourceHanSansCN-Regular;font-weight:400;color:rgba(133,133,133,1);">时间：{{new Date(item.modifyTime).Format('yyyy-MM-dd hh:mm:ss')}}</span>
                        </div>
                        <div class="content">
                            <span class='ellipsis' style='width:83%;'>{{item.content.replace(reg,'')}}</span>
                            <el-button type="text" @click='toDetail(item)'>查看详情 》</el-button>
                        </div>
                    </li>
                    <div class="noneList" style='text-align:center;color:#9e9e9e;font-size: 12px;' v-if='subscribeList.length == totalNum && subscribeList.length!=0'>---没有更多了---</div>
                </ul>
                <el-button class='toTop' v-if='subscribeList.length>6'  circle type="primary" icon='el-icon-arrow-up' @click='smoothscroll'></el-button>
                <div class="loadMore" v-loading='loadMore'></div>
            </div>
            
            <div class="rightArea">
                <div class="topTitle">
                    最新高企资助政策
                </div>
                <ul>
                    <li v-for="(item,index) in hotSearhList" :key='index'>
                        <div class="num">{{index+1}}</div>
                        <div class="hotSearch" @click='toDetail(item)'>{{item.name}}</div>
                    </li>
                </ul>
            </div>
            <!-- <svg class="loader-circular" viewBox="25 25 50 50">
                <circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke="rgb(53, 157, 218)" stroke-width="5"></circle>
            </svg> -->
        </div>
      </div>
      <btArea></btArea>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import {getRegions,recentModify,subsidyPolicies,searchByCompany,searchByRegionCode} from '@/api/index';
import btArea from '@/components/bottom/index.vue';
export default {
  name: '',
  data () {
    return {
        companyName:'',
        regionList:[],
        selectedOptions:[],
        props: {
          value: 'code',
          label:'name',
        },
        hotSearhList:[],//热门搜索
        subscribeList:[],//默认加载的10条数据
        params:{
            limit:10,
            pageIndex:1,
            queryString:[]
        },
        regionNone:false,
        companyNone:false,
        loadMore:false,
        totalNum: 0,
        loading:true,
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
       handleChange(value) {
        // console.log(value);
      },
      scrollBottom(){
        //   console.log($('.leftArea').height()+$('.leftArea').scrollTop(),$('.leftArea ul').height())
          if($('.leftArea').height()+$('.leftArea').scrollTop()==$('.leftArea ul').height()+20){
            // console.log($('.leftArea').height(),$('.leftArea').scrollTop(),$('.leftArea').height()+$('.leftArea').scrollTop(),$('.leftArea ul').height())
            this.params.pageIndex++;
            let isOver = true;
            if(isOver){
                if(this.subscribeList.length<this.totalNum){
                    this.loadMore = true;
                    isOver = false;
                    subsidyPolicies({param:this.params}).then(res=>{
                        isOver = true;
                        // console.log('this.subscribeList.length;',this.subscribeList.length)
                        this.subscribeList = this.subscribeList.concat(res.data.content);
                        this.loadMore = false;
                    })
                }
            }
          }
      },
      clickSearchCompany(){//按公司名称搜索
        this.loading = true;
        let flag = true;
        if(flag){
            if(this.companyName && this.companyName.trim()){
                searchByCompany({companyName:this.companyName.trim()}).then(res=>{
                    this.loading = false;
                    flag = true;
                    if(res.data.length>0){
                        this.companyNone = false;
                        this.regionNone = false;
                        this.subscribeList = res.data;
                        this.toDetail(this.subscribeList[0]);
                    }else{
                        this.subscribeList = [];
                        this.regionNone = false;
                        this.companyNone = true;
                    }
            })
            }else{
                // this.$alert('公司名称不能为空。', '提示', {
                //     confirmButtonText: '确定',
                //     type:'warning',
                //     closeOnClickModal:true,
                //     callback: action => {
                        
                //     }
                // });
                this.params.pageIndex = 1;
                this.initLeftContent();
                flag = true;
            }

        }
          
      },
      clickSearchRegion(){
          this.loading = true;
          let flag = true;
          if(flag){
            flag = false;
            if(this.selectedOptions.length>0){
                searchByRegionCode({regionCode:this.selectedOptions[this.selectedOptions.length-1]-0}).then(res=>{
                    this.loading = false;
                    flag = true;
                    if(res.data.length>0){
                        this.regionNone = false;
                        this.companyNone = false;
                        this.subscribeList = res.data;
                        this.toDetail(this.subscribeList[0]);
                    }else{
                        this.subscribeList = [];
                        this.companyNone = false;
                        this.regionNone = true;
                    }
                })
            }else{
                this.params.pageIndex = 1;
                this.initLeftContent();
                flag = true;
            }
          }
          
          
      },
      initLeftContent(){//默认10条数据
        this.regionNone = false;
        this.companyNone = false;
        subsidyPolicies({param:this.params}).then(res=>{
            this.loading = false;
            this.subscribeList = res.data.content;
            this.totalNum = res.data.total;
            this.loadMore = false;
        })
      },
      initHotSearch(){//热门搜索。。。
        recentModify().then(res=>{
            this.hotSearhList = res.data;
        })
      },
      toDetail(content){
        //   console.log('content',content)
          this.$router.push({name:'subsidizeDetail.html',params:{content}});
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
      getRegions().then(res=>{
          this.regionList = res.data;
      });
      this.initLeftContent();
      this.initHotSearch();
      // 添加滚动事件，检测滚动到页面底部
      $('.leftArea')[0].addEventListener('scroll', this.scrollBottom)
  },
}
</script>

<style lang='scss'>
// html,body{
//     height: 100%;
//     #app{
//         height: calc(100% - 70px);
//     }
// }
.subsidize{
    margin:0 auto;
    // height:100%;
    background-color: #f7f7f7;
    .ellipsis{
        height: 13px;
    }
    .tName{
        height: 22px;
        width: 70%;
    }
    .wrap{
        width:80.5%;
        margin:0 auto;
        padding-top: 56px;
        overflow: hidden;
        .topSearch{
            text-align: center;
            .el-tabs{
                margin: 0 auto;
                min-width: 519px;
                width: 100%;
                padding-left:20%;
                &>.el-tabs__header {
                    border-bottom:none!important;
                    margin:0;
                    .el-tabs__nav{
                        border:none!important;
                        .el-tabs__item{
                            background: rgba(204,204,204,1)!important;
                            border-radius: 2px 10px 0px 0px!important;
                            opacity: 0.7993000000000001!important;
                            color: #fff;
                        }
                        .is-active{
                            background:#fff!important;
                            color: #4A90E2;
                        }
                    }
                }
                .company{
                    .el-input{
                        float: left;
                        width:auto;
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
                        float: left;
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
            }
        }
        .downArea{
            display: flex;
            justify-content: space-between;
            margin-top: 50px;
            height: 800px;
            .leftArea{
                width: 70%;
                min-width: 751px;
                height: 680px;
                overflow: auto;
                .toTop{
                    position: absolute;
                    right: 31%;
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
                    }
                    .content{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size:12px;
                        font-family:SourceHanSansCN-Regular;
                        font-weight:400;
                        color:rgba(53,60,69,1);
                    }
                }
                
            }
            .rightArea{
                min-width: 300px;
                width: 23%;
                height: 550px;
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
                li{
                    height: 48px;
                    line-height: 48px;
                    .num{
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        background: linear-gradient(229deg,rgba(253,201,73,1) 0%,rgba(253,63,95,1) 100%);
                        border-radius: 50%;
                        text-align: center;
                        line-height: 20px;
                        color: #fff;
                    }
                    &:nth-child(n+4) .num{
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        background:linear-gradient(319deg,rgba(33,100,233,1) 0%,rgba(41,183,248,1) 100%);
                        border-radius: 50%;
                        text-align: center;
                        line-height: 20px;
                        color: #fff;
                    }
                    .hotSearch{
                        display: inline-block;
                        width: 80%;
                        padding-left: 20px;
                        border-bottom: 1px solid #e2e2e2;
                        box-sizing: border-box;
                        text-align: left;
                        font-size:13px;
                        font-family:SourceHanSansCN-Regular;
                        font-weight:400;
                        color:rgba(85,85,85,1);
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        vertical-align: middle;
                        cursor:pointer;
                    }
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
            }
            .rightArea{
                min-width: auto!important;
            }
        }
    }
}
</style>
