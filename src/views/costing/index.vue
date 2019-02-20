<template>
  <div class='costing'>
    <div class="wrap">
      <el-form ref="form" :model="form" label-width="200px" label-position='left'>
        <div class="consulting">
          <div class="title">咨询费用</div>
          <el-form-item label="企业所属高新领域：" prop="consultCost.highField" :rules="[{ required: true, message: '请选择企业所属高新领域', trigger: 'change' },]">
            <el-select v-model="form.consultCost.highField " clearable  placeholder="请选择" >
              <el-option :label="item.value" :value="item.key" v-for='(item,index) in highField' :key='index'></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="企业财务成长性情况：" prop="consultCost.financialGrowth" :rules="[{ required: true, message: '请选择企业财务成长性情况', trigger: 'change' },]">
            <el-select v-model="form.consultCost.financialGrowth" clearable placeholder="请选择" >
              <el-option :label="item.value" :value="item.key" v-for='(item,index) in financialGrowth' :key='index'></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="企业最近一年营业收入：" prop="consultCost.recentYearIncoming" :rules="[{ required: true, message: '请选择企业最近一年营业收入', trigger: 'change' },]">
            <el-select v-model="form.consultCost.recentYearIncoming" clearable placeholder="请选择" >
              <el-option :label="item.value" :value="item.key" v-for='(item,index) in recentYearIncoming' :key='index'></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="consulting">
          <div class="title">专项审计报告</div>
          <el-form-item label="预计申请年度：" prop='specialAuditCost.applyYear' :rules="[{ required: true, message: '请选择预计申请年度', trigger: 'change' },]">
            <el-select v-model="form.specialAuditCost.applyYear" @change='setThreeYears' clearable placeholder="请选择">
              <el-option :label="x.label" :value="x.value" v-for='(x,i) in nearYears' :key='i'></el-option>
            </el-select>
          </el-form-item>
          <div class="inline inlineInput moreInput" v-for='(x,i) in form.specialAuditCost.specialAuditList' :key='i'>
            <el-form-item label="" label-width='0'>
              <el-input class='rightOne' readonly  v-model="x.year"></el-input>年度
            </el-form-item>
            <el-form-item label="营业收入：" label-width='95px' :prop="'specialAuditCost.specialAuditList.'+i+'.incoming'" 
              :rules="[
                { required: true, message: '请输入营业收入'}, 
                { type: 'number', message: '营业收入必须为数字值'}
              ]">
              <el-input class='rightOne' type="number" min='0' v-model.number="x.incoming"></el-input>万元
            </el-form-item>
            <el-form-item label="其中：" label-width='65px' :prop="'specialAuditCost.specialAuditList.'+i+'.type'" 
              :rules="[
                { required: true, message: '请选择费用类型'}, 
              ]">
              <el-select v-model="x.type" placeholder="请选择" @change='getRdOrManager(i)'>
                <el-option label="研发费用" value="0"></el-option>
                <el-option label="管理费用" value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="投入金额：" label-width='95px' v-if='x.type==0' :prop="'specialAuditCost.specialAuditList.'+i+'.rdCost'" 
              :rules="[
                { required: true, message: '请输入投入金额'}, 
                { type: 'number', message: '投入金额必须为数字值'}
              ]">
              <el-input class='rightOne' min='0' type='number'  v-model.number="x.rdCost"></el-input>万元
            </el-form-item>
            <el-form-item label="投入金额：" label-width='95px' v-else :prop="'specialAuditCost.specialAuditList.'+i+'.managerCost'" 
              :rules="[
                { required: true, message: '请输入投入金额'}, 
                { type: 'number', message: '投入金额必须为数字值'}
              ]">
              <el-input class='rightOne' min='0' type='number' v-model.number="x.managerCost"></el-input>万元
            </el-form-item>
          </div>
          <div class="tips">根据高新技术企业申请规定，需要至少申报申请年度最近3年的营业收入及研发费用（管理费用）投入情况</div>
        </div>
        <div class="consulting">
          <div class="title">知识产权费用</div>
          <el-form-item label="知识产权费用需要测算：" prop="resource">
            <el-radio-group v-model="form.ipCost.isCheck">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <div class="IPtype inline" v-for='(x,i) in form.ipCost.ipList' :key='i'>
            <el-form-item label="知识产权类型：" :prop="'ipCost.ipList.'+i+'.type'" 
              :rules="form.ipCost.isCheck==1?[
                { required: true, message: '请选择知识产权类型'}, 
              ]:[]">
              <el-select v-model="x.type" clearable placeholder="请选择" :disabled="form.ipCost.isCheck==0">
                <el-option :label="item.value" :value="item.key" v-for='(item,index) in ipType' :key='index'></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="知识产权数量：" label-width="125px" :prop="'ipCost.ipList.'+i+'.quantity'"
              :rules="form.ipCost.isCheck==1?[
                { required: true, message: '请输入知识产权数量'}, 
              ]:[]">
              <el-input class='rightOne posInt' v-model.number="x.quantity" min='0'  type='number' :disabled="form.ipCost.isCheck==0" v-posInt></el-input>个
            </el-form-item>
            <el-button type="primary" v-if='i == 0' :disabled="form.ipCost.isCheck==0"  icon='el-icon-plus' class='addIP' @click="addIpList">新增</el-button>
            <el-button type="primary" style='background:#f44336;' v-else :disabled="form.ipCost.isCheck==0"  icon='el-icon-delete' class='addIP' @click="removeIPList(i)">删除</el-button>
          </div>
        </div>
        <div class="consulting">
          <div class="title">年度审计报告费用</div>
          <el-form-item label="年度审计报告费用需要测算：">
            <el-radio-group v-model="form.annualAuditCost.isCheck">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="预计申请年度：" prop='annualAuditCost.applyYear'
            :rules="form.annualAuditCost.isCheck==1?[
                { required: true, message: '请选择预计申请年度'}, 
              ]:[]">
            <el-select v-model="form.annualAuditCost.applyYear" @change='setThreeYears2' clearable  placeholder="请选择" :disabled="form.annualAuditCost.isCheck==0">
              <el-option :label="x.label" :value="x.value" v-for='(x,i) in nearYears' :key='i'></el-option>
            </el-select>
          </el-form-item>
          <div class="inline inlineInput" v-for='(x,i) in form.annualAuditCost.annualAuditList' :key='i'>
            <el-form-item label="" label-width='0'>
              <el-input class='rightOne' :clearable='i==2' readonly :disabled="form.annualAuditCost.isCheck==0" v-model="x.year"></el-input>年度
            </el-form-item>
            <el-form-item label="资产总额：" label-width='95px' :prop="'annualAuditCost.annualAuditList.'+i+'.amount'" 
              :rules="form.annualAuditCost.isCheck==1&&i<2?[
                { required: true, message: '请输入资产总额'}, 
                { type: 'number', message: '资产总额必须为数字值'}
              ]:[]">
              <el-input class='rightOne' :disabled="form.annualAuditCost.isCheck==0" min='0' type='number' v-model.number="x.amount"></el-input>万元
            </el-form-item>
            <el-button type="primary" v-if='form.annualAuditCost.annualAuditList.length==2 && i == 0' :disabled="form.annualAuditCost.isCheck==0" icon='el-icon-plus' class='addIP'  @click="addAnnualAuditList(i)">新增</el-button>
            <el-button type="primary" style='background:#f44336;' v-if='i==2' :disabled="form.annualAuditCost.isCheck==0" icon='el-icon-delete' class='addIP'  @click="romoveAnnualAuditList(i)">删除</el-button>
          </div>
          <div class='tips'>根据高架高新技术企业申请规定，需要至少申报申请年度最近2年的资产总额数据</div>
        </div>
        <div class="consulting">
          <div class="title">其他费用</div>
          <el-form-item label="其他费用需要测算：">
            <el-radio-group v-model="form.otherCost.isCheck">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <div class="other inline" v-for='(x,i) in form.otherCost.otherList' :key='i'>
            <el-form-item label="费用类型：" :prop="'otherCost.otherList.'+i+'.type'" 
              :rules="form.otherCost.isCheck==1?[
                { required: true, message: '请选择费用类型'}, 
              ]:[]">
              <el-select v-model="x.type" placeholder="请选择" :disabled="form.otherCost.isCheck==0">
                <el-option :label="item.value" :value="item.key" v-for='(item,index) in otherCostType' :key='index'></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所需数量：" label-width="120px" :prop="'otherCost.otherList.'+i+'.quantity'" 
              :rules="form.otherCost.isCheck==1?[
                { required: true, message: '请输入所需数量'}, 
              ]:[]">
              <!-- <el-input-number class='rightOne' v-model="x.quantity" controls-position="right" :min="0" :disabled="form.otherCost.isCheck==0"></el-input-number>个 -->
              <el-input class='rightOne posInt' v-model.number="x.quantity"  type='number' :disabled="form.otherCost.isCheck==0" v-posInt></el-input>个
            </el-form-item>
            <el-button type="primary" v-if='i == 0' :disabled="form.otherCost.isCheck==0" icon='el-icon-plus' class='addIP'  @click="addOtherCost">新增</el-button>
            <el-button type="primary" style='background:#f44336;' v-else :disabled="form.otherCost.isCheck==0" icon='el-icon-delete' class='addIP'  @click="romoveOtherList(i)">删除</el-button>
          </div>
        </div>
      </el-form>
      <div class='btnWrap'>
        <el-button class='calc' @click='calc'>开始核算</el-button>
      </div>
    </div>
    <btArea></btArea>
    <yyDialog :dialogConfig='dialogConfig' ref='resultDialog' >
      <template slot='bodyArea'>
        <!-- <div style='text-align: center;font-size:24px;font-family:SourceHanSansCN-Bold;font-weight:bold;color:rgba(53,60,69,1);'>
            获取详细分析报告
        </div> -->
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
            <el-button type="primary" @click="sendText">开始发送</el-button>
          </div>
        </el-form>
      </template>
    </yyDialog>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import btArea from '@/components/bottom/index.vue';
