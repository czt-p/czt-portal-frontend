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
  mounted(){
    
  }
}
</script>

<style>
#app {
  font-family: SourceHanSansCN-Bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 70px; */
}
</style>
