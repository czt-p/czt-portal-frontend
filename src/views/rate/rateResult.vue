<template>
  <div class='root'>
    <el-steps :active="3" align-center class='yy-steps'>
      <el-step title="基础评估"></el-step>
      <el-step title="高新评分"></el-step>
      <el-step title="评估结果及建议"></el-step>
    </el-steps>
    <div class="resultArea animated fadeIn" >
      <!-- <div class="peopleImg">
        <img src="../../assets/images/index/gxpc_img_people.png" alt="">
      </div> -->
      <div class="reRate">
        <div class='topTitle'>初步评估分值:</div>
        <div class="rates">{{`${$route.query.score}`}}分</div>
      </div>
      <el-button @click="openDialog">点击获取详细分析报告</el-button>
    </div>
    <yyDialog :dialogConfig='dialogConfig' ref='resultDialog' >
      <template slot='bodyArea'>
        <div style='text-align: center;font-size:24px;font-family:SourceHanSansCN-Bold;font-weight:bold;color:rgba(53,60,69,1);'>
            获取详细分析报告
        </div>
        <el-form ref="form1" :model="form" :rules="rules" label-width="120px" style='padding-top:40px'>
          <el-form-item label="公司名称：" prop="companyName">
            <el-input v-model="form.companyName" placeholder="请输入贵公司名称"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：" prop="telephone">
            <el-input v-model="form.telephone" placeholder="请输入联系电话"></el-input>
          </el-form-item>
          <el-form-item >
            <div class='tips'>我们将以短信的形式发送给您评估报告<br>本次服务短信免费</div>
          </el-form-item>
          <div  class='btnArea'>
            <el-button type="primary" @click="onSubmit">开始发送</el-button>
          </div>
        </el-form>
      </template>
    </yyDialog>
    <!-- <el-button type="text" @click="dialogConfig.centerDialogVisible = true" >点击打开 Dialog</el-button> -->
    <btArea></btArea>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import btArea from '@/components/bottom/index.vue';
c
import {getResult} from '@/api/index';
export default {
  name: '',
  data () {
    return {
      dialogConfig:{
        centerDialogVisible:false
      },
      form: {
        companyName: '',
        telephone: '',
      },
      rules: {
        companyName: [
          { required: true, message: '请输入公司名称', trigger: 'blur' },
        ],
        telephone: [
          { required: true, message: '请输入联系电话', trigger: 'blur' },
            { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号码' }
        ],
      },
      // formEl:'',//form的实例组件
      transData:{
        formEl:''
      }
    }
  },
  components:{
    btArea,
    yyDialog,
  },
  computed: {
     ...mapState([

    ])
  },
  methods: {
    openDialog(){
      this.dialogConfig.centerDialogVisible = true;
      this.form.companyName = '';
      this.form.telephone = '';
      this.$nextTick(()=>{
        this.$refs['form1'].clearValidate();
      })
    },
    onSubmit() {
      this.$nextTick(()=>{
        // console.log('this.$refs[]',this.$refs['form1'])
        this.$refs['form1'].validate((valid) => {
          if (valid) {
            getResult({param:this.form}).then(res=>{
              // console.log('res',res)
              this.dialogConfig.centerDialogVisible = false;
              this.$alert(res.success?'已发送，请稍后查收短信。':res.msg, '提示', {
                confirmButtonText: '确定',
                type:'warning',
                closeOnClickModal:true,
                callback: action => {
                }
              });
            }).catch(err=>{
              this.dialogConfig.centerDialogVisible = false;
              this.$alert(`${err.msg}`, '提示', {
                confirmButtonText: '确定',
                type:'warning',
                closeOnClickModal:true,
                callback: action => {
                }
              });
            })
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });

      })
    },
  
  },
  watch:{
   
  },
  mounted(){
    $('.resultArea').height( $('.resultArea').width()*439/768);
    // console.log(this.$route)
    this.$nextTick(()=>{
      this.transData.formEl = this.$refs['form1']
    })
  },
}
</script>

<style lang='scss' scoped>
.root{
  background-color: #f7f7f7;
  .yy-steps{
    padding: 70px;
  }
  .resultArea{
      width:41.5%;
      max-height: 439px;
      background: url(../../assets/images/index/gxpc_img1.png);
      margin: 0 auto;
      margin-bottom: 10%;
      position:relative;     
      background-size: 100% 100%;
      .peopleImg{
        width: 10%;
        display: inline-block;
        position: absolute;
        bottom: 18%;
        right: 12%;
      }
      .reRate{
        position: absolute;
        width: 57%;
        text-align: left;
        left: 19%;
        // top: 20%;
        .topTitle{
          font-size:18px;
          font-family:SourceHanSansCN-Medium;
          font-weight:500;
          color:rgba(53,60,69,1);
        }
        .rates{
          padding-left: 17%;
          padding-top: 9%;
          font-size: 64px;
          font-family: SourceHanSansCN-Heavy;
          font-weight: 800;
          color: #F57223;
          line-height: 96px;
        }
      }
      button{
        height:42px;
        background:#F57223;
        box-shadow:0px 4px 20px 0px rgba(245,166,35,1);
        font-size:18px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        position: absolute;
        width: 40%;
        bottom: 27%;
        left: 19%;
        border:none;
      }
  }
  .btnArea{
    text-align:center;
    button{
      width:240px;
      height:54px;
      border:none;
      background:rgba(80,204,168,1);
    }
  }
  .tips{
    font-size:12px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(208,47,47,1);
    line-height:20px;
  }
}



</style>