import yyDialog from '@/components/dialog/dialog.vue';
import {financialGrowth,highField,ipType,otherCostType,recentYearIncoming,costAccount} from '@/api/index';
export default {
  name: '',
  data () {
    var validPhone=(rule, value,callback)=>{
        if (!value){
            callback(new Error('请输入电话号码'))
        }else  if (!(/^1[3|4|5|6|7|8][0-9]\d{8}$/).test(value.trim())){
          callback(new Error('请输入正确的11位手机号码'))
        }else {
            callback()
        }
    }
    return {
      form:{
        consultCost:{
          financialGrowth:'',//企业财务成长性情况：
          highField:'',//企业所属高新领域：
          recentYearIncoming:'',//企业最近一年营业收入：
        },
        ipCost: {
          isCheck:1,
          ipList: [
            {
              quantity: '',
              type: ""
            }
          ]
        },
        otherCost:{
          isCheck:1,
          otherList:[
            {
              quantity:'',//所需数量
              type:'',//其他费用类型
            },
            // {
            //   quantity:'',//所需数量
            //   type:'',//其他费用类型
            // }
          ]
        },
        specialAuditCost: {//专项审核报告
          applyYear: '',
          specialAuditList: [
            {
              incoming: '',
              managerCost: '',
              rdCost: '',
              year: '',
              type:'0'
            },
            {
              incoming: '',
              managerCost: '',
              rdCost: '',
              year: '',
              type:'0'
            },
            {
              incoming: '',
              managerCost: '',
              rdCost: '',
              year: '',
              type:'0'
            }
          ]
        },
        annualAuditCost: {//年度审计报告费用
          annualAuditList: [
            {
              amount: '',
              year: ''
            },
            {
              amount: '',
              year: ''
            },
            {
              amount: '',
              year: ''
            },
          ],
          applyYear: '',
          isCheck:1
        },
        companyName:'',
        telephone:''
      },
      highField:'',//企业所属高新领域：
      financialGrowth:'',//企业财务成长性情况：
      recentYearIncoming:'',//企业最近一年营业收入：
      ipType:'',//知识产权类型：
      otherCostType:'',//其他费用类型
      nearYears:[],//专项审计报告预计申请年度：
      dialogConfig:{
        centerDialogVisible:false
      },
      rules: {
        companyName: [
          { required: true, message: '请输入公司名称', trigger: 'blur' },
        ],
        telephone: [
          { required: true, validator: validPhone, trigger: 'blur' },
        ],
      },
    }
  },
  computed: {
     ...mapState([

    ]),
    IPCheck(){
      return this.form.ipCost.isCheck;
    },
    annualAuditCostCheck(){
      return this.form.annualAuditCost.isCheck;
    },
    otherCheck(){
      return this.form.otherCost.isCheck;
    }
  },
  components:{
    btArea,
    yyDialog,
  },
  methods: {
    addIpList(){
      this.form.ipCost.ipList.length<this.ipType.length?this.form.ipCost.ipList.push({quantity:'',type:''}):'';
    },
    removeIPList(index){//移除知识产权
      this.form.ipCost.ipList.map((x,i)=>{
        index == i?this.form.ipCost.ipList.splice(i,1):'';
      })
    },
    romoveOtherList(index){//移除其他费用
      this.form.otherCost.otherList.map((x,i)=>{
        index == i?this.form.otherCost.otherList.splice(i,1):'';
      })
    },
    romoveAnnualAuditList(index){//移除年度审计报告费用
      this.form.annualAuditCost.annualAuditList.map((x,i)=>{
        index == i?this.form.annualAuditCost.annualAuditList.splice(i,1):'';
      })
    },
    addAnnualAuditList(){//新增年度审计报告费用
      if(this.form.annualAuditCost.annualAuditList.length==2){
        let year = this.form.annualAuditCost.annualAuditList[1].year-1;
        this.form.annualAuditCost.annualAuditList.push({amount:'',year});
      }
    },
    addOtherCost(){
      this.form.otherCost.otherList.length<this.otherCostType.length?this.form.otherCost.otherList.push({type:'',quantity:''}):'';
    },
    setThreeYears(){//专项审计报告预计申请年度变化时
      if(this.form.specialAuditCost.applyYear){
        let temp = this.form.specialAuditCost.applyYear-1;
        this.form.specialAuditCost.specialAuditList.map(x=>{
          x.year = temp--;
        })
      }else{
        this.form.specialAuditCost.specialAuditList.map(x=>{
          x.year = '';
        })
      }
    },
    setThreeYears2(){//年度审计报告费用
      if(this.form.annualAuditCost.applyYear){
        let temp = this.form.annualAuditCost.applyYear-1;
        this.form.annualAuditCost.annualAuditList.map(x=>{
          x.year = temp--;
        })
      }else{
        this.form.annualAuditCost.annualAuditList.map(x=>{
          x.year = '';
        })
      }
    },
    getRdOrManager(index){
      this.form.specialAuditCost.specialAuditList.map((x,i)=>{
        i==index?x.rdCost = x.managerCost = '':'';
      })
    },
    calc(){
      this.$refs['form'].validate(valid=>{
        // console.log('valid',valid)
        if(valid){
          // let temp = this.form;
          // Object.keys(temp).map(x=>{
          //   // console.log('x',x)
          //   if(temp[x].isCheck == 0){
          //     // console.log('item',x,temp[x])
          //     Object.keys(temp[x]).map(item=>{
          //       if(temp[x][item] instanceof Array){
          //         // console.log('xxxxx',item,temp[x][item])
          //         temp[x][item].map(o=>{
          //           // console.log('temp[x][item][o]',o,temp[x][item][o])
          //           Object.keys(o).map(y=>{
          //             o[y] = '';
          //           })
          //         })
          //       }
          //     })
          //   }
          // })
          this.dialogConfig.centerDialogVisible = true;
        }
      })
    },
    sendText(){
      this.$refs['form1'].validate(valid=>{
        if(valid){
          // console.log('this.form',this.form)
          costAccount({data:this.form}).then(res=>{
            // console.log('res',res)
            this.dialogConfig.centerDialogVisible = false;
            this.$alert(res.success?'已发送，请稍后查收短信。':res.msg, '提示', {
              confirmButtonText: '确定',
              type:'warning',
              closeOnClickModal:true,
              callback: action => {
              }
            });
          })
        }
      })
      
    },
    
  },
  watch:{
      IPCheck(val) {
        if(val == 0){
          this.form.ipCost.ipList.map(v=>{
            Object.keys(v).map(x=>{
              v[x] = ''
            })
            // console.log('v',v)
          })
        }
      },
      annualAuditCostCheck(val) {
        if(val == 0){
          this.form.annualAuditCost.annualAuditList.map(v=>{
            Object.keys(v).map(x=>{
              v[x] = ''
            })
            // console.log('v',v)
          })
        }
      },
      otherCheck(val) {
        if(val == 0){
          this.form.otherCost.otherList.map(v=>{
            Object.keys(v).map(x=>{
              v[x] = ''
            })
            // console.log('v',v)
          })
        }
      }
  },
  mounted(){
    //初始化下拉菜单的选项列表
    let temp = [financialGrowth,highField,ipType,otherCostType,recentYearIncoming];
    let temp2 = ['financialGrowth','highField','ipType','otherCostType','recentYearIncoming'];
    temp.map((x,index)=>{
      x().then(res=>{
        // console.log(index,res,this[temp2[index]])
        this[temp2[index]] = res.data;
      })
    })
    let nowYear = new Date().getFullYear();
    // this.form.specialAuditCost.applyYear = nowYear;
    // console.log('nowYear',nowYear)
    for(let i = 0;i<30;i++){
      let str = nowYear++;
      this.nearYears.push({value:str,label:str})
    }
  },
}
</script>

