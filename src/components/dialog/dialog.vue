<template>
  <div class='yydialog'>
    <el-dialog
        title=""
        :visible.sync="dialogConfig.centerDialogVisible"
        width="35%"
        @open='open'
        center>
        <slot name='bodyArea' ></slot>
    </el-dialog>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
  name: '',
  data () {
    return {
        // centerDialogVisible: false
    }
  },
  props:['dialogConfig',],
  computed: {
     ...mapState([

    ])
  },
  methods: {
    open(){
      // console.log('open',this.transData)
      // if(this.transData){
      //   for(let x in this.transData){
      //     this.transData[x] = '';
      //   }
      // }
    }
  },
  mounted(){
  },
}
</script>

<style lang='scss' >
  .yydialog .el-form-item__label{
    font-size:16px!important;
    font-family:SourceHanSansCN-Medium!important;
    font-weight:500!important;
    color:rgba(53,60,69,1)!important;
  }
  .tips{
    font-size:12px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(208,47,47,1);
    line-height:20px;
  }
  .btnArea{
    text-align: center;
  }
</style>
