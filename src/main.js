import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import 'normalize.css' // A modern alternative to CSS resets
import './style/global.scss' // A modern alternative to CSS resets
import 'font-awesome/css/font-awesome.css'
import animate from 'animate.css'
import util from './util/util'
import  './style/quill.bubble.css'
import  './style/quill.core.css'
import  './style/quill.snow.css'
import MetaInfo from 'vue-meta-info'
Vue.use(MetaInfo)
Vue.directive('posInt', function(el){
  var input = el;
  input.onkeyup = function (e) {
    if (e.target.value.length == 1) {
      e.target.value = e.target.value.replace(/[^1-9]/g, '');
    } else {
      e.target.value = e.target.value.replace(/[^\d]/g, "");
    }
  };
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'))
    window.ppSettings = {
      app_uuid: '1462aa48-1d25-11e9-b2c7-00163e0c79f6'
    };
    (function () {
      var w = window,
        d = document;

      function l() {
        var a = d.createElement('script');
        a.type = 'text/javascript';
        a.async = !0;
        a.charset = 'utf-8';
        a.src = 'https://ppmessage.cn/ppcom/assets/pp-library.min.js';
        // a.setAttribute('defer','defer');
        var b = d.getElementsByTagName('script')[0];
        b.parentNode.insertBefore(a, b);
        setTimeout(() => {
          // console.log("document.querySelector('#pp-launcher-button')", document.querySelector(
          //   '#pp-launcher-button'))
          if (document.querySelector('#pp-launcher-button')) document.querySelector('#pp-launcher-button').innerHTML = '在线客服';
        }, 6500);
      }
      l();
    })();
  }
}).$mount('#app')
