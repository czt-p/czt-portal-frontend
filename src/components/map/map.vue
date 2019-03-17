<template>
  <div class='root'>
    <div id="container"></div> 
  </div>
</template>

<script>
// import MapLoader from '@/assets/AMap.js'
import {mapState, mapActions} from 'vuex';
export default {
  name: '',
  data () {
    return {

    }
  },
  props:['mapStyle'],
  computed: {
     ...mapState([

    ])
  },
  methods: {

  },
  mounted(){
    // MapLoader().then(AMap=>{
    //   console.log('AMap',AMap);
      
      var map = new AMap.Map('container', {
          zoom:16,//级别
          // center: [120.145851,30.279028],//中心点坐标
          center: [120.24938632462309,30.309895193266115],//中心点坐标
          viewMode:'3D'//使用3D视图
      });
      // 创建一个 Marker 实例：
      var marker = new AMap.Marker({
          position: new AMap.LngLat(120.24938632462309,30.309895193266115),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          title: '杭州策知通科技网络有限公司'
      });

      // 将创建的点标记添加到已有的地图实例：
      map.add(marker);
    // }).catch(err=>{
    //   console.log('err',err);
      
    // })
  },
}
</script>

<style lang='scss' scoped>
#container {width:100%; height: 400px; }  
</style>
