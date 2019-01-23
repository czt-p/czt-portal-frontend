<template>
  <div class='subsidizeDetail'>
      <div class="wrap">
        <el-button type="primary" circle icon='el-icon-arrow-left' @click='$router.go(-1)'></el-button>
        <div class='title' style='width: 80%;margin: 0 auto;'>{{name}}</div>
        <div class='content ql-editor' v-html='detail'>
        </div>
      </div>
      <btArea></btArea>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import btArea from '@/components/bottom/index.vue';
export default {
  name: '',
  data () {
    return {
        name:'',
        detail:'',
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

  },
  mounted(){
    //   console.log('query',this.$route)
    this.name = this.$route.params.content.name;
    this.detail = this.$route.params.content.content;
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
.subsidizeDetail{
    background:rgba(247,247,247,1);
    margin-bottom: 50px;
    .wrap{
        width:80.5%;
        margin: 0 auto;
        padding: 50px;
        box-sizing: border-box;
        background:#fff;
        text-align: left;
        .title{
            font-size: 18px;
            font-family: SourceHanSansCN-Medium;
            font-weight: bold;
            color: rgba(53,60,69,1);
            text-align: center;
            padding-bottom: 31px;
        }
        P{
            text-indent: 34px;
            font-size:14px;
            line-height: 20px;
            font-family:SourceHanSansCN-Regular;
            font-weight:400;
            color:rgba(53,60,69,1);
        }
    }
}
strong{
    font-weight: bold;
}
</style>
