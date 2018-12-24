import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'

Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: "首页", //要现实的title
        show: true               //设置导航隐藏显示
      },
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: "关于我们", //要现实的title
        show: true //设置导航隐藏显示
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
  NProgress.done()
})
export default router;