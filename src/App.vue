<template>
  <div id="app">
    <topHeader></topHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import topHeader from './components/header/index.vue'
export default {
  name: 'app',
  components: {
    topHeader,
  },
  watch:{
    // '$route':{
    //   handler:function(val){
    //     if(val.meta.title!='首页'){
    //       $('#app').css({'paddingTop':'70px'});
    //     }else{
    //       $('#app').css({'paddingTop':'0px'});
    //     }
    //   }
    // }
  },
  mounted(){
    
  }
}
</script>

<style>
/* html,body{
  height:100%;

} */
#app {
  font-family: SourceHanSansCN-Bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  padding-bottom: 376px;
  background: #f7f7f7;
  min-height:100%;
  box-sizing: border-box;
}
</style>
