(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e74287b"],{"12c6":function(t,e,o){t.exports=o.p+"assets/img/home_img_gqcbhs.e8fc0f62.png"},"12d1":function(t,e,o){t.exports=o.p+"assets/img/home_icon_gqpc_pre.feace40f.svg"},1491:function(t,e,o){t.exports=o.p+"assets/img/home_logo12.8866d362.png"},"16e3":function(t,e,o){t.exports=o.p+"assets/img/home_logo8.8c0f7b68.png"},"1e0b":function(t,e,o){t.exports=o.p+"assets/img/home_logo4.066a73aa.png"},"21bb":function(t,e,o){"use strict";var n=o("bcc9"),s=o.n(n);s.a},"29c9":function(t,e,o){},"365c":function(t,e,o){"use strict";o("cadf"),o("551c"),o("097d");var n=o("bc3a"),s=o.n(n),i=o("5c96"),a=(o("c0d6"),s.a.create({baseURL:"",timeout:2e4}));a.interceptors.request.use(function(t){return t},function(t){console.log("错误："),Promise.reject(t)}),a.interceptors.response.use(function(t){var e=t.data;return 200!==t.status?(Object(i["Message"])({message:e.msg,type:"error"}),403===e.code&&i["MessageBox"].confirm("登录超时，请重新登录","确定登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){window.location.href="#/login",location.reload()}),Promise.reject("error")):t.data},function(t){return console.log("err"+t),Object(i["Message"])({message:t.message,type:"error",duration:3e3}),Promise.reject(t)});var c=a;function r(t){return c({url:"seoConfig",method:"get"})}function l(t){return c({url:"highExams/basic/questions",method:"get"})}function g(t){return c({url:"highExams/basic/answers",method:"post",data:t.param})}function u(t){return c({url:"highExams/high/questions",method:"get"})}function h(t){return c({url:"highExams/high/answers",method:"post",data:t.param})}function p(t){return c({url:"highExams/high/detailResult",method:"post",data:t.param})}function m(){return c({url:"regions/cascade",method:"get"})}function d(t){return c({url:"highTechQuestions/search",method:"get",params:t.param})}function f(t){return c({url:"subsidyPolicies/recentModify",method:"get"})}function _(t){return c({url:"subsidyPolicies",method:"get",params:t.param})}function v(t){return c({url:"subsidyPolicies/company/"+"".concat(t.companyName),method:"get"})}function b(t){return c({url:"subsidyPolicies/region/"+"".concat(t.regionCode),method:"get"})}function x(t){return c({url:"dicts/financialGrowth",method:"get"})}function w(t){return c({url:"dicts/highField",method:"get"})}function C(t){return c({url:"dicts/ipType",method:"get"})}function y(t){return c({url:"dicts/otherCostType",method:"get"})}function k(t){return c({url:"dicts/recentYearIncoming",method:"get"})}function H(t){return c({url:"costAccount",method:"post",data:t.data})}o.d(e,"g",function(){return r}),o.d(e,"a",function(){return l}),o.d(e,"p",function(){return g}),o.d(e,"i",function(){return u}),o.d(e,"q",function(){return h}),o.d(e,"f",function(){return p}),o.d(e,"e",function(){return m}),o.d(e,"d",function(){return d}),o.d(e,"l",function(){return f}),o.d(e,"r",function(){return _}),o.d(e,"n",function(){return v}),o.d(e,"o",function(){return b}),o.d(e,"c",function(){return x}),o.d(e,"h",function(){return w}),o.d(e,"j",function(){return C}),o.d(e,"k",function(){return y}),o.d(e,"m",function(){return k}),o.d(e,"b",function(){return H})},"3cbe":function(t,e,o){t.exports=o.p+"assets/img/home_logo5.7f835841.png"},"3e31":function(t,e,o){t.exports=o.p+"assets/img/home_icon_gqcbhs_pre.20f3e44b.svg"},4531:function(t,e,o){t.exports=o.p+"assets/img/home_logo9.b6eb807c.png"},4678:function(t,e,o){t.exports=o.p+"assets/img/home_logo2.c08e5a08.png"},"54cf":function(t,e,o){t.exports=o.p+"assets/img/home_logo10.970cf83e.png"},"582d":function(t,e,o){t.exports=o.p+"assets/img/home_img_gqpc.38eeb273.png"},"5b31":function(t,e,o){t.exports=o.p+"assets/img/home_logo3.cf387893.png"},"69b2":function(t,e,o){t.exports=o.p+"assets/img/home_bg3.b67e810f.jpg"},"6a84":function(t,e,o){},"6bed":function(t,e,o){t.exports=o.p+"assets/img/home_logo19.f8836682.png"},"7b7e":function(t,e,o){t.exports=o.p+"assets/img/home_logo11.67f24925.png"},"805c":function(t,e,o){t.exports=o.p+"assets/img/home_logo7.f05b4eb4.png"},"81dc":function(t,e,o){"use strict";var n=o("29c9"),s=o.n(n);s.a},"81ee":function(t,e,o){t.exports=o.p+"assets/img/home_logo17.5065d036.png"},"84ff":function(t,e,o){t.exports=o.p+"assets/img/home_img_gqcx.bcc3007d.png"},"87ab":function(t,e,o){t.exports=o.p+"assets/img/home_logo14.cfa7b2cf.png"},"89c0":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"root"},[t.carouseData.imgList.length>0?o("el-carousel",{attrs:{height:t.carouseData.carouselHeight,arrow:t.carouseData.arrow}},t._l(t.carouseData.imgList,function(e,n){return o("el-carousel-item",{key:n},[o("img",{attrs:{src:e.src,alt:""}}),0===n?t._t("content1"):t._e(),1===n?t._t("content2"):t._e()],2)}),1):t._e()],1)},s=[],i={name:"",data:function(){return{carouselHeight:""}},props:["carouseData"],methods:{},mounted:function(){}},a=i,c=(o("81dc"),o("2877")),r=Object(c["a"])(a,n,s,!1,null,null,null);r.options.__file="index.vue";e["a"]=r.exports},"8d66":function(t,e,o){t.exports=o.p+"assets/img/home_icon_gqcchs_nor.95207b6d.svg"},9247:function(t,e,o){t.exports=o.p+"assets/img/home_bg1.bf38124f.jpg"},"9cae":function(t,e,o){"use strict";(function(t){o("cadf"),o("551c"),o("097d");var n=o("89c0"),s=o("d9de"),i=o("365c");e["a"]={metaInfo:function(){return{title:this.seoConfig.title,meta:this.seoConfig.meta}},name:"home",components:{carousel:n["a"],btArea:s["a"]},data:function(){return{seoConfig:{title:"策知通高新技术企业服务平台",meta:[{name:"description",content:"高企评测，高企问答，高新技术"},{name:"keywords",content:"高企评测，高企问答，高新技术"}]},activeName:"first",liWidth:"",liHeight:"",imgListWidth:"",tabHeadWidth:"",tabHeadHeight:"",carouseData1:{imgList:[{src:o("69b2")},{src:o("ed0f")},{src:o("9247")}],arrow:"always",carouselHeight:""},carouseData2:{imgList:[{},{}],arrow:"always",carouselHeight:""}}},methods:{handleClick:function(t,e){},goPage:function(t){this.$router.push({path:t+".html"})},scrollToP:function(e){var o=t(".root").height(),n=t(".root").height()+t("#p1").height()+150,s=n+t("#p2").height()+150;switch(e){case 1:this.activeName="first",t("html,body").finish().animate({scrollTop:o},400);break;case 2:this.activeName="second",t("html,body").finish().animate({scrollTop:n},400);break;case 3:this.activeName="third",t("html,body").finish().animate({scrollTop:s},400);break;default:}}},mounted:function(){var t=this,e=document.body.clientWidth-0,o=window.screen.height-0;this.liWidth=191*e/1440+"px",this.liHeight=140*this.liWidth/191+"px",this.imgListWidth=191*e/1440*5+"px",this.tabHeadWidth=387*e/1440+"px",this.tabHeadHeight=387*e/1440*88/387+"px",this.carouseData1.carouselHeight=o-210+"px",this.carouseData2.carouselHeight=260*e/1440+"px",Object(i["g"])().then(function(e){e.data&&(t.seoConfig=e.data)})}}}).call(this,o("1157"))},ab12:function(t,e,o){t.exports=o.p+"assets/img/home_logo20.6e9fcbd0.png"},b087:function(t,e,o){t.exports=o.p+"assets/img/home_logo16.b1524465.png"},bb51:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("carousel",{staticClass:"firstP",attrs:{carouseData:t.carouseData1}}),n("div",{staticClass:"tab"},[n("div",{staticClass:"paneH"},[n("div",{class:["first"==t.activeName?"activeA":""],attrs:{slot:"label"},on:{click:function(e){t.scrollToP(1)}},slot:"label"},["first"===t.activeName?n("img",{staticStyle:{width:"37px",height:"34px"},attrs:{src:o("12d1"),alt:""}}):n("img",{staticStyle:{width:"37px",height:"34px"},attrs:{src:o("f223"),alt:""}}),t._v(" \n              高企评测\n          ")]),n("div",{class:["second"==t.activeName?"activeA":""],attrs:{slot:"label"},on:{click:function(e){t.scrollToP(2)}},slot:"label"},["second"===t.activeName?n("img",{staticStyle:{width:"37px",height:"34px"},attrs:{src:o("3e31"),alt:""}}):n("img",{staticStyle:{width:"37px",height:"34px"},attrs:{src:o("8d66"),alt:""}}),t._v(" \n              高企资助查询\n          ")]),n("div",{class:["third"==t.activeName?"activeA":""],attrs:{slot:"label"},on:{click:function(e){t.scrollToP(3)}},slot:"label"},["third"===t.activeName?n("img",{staticStyle:{width:"37px",height:"34px"},attrs:{src:o("f558"),alt:""}}):n("img",{staticStyle:{width:"37px",height:"34px"},attrs:{src:o("e27c"),alt:""}}),t._v("\n              高企成本核算\n          ")])]),n("div",{staticClass:"contentArea animated fadeInUpBig",attrs:{id:"p1"}},[t._m(0),n("div",{staticClass:"rightContent"},[n("h1",[t._v("高企评测")]),n("p",[t._v("1、企业须注册成立一年以上")]),n("p",[t._v("2、拥有核心自主知识产权")]),n("p",[t._v("3、配置稳定的技术团队")]),n("p",[t._v("4、开展持续的技术研发活动")]),n("p",[t._v("5、认定前一年自主知识产权的产品（服务）已实现销售")]),n("el-button",{staticClass:"waveBtn1",staticStyle:{bottom:"-100px",left:"35%"},on:{click:function(e){t.goPage("/evaluating")}}},[t._v("免费测一测")])],1)]),n("div",{staticClass:"contentArea animated fadeInUpBig",staticStyle:{"vertical-align":"text-bottom"},attrs:{id:"p2"}},[n("div",{staticClass:"rightContent extend_rightContent"},[n("h1",{staticStyle:{"border-color":"#FF8D26"}},[t._v("高企资助查询")]),n("p",[t._v("1、企业所得税税率由25%降低至15%")]),n("p",[t._v("2、地方政府财政补贴最高可达60-200万")]),n("p",[t._v("3、国家级荣誉")]),n("p",[t._v("4、提升企业品牌")]),n("p",[t._v("5、500万以上的银行信用贷款资质证明")]),n("el-button",{staticClass:"waveBtn2",staticStyle:{"box-shadow":"0px 4px 20px 0px rgba(255,141,38,1)",background:"rgba(255,141,38,1)","margin-left":"-3%",bottom:"-100px"},on:{click:function(e){t.goPage("/subsidize")}}},[t._v("资助快速查")])],1),t._m(1)]),n("div",{staticClass:"contentArea animated fadeInUp",attrs:{id:"p3"}},[t._m(2),n("div",{staticClass:"rightContent"},[n("h1",[t._v("高企成本核算")]),n("p",[t._v("1、咨询服务费")]),n("p",[t._v("2、审计报告费用 ")]),n("p",[t._v("3、知识产权费用")]),n("p",[t._v("4、其他")]),n("el-button",{staticClass:"waveBtn3",staticStyle:{bottom:"-100px",left:"30%"},on:{click:function(e){t.goPage("/costing")}}},[t._v("高企成本免费估")])],1)])]),n("div",{staticClass:"parenter"},[t._m(3),n("carousel",{attrs:{carouseData:t.carouseData2}},[[n("div",{attrs:{slot:"content1"},slot:"content1"},[n("div",{staticClass:"imgList",style:{width:t.imgListWidth}},[n("ul",t._l(10,function(e,s){return n("li",{key:s,staticClass:"partnerList",style:{height:t.liHeight,width:t.liWidth}},[n("img",{attrs:{src:o("fd3c")("./home_logo"+(s+1)+".png"),alt:""}})])}),0)])]),n("div",{attrs:{slot:"content2"},slot:"content2"},[n("div",{staticClass:"imgList",style:{width:t.imgListWidth}},[n("ul",t._l(10,function(e,s){return n("li",{key:s,staticClass:"partnerList",style:{height:t.liHeight,width:t.liWidth}},[n("img",{attrs:{src:o("fd3c")("./home_logo"+(s+11)+".png"),alt:""}})])}),0)])])]],2)],1),n("btArea")],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"leftContent"},[n("img",{attrs:{src:o("582d"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"leftContent",staticStyle:{"text-align":"left"}},[n("img",{attrs:{src:o("84ff"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"leftContent animated fadeInUpBig"},[n("img",{attrs:{src:o("12c6"),alt:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title"},[o("i"),o("span",[t._v("合作伙伴")]),o("i")])}],i=o("9cae"),a=i["a"],c=(o("21bb"),o("2877")),r=Object(c["a"])(a,n,s,!1,null,null,null);r.options.__file="Home.vue";e["default"]=r.exports},bcc9:function(t,e,o){},be68:function(t,e,o){t.exports=o.p+"assets/img/qrcode.4c9bfde3.png"},bf99:function(t,e,o){"use strict";var n=o("6a84"),s=o.n(n);s.a},c9f2:function(t,e,o){t.exports=o.p+"assets/img/home_logo6.05192091.png"},d9de:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"bottomArea"},[n("div",{staticClass:"topArea"},[n("div",{staticClass:"qrcode"},[n("img",{attrs:{src:o("be68"),alt:""}})]),n("div",{staticClass:"phoneAdress"},[n("p",[t._v("联系我们：400-878-0703 ")]),n("p",[t._v("服务时间：周一至周五9:00-18:00 ")]),n("p",[t._v("邮箱：server@cezhitong.com")]),n("p",[t._v("地址：浙江省杭州市江干区红普路759号汇禾禧福汇电商创业大厦4-312室")])])]),n("div",{staticClass:"links"},[n("span",[t._v("友情链接：")]),n("a",{attrs:{href:"http://www.innocom.gov.cn/",target:"_blank"}},[t._v("国家高新技术企业认定管理工作网")]),n("a",{attrs:{href:"http://www.most.gov.cn/",target:"_blank"}},[t._v("科部网")]),n("a",{attrs:{href:"http://www.zjkjt.gov.cn/",target:"_blank"}},[t._v("浙江省科技厅")]),n("a",{attrs:{href:"http://202.107.205.11:8612/",target:"_blank"}},[t._v("浙江省高新技术企业认定管理工作网")])]),n("div",{staticClass:"copyRight"},[n("div",[t._v("©2018-2019 策知通科技公司版权所有 浙ICP备18006065号-1")]),n("div")])])])}],i=(o("cadf"),o("551c"),o("097d"),{name:"",data:function(){return{}},methods:{},mounted:function(){}}),a=i,c=(o("bf99"),o("2877")),r=Object(c["a"])(a,n,s,!1,null,"2097c203",null);r.options.__file="index.vue";e["a"]=r.exports},da8d:function(t,e,o){t.exports=o.p+"assets/img/home_logo13.c95a8c33.png"},e27c:function(t,e,o){t.exports=o.p+"assets/img/home_icon_gqzzcx_nor.68036ac4.svg"},e6ad:function(t,e,o){t.exports=o.p+"assets/img/home_logo18.6a0a4901.png"},e7ca:function(t,e,o){t.exports=o.p+"assets/img/home_logo15.762e4e5f.png"},ed0f:function(t,e,o){t.exports=o.p+"assets/img/home_bg2.8789ebf9.jpg"},ee28:function(t,e,o){t.exports=o.p+"assets/img/home_logo1.6d8360e7.png"},f223:function(t,e,o){t.exports=o.p+"assets/img/home_icon_gqpc_nor.9ce7f483.svg"},f558:function(t,e,o){t.exports=o.p+"assets/img/home_icon_gqzzcx_pre.1b566abd.svg"},fd3c:function(t,e,o){var n={"./home_logo1.png":"ee28","./home_logo10.png":"54cf","./home_logo11.png":"7b7e","./home_logo12.png":"1491","./home_logo13.png":"da8d","./home_logo14.png":"87ab","./home_logo15.png":"e7ca","./home_logo16.png":"b087","./home_logo17.png":"81ee","./home_logo18.png":"e6ad","./home_logo19.png":"6bed","./home_logo2.png":"4678","./home_logo20.png":"ab12","./home_logo3.png":"5b31","./home_logo4.png":"1e0b","./home_logo5.png":"3cbe","./home_logo6.png":"c9f2","./home_logo7.png":"805c","./home_logo8.png":"16e3","./home_logo9.png":"4531"};function s(t){var e=i(t);return o(e)}function i(t){var e=n[t];if(!(e+1)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return e}s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="fd3c"}}]);