import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'

Vue.use(Router)

 const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/home.html',
    },
    {
      path: '/home.html',
      name: 'home',
      meta: {
        title: "首页", //要现实的title
        show: true               //设置导航隐藏显示
      },
      component: () => import('./views/Home.vue')
    },
    {
      path: '/evaluating.html',
      name: 'evaluating',
      meta: {
        title: "高企评测", //要现实的title
        show: true               //设置导航隐藏显示
      },
      component: () => import('./views/rate/evaluating.vue'),
    },
    {
      path: '/newRate.html',
      name: 'newRate',
      meta: {
        title: "高新评分", //要现实的title
        show: true               //设置导航隐藏显示
      },
      component: () => import('./views/rate/newRate.vue'),
    },
    {
      path: '/rateResult.html',
      name: 'rateResult',
      meta: {
        title: "评估结果及建议", //要现实的title
        show: true               //设置导航隐藏显示
      },
      component: () => import('./views/rate/rateResult.vue'),
    },
    {
      path: '/subsidize.html',//高企资助查询
      name: 'rateResult',
      meta: {
        title: "高企资助查询", //要现实的title
        show: true               //设置导航隐藏显示
      },
      component: () => import('./views/subsidize/index.vue'),
    },
    {
      path: '/subsidize/detail.html', //高企资助查询
      name: 'subsidizeDetail',
      meta: {
        title: "高企资助查询详情", //要现实的title
        show: true //设置导航隐藏显示
      },
      component: () => import('./views/subsidize/detail.vue'),
    },
    {
      path: '/costing.html',//高企成本核算
      name: 'costing',
      meta: {
        title: "高企成本核算", //要现实的title
        show: true               //设置导航隐藏显示
      },
      component: () => import('./views/costing/index.vue'),
    },
    {
      path: '/FAQs.html',//高企问答
      name: 'FAQs',
      meta: {
        title: "高企问答", //要现实的title
        show: true               //设置导航隐藏显示
      },
      component: () => import('./views/FAQs/index.vue'),
    },
    {
      path: '/FAQs/detail.html', //高企资助查询
      name: 'FAQsDetail',
      meta: {
        title: "高企问答查询详情", //要现实的title
        show: true //设置导航隐藏显示
      },
      component: () => import('./views/FAQs/detail.vue'),
    },
    {
      path: '/about.html',
      name: 'about',
      meta: {
        title: "关于我们", //要现实的title
        show: true //设置导航隐藏显示
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/aboutUs/About.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  NProgress.start();
  window.scrollTo(0,0);
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
  NProgress.done()
})
export default router;