<template>
  <div class='root' v-loading="loading">
    <el-steps :active="1" align-center class='yy-steps'>
      <el-step title="基础评估"></el-step>
      <el-step title="高新评分"></el-step>
      <el-step title="评估结果及建议"></el-step>
    </el-steps>
    <ul class='questions'>
      <li class='queTitle animated fadeIn' v-for="(item,index) in basicQuestions" :key='index'>
        <div>{{`${index+1}、${item.content}`}}</div>
        <el-radio-group v-model="item.answer">
            <el-radio :label="x.id" v-for='(x,num) in item.options' :key='num' :class="[item.options.length>2 && x.content.length>30?'moreOptions':'']">{{x.content}}</el-radio>
        </el-radio-group>
      </li>
    </ul>
    <div class="btnArea">
      <el-button @click='submitStep1'>点击进入下一步高企评测</el-button>
    </div>
    <!-- <el-button type="text" @click="dialogConfig.centerDialogVisible = true">点击打开 Dialog</el-button> -->
    <yyDialog :dialogConfig='dialogConfig'>
      <template slot="bodyArea" class='clearfix'>
        <img class='leftA' src="../../assets/images/index/gxpc_sorry.png" alt="">
        <div class="rigthA">
          <p>很抱歉！</p>
          <p>贵公司暂不满足国家高新申报的基本条件</p>
          <p>您可以进行重新测试。或者拨打客服</p>
          <p>与我司进行联系</p>
          <p>电话：400-878-0703</p>
        </div>
        <div class="btnArea2">
          <el-button @click='testAgain'>重新测试</el-button>
        </div>
      </template>
    </yyDialog>
    <btArea></btArea>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import btArea from '@/components/bottom/index.vue';
import yyDialog from '@/components/dialog/dialog.vue';
import {basicQuestions,submitBasic} from '@/api/index';
export default {
  name: '',
  data () {
    return {
      basicQuestions:'',//基础评估问题列表
      dialogConfig:{
        centerDialogVisible:false
      },
      loading:false,
    }
  },
  components:{
    btArea,
    yyDialog
  },
  computed: {
     ...mapState([

    ])
  },
  methods: {
    submitStep1(){//基本评测提交
      const temp = [];
      this.basicQuestions.map(x=>{
        // console.log('x.answer',x.answer)
        if(x.answer){
          temp.push({answer:x.answer,id:x.id});
        }
      })
      if(temp.length === this.basicQuestions.length){
        this.loading = true;
        submitBasic({param:temp}).then(res=>{
          // console.log('res',res)
          this.loading = false;
          if(!res.data.passed){
            this.dialogConfig.centerDialogVisible = true;
            // this.$router.push({path:'/newRate'})
          }else{
            this.$router.push({path:'/newRate'})
          }
        }).catch(err=>{
          this.loading = false;
        })
      }else{
        this.$alert('您还有题目未完成，无法评估，请继续作答。', '提示', {
          confirmButtonText: '确定',
          type:'warning',
          closeOnClickModal:true,
          callback: action => {
          }
        });
      }
    },
    testAgain(){
      this.basicQuestions.map(x=>{
        x.answer = '';
      })
      this.dialogConfig.centerDialogVisible = false;
    }
  },
  mounted(){
    this.loading = true;
    basicQuestions().then(res=>{
      // console.log('res',res)
      this.basicQuestions = res.data;
      this.loading = false;
      // this.basicQuestions[0].options.push({id:3,content:'最近一年销售收入在5,000万元至2亿元（含）的企业，比例不低于4%；'});
      // this.basicQuestions[0].options.push({id:3,content:'1 项及以上 （Ⅰ类：包括发明专利（含国防专利、植物新品种、国家级农作物品种、国家新药、国家一级中药保护品种、集成电路布图设计专有权等）'})
      // this.basicQuestions[0].options.push({id:3,content:'强'})
      // this.basicQuestions[0].options.push({id:4,content:'fdf强'})
      // this.basicQuestions[0].options.push({id:4,content:'jklf强'})
      // this.basicQuestions[0].options.shift();
      // this.basicQuestions[0].options.shift();
    }).catch(err=>{
      this.loading = false;
    })
  },
}
</script>

<style lang='scss' scoped>
.root{
  background-color: #fff;
  .yy-steps{
    padding: 70px;
  }
  .questions{
    text-align: left;
    width: 80.5%;
    margin: 0 auto;
    .queTitle{
      .el-radio-group{
        padding-left:23px;
        .el-radio{
            padding-right:80px!important;
        }
        .moreOptions{
            display: block;
            margin-bottom: 10px;    
        }
        .el-radio+.el-radio{
            margin-left: 0!important;
        }
      }
      &>div{
        line-height: 30px;
        padding: 0 0 10px 0;
      }
    }
  }
  .btnArea{
    padding:100px;
    button{
      width:25%;
      height:56px;
      background:rgba(74,144,226,1);
      box-shadow:0px 4px 20px 0px rgba(74,144,226,0.5);
      font-size:18px;
      font-family:SourceHanSansCN-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
    }
  }
  .leftA{
    width:30%;
    display: inline-block;
  }
  .rigthA{
    width:70%;
    display: inline-block;
    vertical-align: top;
    line-height: 35px;
    padding-left: 50px;
    box-sizing: border-box;
    vertical-align: middle;
    p{
      &:nth-child(1){
        font-size:24px;
        font-family:SourceHanSansCN-Bold;
        font-weight:bold;
        color:rgba(53,60,69,1);
      }
      &:nth-child(2){
        font-size:14px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(85,85,85,1);
      }
      &:nth-child(3){
        font-size:14px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(85,85,85,1);
      }
      &:nth-child(5){
        font-size:24px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(80,204,168,1);
      }
    }
  }
  .btnArea2{
    text-align: center;
    padding: 50px 0 20px 0;
    button{
      border:none;
      font-size:20px;
      font-family:SourceHanSansCN-Bold;
      font-weight:bold;
      color:rgba(255,255,255,1);
      width:240px;
      height:54px;
      background:rgba(80,204,168,1);
    }
  }
}



</style>
