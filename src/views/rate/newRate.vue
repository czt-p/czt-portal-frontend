<template>
  <div class='root' v-loading='loading'>
    <el-steps :active="2" align-center class='yy-steps'>
      <el-step title="基础评估"></el-step>
      <el-step title="高新评分"></el-step>
      <el-step title="评估结果及建议"></el-step>
    </el-steps>
    <ul class='questions'>
      <li class='queTitle animated fadeIn' v-for="(item,index) in highQuestionsList" :key='index'>
        <div>{{`${index+1}、${item.content}`}}</div>
        <el-radio-group v-model="item.answer">
            <el-radio :label="x.id" v-for='(x,num) in item.options' :key='num' :class="[item.options.length>2 && x.content.length>30?'moreOptions':'']">{{x.content}}</el-radio>
        </el-radio-group>
      </li>
      <!-- <div>
        <li class='queTitle'>
          <div>1、知识产权数量？</div>
          <div class='radios '>
            <el-checkbox-group v-model="form.No0">
                <el-checkbox  false-label='null' true-label="0"  name="state">
                  1 项及以上 （Ⅰ类：包括发明专利（含国防专利、植物新品种、国家级农作物品种、国家新药、国家一级中药保护品种、集成电路布图设计专有权等）
                </el-checkbox>
                <el-checkbox  false-label='null' true-label="1" name="state">
                  5 项及以上 （Ⅱ类：包括实用新型专利、外观设计专利、软件著作权等（不含商标））
                </el-checkbox>
                <el-checkbox  false-label='null' true-label="2" name="state">
                  3-4 项及以上 （Ⅱ类：包括实用新型专利、外观设计专利、软件著作权等（不含商标））
                </el-checkbox>
                <el-checkbox  false-label='null' true-label="3" name="state">
                  1-2 项及以上 （Ⅱ类：包括实用新型专利、外观设计专利、软件著作权等（不含商标））
                </el-checkbox>
                <el-checkbox  false-label='null' true-label="4" name="state">
                  0项
                </el-checkbox>
            </el-checkbox-group> 
          </div>
        </li>
        <li class='queTitle'>
          <div>2、 知识产权获得方式？</div>
          <div class='radios'>
            <el-checkbox-group v-model="form.No1">
                <el-checkbox  false-label='null' true-label="0"  name="state">
                  仅有自主研发
                </el-checkbox>
                <el-checkbox  false-label='null' true-label="1" name="state">
                  既有自主研发也有受让、受赠和并购
                </el-checkbox>
                <el-checkbox  false-label='null' true-label="2" name="state">
                  仅有受让、受赠和并购等
                </el-checkbox>
            </el-checkbox-group> 
          </div>
        </li>
        <li class='queTitle'>
          <div>3、知识产权与公司的主营业务的关联性？</div>
          <div class='radios'>
            <el-checkbox-group v-model="form.No2">
                <el-checkbox  false-label='null' true-label="0"  name="state">强</el-checkbox>
                <el-checkbox  false-label='null' true-label="1" name="state">较强</el-checkbox>
                <el-checkbox  false-label='null' true-label="2" name="state">一般</el-checkbox>
                <el-checkbox  false-label='null' true-label="3" name="state">较弱</el-checkbox>
                <el-checkbox  false-label='null' true-label="4" name="state">无</el-checkbox>
            </el-checkbox-group> 
          </div>
        </li>
        <li class='queTitle'>
          <div>4、近三年科技成果转化数量年平均几项？</div>
          <div class='radios'>
            <el-checkbox-group v-model="form.No3">
                <el-checkbox  false-label='null' true-label="0"  name="state">6项及以上</el-checkbox>
                <el-checkbox  false-label='null' true-label="1" name="state">5项</el-checkbox>
                <el-checkbox  false-label='null' true-label="2" name="state">4项</el-checkbox>
                <el-checkbox  false-label='null' true-label="3" name="state">3项</el-checkbox>
                <el-checkbox  false-label='null' true-label="4" name="state">2项</el-checkbox>
                <el-checkbox  false-label='null' true-label="5" name="state">1项</el-checkbox>
                <el-checkbox  false-label='null' true-label="6" name="state">暂无</el-checkbox>
            </el-checkbox-group> 
          </div>
        </li>
        <li class='queTitle'>
          <div>5、企业是否建立了研发组织管理制度并有效实施?</div>
          <div class='radios'>
            <el-checkbox-group v-model="form.No4">
                <el-checkbox  false-label='null' true-label="true"  name="state">是</el-checkbox>
                <el-checkbox  false-label='null' true-label="false" name="state">否</el-checkbox>
            </el-checkbox-group> 
          </div>
        </li>
        <li class='queTitle'>
          <div>6、近三年企业是否签订有效的产学研协议?</div>
          <div class='radios'>
            <el-checkbox-group v-model="form.No5">
                <el-checkbox  false-label='null' true-label="true"  name="state">是</el-checkbox>
                <el-checkbox  false-label='null' true-label="false" name="state">否</el-checkbox>
            </el-checkbox-group> 
          </div>
        </li>
        <li class='queTitle'>
          <div>7、近三年净资产增长率是多少？</div>
          <div class='radios'>
            <el-checkbox-group v-model="form.No6">
                <el-checkbox  false-label='null' true-label="0"  name="state">≥35%</el-checkbox>
                <el-checkbox  false-label='null' true-label="1" name="state">25%(含)~35%</el-checkbox>
                <el-checkbox  false-label='null' true-label="2" name="state">15%（含）~25%</el-checkbox>
                <el-checkbox  false-label='null' true-label="3" name="state">5% (含)~15%</el-checkbox>
                <el-checkbox  false-label='null' true-label="4" name="state">0~5%</el-checkbox>
                <el-checkbox  false-label='null' true-label="5" name="state">≤0</el-checkbox>
            </el-checkbox-group> 
          </div>
        </li>
      </div> -->
    </ul>
    <div class="btnArea">
      <el-button @click="submitStep2">查看评估报告</el-button>
    </div>
    <btArea></btArea>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import btArea from '@/components/bottom/index.vue';
