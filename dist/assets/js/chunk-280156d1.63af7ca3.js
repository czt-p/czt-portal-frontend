(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-280156d1"],{"365c":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var i=n("bc3a"),o=n.n(i),a=n("5c96"),r=(n("c0d6"),o.a.create({baseURL:"",timeout:2e4}));r.interceptors.request.use(function(t){return t},function(t){console.log("错误："),Promise.reject(t)}),r.interceptors.response.use(function(t){var e=t.data;return 200!==t.status?(Object(a["Message"])({message:e.msg,type:"error"}),403===e.code&&a["MessageBox"].confirm("登录超时，请重新登录","确定登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){window.location.href="#/login",location.reload()}),Promise.reject("error")):t.data},function(t){return console.log("err"+t),Object(a["Message"])({message:t.message,type:"error",duration:3e3}),Promise.reject(t)});var s=r;function c(t){return s({url:"seoConfig",method:"get"})}function u(t){return s({url:"highExams/basic/questions",method:"get"})}function l(t){return s({url:"highExams/basic/answers",method:"post",data:t.param})}function d(t){return s({url:"highExams/high/questions",method:"get"})}function f(t){return s({url:"highExams/high/answers",method:"post",data:t.param})}function g(t){return s({url:"highExams/high/detailResult",method:"post",data:t.param})}function p(){return s({url:"regions/cascade",method:"get"})}function h(t){return s({url:"highTechQuestions/search",method:"get",params:t.param})}function m(t){return s({url:"subsidyPolicies/recentModify",method:"get"})}function b(t){return s({url:"subsidyPolicies",method:"get",params:t.param})}function v(t){return s({url:"subsidyPolicies/company/"+"".concat(t.companyName),method:"get"})}function _(t){return s({url:"subsidyPolicies/region/"+"".concat(t.regionCode),method:"get"})}function w(t){return s({url:"dicts/financialGrowth",method:"get"})}function C(t){return s({url:"dicts/highField",method:"get"})}function y(t){return s({url:"dicts/ipType",method:"get"})}function x(t){return s({url:"dicts/otherCostType",method:"get"})}function j(t){return s({url:"dicts/recentYearIncoming",method:"get"})}function k(t){return s({url:"costAccount",method:"post",data:t.data})}n.d(e,"g",function(){return c}),n.d(e,"a",function(){return u}),n.d(e,"p",function(){return l}),n.d(e,"i",function(){return d}),n.d(e,"q",function(){return f}),n.d(e,"f",function(){return g}),n.d(e,"e",function(){return p}),n.d(e,"d",function(){return h}),n.d(e,"l",function(){return m}),n.d(e,"r",function(){return b}),n.d(e,"n",function(){return v}),n.d(e,"o",function(){return _}),n.d(e,"c",function(){return w}),n.d(e,"h",function(){return C}),n.d(e,"j",function(){return y}),n.d(e,"k",function(){return x}),n.d(e,"m",function(){return j}),n.d(e,"b",function(){return k})},"625e":function(t,e,n){t.exports=n.p+"assets/img/gxpc_sorry.cbea4388.png"},"62eb":function(t,e,n){},"642e":function(t,e,n){"use strict";var i=n("7c8d"),o=n.n(i);o.a},"6a84":function(t,e,n){},"7c8d":function(t,e,n){},"817f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yydialog"},[n("el-dialog",{attrs:{title:"",visible:t.dialogConfig.centerDialogVisible,width:"588px",center:""},on:{"update:visible":function(e){t.$set(t.dialogConfig,"centerDialogVisible",e)},open:t.open}},[t._t("bodyArea")],2)],1)},o=[],a=n("be94"),r=n("2f62"),s={name:"",data:function(){return{}},props:["dialogConfig"],computed:Object(a["a"])({},Object(r["b"])([])),methods:{open:function(){}},mounted:function(){}},c=s,u=(n("642e"),n("2877")),l=Object(u["a"])(c,i,o,!1,null,null,null);l.options.__file="dialog.vue";e["a"]=l.exports},be68:function(t,e,n){t.exports=n.p+"assets/img/qrcode.4c9bfde3.png"},bf99:function(t,e,n){"use strict";var i=n("6a84"),o=n.n(i);o.a},ce22:function(t,e,n){"use strict";var i=n("62eb"),o=n.n(i);o.a},d9de:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"bottomArea"},[i("div",{staticClass:"topArea"},[i("div",{staticClass:"qrcode"},[i("img",{attrs:{src:n("be68"),alt:""}})]),i("div",{staticClass:"phoneAdress"},[i("p",[t._v("联系我们：400-878-0703 ")]),i("p",[t._v("服务时间：周一至周五9:00-18:00 ")]),i("p",[t._v("邮箱：server@cezhitong.com")]),i("p",[t._v("地址：浙江省杭州市江干区红普路759号汇禾禧福汇电商创业大厦4-312室")])])]),i("div",{staticClass:"links"},[i("span",[t._v("友情链接：")]),i("a",{attrs:{href:"http://www.innocom.gov.cn/",target:"_blank"}},[t._v("国家高新技术企业认定管理工作网")]),i("a",{attrs:{href:"http://www.most.gov.cn/",target:"_blank"}},[t._v("科部网")]),i("a",{attrs:{href:"http://www.zjkjt.gov.cn/",target:"_blank"}},[t._v("浙江省科技厅")]),i("a",{attrs:{href:"http://202.107.205.11:8612/",target:"_blank"}},[t._v("浙江省高新技术企业认定管理工作网")])]),i("div",{staticClass:"copyRight"},[i("div",[t._v("©2018-2019 策知通科技公司版权所有 浙ICP备18006065号-1")]),i("div")])])])}],a=(n("cadf"),n("551c"),n("097d"),{name:"",data:function(){return{}},methods:{},mounted:function(){}}),r=a,s=(n("bf99"),n("2877")),c=Object(s["a"])(r,i,o,!1,null,"2097c203",null);c.options.__file="index.vue";e["a"]=c.exports},e920:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"root"},[i("el-steps",{staticClass:"yy-steps",attrs:{active:1,"align-center":""}},[i("el-step",{attrs:{title:"基础评估"}}),i("el-step",{attrs:{title:"高新评分"}}),i("el-step",{attrs:{title:"评估结果及建议"}})],1),i("ul",{staticClass:"questions"},t._l(t.basicQuestions,function(e,n){return i("li",{key:n,staticClass:"queTitle animated fadeIn"},[i("div",[t._v(t._s(n+1+"、"+e.content))]),i("el-radio-group",{model:{value:e.answer,callback:function(n){t.$set(e,"answer",n)},expression:"item.answer"}},t._l(e.options,function(n,o){return i("el-radio",{key:o,class:[e.options.length>2&&n.content.length>30?"moreOptions":""],attrs:{label:n.id}},[t._v(t._s(n.content))])}),1)],1)}),0),i("div",{staticClass:"btnArea"},[i("el-button",{on:{click:t.submitStep1}},[t._v("点击进入下一步高企评测")])],1),i("yyDialog",{attrs:{dialogConfig:t.dialogConfig}},[i("template",{staticClass:"clearfix",slot:"bodyArea"},[i("img",{staticClass:"leftA",attrs:{src:n("625e"),alt:""}}),i("div",{staticClass:"rigthA"},[i("p",[t._v("很抱歉！")]),i("p",[t._v("贵公司暂不满足国家高新申报的基本条件")]),i("p",[t._v("您可以进行重新测试。或者拨打客服")]),i("p",[t._v("与我司进行联系")]),i("p",[t._v("电话：400-878-0703")])]),i("div",{staticClass:"btnArea2"},[i("el-button",{on:{click:t.testAgain}},[t._v("重新测试")])],1)])],2),i("btArea")],1)},o=[],a=n("be94"),r=(n("cadf"),n("551c"),n("097d"),n("2f62")),s=n("d9de"),c=n("817f"),u=n("365c"),l={name:"",data:function(){return{basicQuestions:"",dialogConfig:{centerDialogVisible:!1},loading:!1}},components:{btArea:s["a"],yyDialog:c["a"]},computed:Object(a["a"])({},Object(r["b"])([])),methods:{submitStep1:function(){var t=this,e=[];this.basicQuestions.map(function(t){t.answer&&e.push({answer:t.answer,id:t.id})}),e.length===this.basicQuestions.length?(this.loading=!0,Object(u["p"])({param:e}).then(function(e){t.loading=!1,e.data.passed?t.$router.push({path:"/newRate.html"}):t.dialogConfig.centerDialogVisible=!0}).catch(function(e){t.loading=!1})):this.$alert("您还有题目未完成，无法评估，请继续作答。","提示",{confirmButtonText:"确定",type:"warning",closeOnClickModal:!0,callback:function(t){}})},testAgain:function(){this.basicQuestions.map(function(t){t.answer=""}),this.dialogConfig.centerDialogVisible=!1}},mounted:function(){var t=this;this.loading=!0,Object(u["a"])().then(function(e){t.basicQuestions=e.data,t.loading=!1}).catch(function(e){t.loading=!1})}},d=l,f=(n("ce22"),n("2877")),g=Object(f["a"])(d,i,o,!1,null,"b6816de2",null);g.options.__file="evaluating.vue";e["default"]=g.exports}}]);