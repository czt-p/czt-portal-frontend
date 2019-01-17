<template>
  <div class='FAQsDetail'>
      <div class="wrap">
        <el-button type="primary" circle icon='el-icon-arrow-left' @click='$router.go(-1)'></el-button>
        <div class='title'>{{name}}</div>
        <p class='content'>
            {{detail}}
        </p>
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
      console.log('query',this.$route)
    this.name = this.$route.params.data.question;
    this.detail = this.$route.params.data.answer;
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
.FAQsDetail{
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
            font-weight: 500;
            color: rgba(53,60,69,1);
            padding: 31px;
        }
        P{
            text-indent: 34px;
            font-size:12px;
            line-height: 20px;
            font-family:SourceHanSansCN-Regular;
            font-weight:400;
            color:rgba(53,60,69,1);
        }
    }
}
</style>