<style lang='scss' >
.costing{
  .wrap{
    width:86%;
    margin: 60px auto;
    background:#fff;
    padding: 30px;
    text-align: left;
    font-family:SourceHanSansCN-Medium;
    input{
      border-radius:0!important;
    }
    .title{
      border-left: 5px solid #4A90E2;
      padding-left: 10px;
      margin-bottom: 36px;
    }
    .el-form-item__label{
      font-size: 14px;
    }
    .inline{
      .el-form-item{
        display: inline-block;
        margin-right: 100px;
      }
    }
    .addIP{
      background: #50CCA8;
      border: none;
      border-radius: 0;
    }
    .rightOne{
      margin-right:10px;
    }
    .posInt{
      width: 87%!important;
    }
    .inlineInput{
      .el-input{
        width: 200px;
      }
    }
    .moreInput{
      .el-form-item{
        margin-right: 3.5%;
        .el-input,.el-select{
          width:150px;
        }
      }
      .el-form-item:nth-child(4){
        margin-right: 0px!important;
      }
    }
    .tips{
      font-size: 12px;
      font-weight: 400;
      color: rgba(208,47,47,1);
    }
    .consulting{
      margin: 60px 0px;
    }
    .consulting:nth-child(1){
      margin-top: 30px;
    }
    
    .btnWrap{
      text-align: center;
      .calc{
        width:360px;
        height:56px;
        background:rgba(74,144,226,1);
        box-shadow:0px 4px 20px 0px rgba(74,144,226,0.5);
        color:#fff;
        font-size: 18px;
        margin:0 auto;
      }
    }
  }
}
input[type="number"]{
  padding-right:0!important;
}
</style>
