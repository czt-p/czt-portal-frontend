(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-008cd029"],{"0e8f":function(t,e,n){"use strict";var i=n("8fbb"),o=n.n(i);o.a},"2f4b":function(t,e,n){"use strict";var i=n("4fe0"),o=n.n(i);o.a},"365c":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var i=n("bc3a"),o=n.n(i),a=n("5c96"),s=(n("c0d6"),o.a.create({baseURL:"",timeout:2e4}));s.interceptors.request.use(function(t){return t},function(t){console.log("错误："),Promise.reject(t)}),s.interceptors.response.use(function(t){var e=t.data;return 200!==t.status?(Object(a["Message"])({message:e.msg,type:"error"}),403===e.code&&a["MessageBox"].confirm("登录超时，请重新登录","确定登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){window.location.href="#/login",location.reload()}),Promise.reject("error")):t.data},function(t){return console.log("err"+t),Object(a["Message"])({message:t.message,type:"error",duration:3e3}),Promise.reject(t)});var r=s;function c(t){return r({url:"highExams/basic/questions",method:"get"})}function u(t){return r({url:"highExams/basic/answers",method:"post",data:t.param})}function l(t){return r({url:"highExams/high/questions",method:"get"})}function d(t){return r({url:"highExams/high/answers",method:"post",data:t.param})}function f(t){return r({url:"highExams/high/detailResult",method:"post",data:t.param})}function g(){return r({url:"regions/cascade",method:"get"})}function p(t){return r({url:"highTechQuestions/search",method:"get",params:t.param})}function h(t){return r({url:"subsidyPolicies/recentModify",method:"get"})}function m(t){return r({url:"subsidyPolicies",method:"get",params:t.param})}function b(t){return r({url:"subsidyPolicies/company/"+"".concat(t.companyName),method:"get"})}function v(t){return r({url:"subsidyPolicies/region/"+"".concat(t.regionCode),method:"get"})}function _(t){return r({url:"dicts/financialGrowth",method:"get"})}function w(t){return r({url:"dicts/highField",method:"get"})}function C(t){return r({url:"dicts/ipType",method:"get"})}function y(t){return r({url:"dicts/otherCostType",method:"get"})}function x(t){return r({url:"dicts/recentYearIncoming",method:"get"})}function j(t){return r({url:"costAccount",method:"post",data:t.data})}n.d(e,"a",function(){return c}),n.d(e,"o",function(){return u}),n.d(e,"h",function(){return l}),n.d(e,"p",function(){return d}),n.d(e,"f",function(){return f}),n.d(e,"e",function(){return g}),n.d(e,"d",function(){return p}),n.d(e,"k",function(){return h}),n.d(e,"q",function(){return m}),n.d(e,"m",function(){return b}),n.d(e,"n",function(){return v}),n.d(e,"c",function(){return _}),n.d(e,"g",function(){return w}),n.d(e,"i",function(){return C}),n.d(e,"j",function(){return y}),n.d(e,"l",function(){return x}),n.d(e,"b",function(){return j})},"4fe0":function(t,e,n){},"625e":function(t,e,n){t.exports=n.p+"assets/img/gxpc_sorry.cbea4388.png"},"642e":function(t,e,n){"use strict";var i=n("7c8d"),o=n.n(i);o.a},"7c8d":function(t,e,n){},"817f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"yydialog"},[n("el-dialog",{attrs:{title:"",visible:t.dialogConfig.centerDialogVisible,width:"35%",center:""},on:{"update:visible":function(e){t.$set(t.dialogConfig,"centerDialogVisible",e)},open:t.open}},[t._t("bodyArea")],2)],1)},o=[],a=n("be94"),s=n("2f62"),r={name:"",data:function(){return{}},props:["dialogConfig"],computed:Object(a["a"])({},Object(s["b"])([])),methods:{open:function(){}},mounted:function(){}},c=r,u=(n("642e"),n("2877")),l=Object(u["a"])(c,i,o,!1,null,null,null);l.options.__file="dialog.vue";e["a"]=l.exports},"8fbb":function(t,e,n){},be68:function(t,e,n){t.exports=n.p+"assets/img/qrcode.4c9bfde3.png"},d9de:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"bottomArea"},[i("div",{staticClass:"topArea"},[i("div",{staticClass:"qrcode"},[i("img",{attrs:{src:n("be68"),alt:""}})]),i("div",{staticClass:"phoneAdress"},[i("p",[t._v("联系我们：400-878-0703 ")]),i("p",[t._v("服务时间：周一至周五9:00-18:00 ")]),i("p",[t._v("邮箱：server@cezhitong.com")]),i("p",[t._v("地址：浙江省杭州市江干区红普路759号汇禾禧福汇电商创业大厦4-312室")])])]),i("div",{staticClass:"links"},[i("span",[t._v("友情链接：")]),i("a",{attrs:{href:"http://www.innocom.gov.cn/",target:"_blank"}},[t._v("国家高新技术企业认定管理工作网")]),i("a",{attrs:{href:"http://www.most.gov.cn/",target:"_blank"}},[t._v("科部网")]),i("a",{attrs:{href:"http://www.zjkjt.gov.cn/",target:"_blank"}},[t._v("浙江省科技厅")]),i("a",{attrs:{href:"http://202.107.205.11:8612/",target:"_blank"}},[t._v("浙江省高新技术企业认定管理工作网")])]),i("div",{staticClass:"copyRight"},[i("div",[t._v("©2018-2019 策知通科技公司版权所有 浙ICP备18006065号-1")]),i("div")])])])}],a={name:"",data:function(){return{}},methods:{},mounted:function(){}},s=a,r=(n("2f4b"),n("2877")),c=Object(r["a"])(s,i,o,!1,null,"1c418974",null);c.options.__file="index.vue";e["a"]=c.exports},e920:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"root"},[i("el-steps",{staticClass:"yy-steps",attrs:{active:1,"align-center":""}},[i("el-step",{attrs:{title:"基础评估"}}),i("el-step",{attrs:{title:"高新评分"}}),i("el-step",{attrs:{title:"评估结果及建议"}})],1),i("ul",{staticClass:"questions"},t._l(t.basicQuestions,function(e,n){return i("li",{key:n,staticClass:"queTitle animated fadeIn"},[i("div",[t._v(t._s(n+1+"、"+e.content))]),i("el-radio-group",{model:{value:e.answer,callback:function(n){t.$set(e,"answer",n)},expression:"item.answer"}},t._l(e.options,function(n,o){return i("el-radio",{key:o,class:[e.options.length>2&&n.content.length>30?"moreOptions":""],attrs:{label:n.id}},[t._v(t._s(n.content))])}),1)],1)}),0),i("div",{staticClass:"btnArea"},[i("el-button",{on:{click:t.submitStep1}},[t._v("点击进入下一步高企评测")])],1),i("yyDialog",{attrs:{dialogConfig:t.dialogConfig}},[i("template",{staticClass:"clearfix",slot:"bodyArea"},[i("img",{staticClass:"leftA",attrs:{src:n("625e"),alt:""}}),i("div",{staticClass:"rigthA"},[i("p",[t._v("很抱歉！")]),i("p",[t._v("贵公司暂不满足国家高新申报的基本条件")]),i("p",[t._v("您可以进行重新测试。或者拨打客服")]),i("p",[t._v("与我司进行联系")]),i("p",[t._v("电话：400-878-0703")])]),i("div",{staticClass:"btnArea2"},[i("el-button",{on:{click:t.testAgain}},[t._v("重新测试")])],1)])],2),i("btArea")],1)},o=[],a=n("be94"),s=(n("cadf"),n("551c"),n("097d"),n("2f62")),r=n("d9de"),c=n("817f"),u=n("365c"),l={name:"",data:function(){return{basicQuestions:"",dialogConfig:{centerDialogVisible:!1},loading:!1}},components:{btArea:r["a"],yyDialog:c["a"]},computed:Object(a["a"])({},Object(s["b"])([])),methods:{submitStep1:function(){var t=this,e=[];this.basicQuestions.map(function(t){t.answer&&e.push({answer:t.answer,id:t.id})}),e.length===this.basicQuestions.length?(this.loading=!0,Object(u["o"])({param:e}).then(function(e){t.loading=!1,e.data.passed?t.$router.push({path:"/newRate"}):t.dialogConfig.centerDialogVisible=!0}).catch(function(e){t.loading=!1})):this.$alert("您还有题目未完成，无法评估，请继续作答。","提示",{confirmButtonText:"确定",type:"warning",closeOnClickModal:!0,callback:function(t){}})},testAgain:function(){this.basicQuestions.map(function(t){t.answer=""}),this.dialogConfig.centerDialogVisible=!1}},mounted:function(){var t=this;this.loading=!0,Object(u["a"])().then(function(e){t.basicQuestions=e.data,t.loading=!1}).catch(function(e){t.loading=!1})}},d=l,f=(n("0e8f"),n("2877")),g=Object(f["a"])(d,i,o,!1,null,"bbd0c1a8",null);g.options.__file="evaluating.vue";e["default"]=g.exports}}]);