import {highQuestions,submitHigh,getSeoConfig} from '@/api/index';
export default {
  name: 'newRate',
  metaInfo(){
    return{
      title: this.seoConfig.title, // set a title
      meta: this.seoConfig.meta
    }
  },
  data () {
    return {
      highQuestionsList:[],//高新问题列表
      loading:true,
      dialogConfig:{
        centerDialogVisible:false
      },
    }
  },
  components:{
    btArea,
  },
  computed: {
     ...mapState([

    ])
  },
  methods: {
    submitStep2(){//基本评测提交
      // this.$router.push({path:'/rateResult',query:{score:80}})
      // return false;
      const temp = [];
      this.highQuestionsList.map(x=>{
        // console.log('x.answer',x.answer)
        if(x.answer){
          temp.push({answer:x.answer,id:x.id});
        }
      })
      if(temp.length === this.highQuestionsList.length){
        this.loading = true;
        submitHigh({param:temp}).then(res=>{
          // console.log('res',res)
          this.loading = false;
          if(res.success){
            // this.dialogConfig.centerDialogVisible = true;
            this.$router.push({path:'/rateResult',query:{score:res.data.score}})
          }else{
            this.$alert(`${res.msg}`||'网络错误，请刷新重试。', '提示', {
              confirmButtonText: '确定',
              type:'warning',
              closeOnClickModal:true,
              callback: action => {
              }
            });
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
  },
  mounted(){
    //获取seo配置
    getSeoConfig(this.$options.name).then(res=>{
      // console.log('res',res);
      res.data&& res.data.meta?this.seoConfig = res.data:'';
    })
    this.loading = true;
    highQuestions().then(res=>{
      // console.log('res',res)
      this.loading = false;
      this.highQuestionsList = res.data;
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
            padding-right:70px!important;
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
}



</style>
