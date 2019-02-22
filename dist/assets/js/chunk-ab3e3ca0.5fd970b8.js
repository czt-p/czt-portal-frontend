(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab3e3ca0"],{"0175":function(t,e,i){},"27b5":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"costing"},[i("div",{staticClass:"wrap"},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"200px","label-position":"left"}},[i("div",{staticClass:"consulting"},[i("div",{staticClass:"title"},[t._v("咨询费用")]),i("el-form-item",{attrs:{label:"企业所属高新领域：",prop:"consultCost.highField",rules:[{required:!0,message:"请选择企业所属高新领域",trigger:"change"}]}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.consultCost.highField,callback:function(e){t.$set(t.form.consultCost,"highField",e)},expression:"form.consultCost.highField "}},t._l(t.highField,function(t,e){return i("el-option",{key:e,attrs:{label:t.value,value:t.key}})}),1)],1),i("el-form-item",{attrs:{label:"企业财务成长性情况：",prop:"consultCost.financialGrowth",rules:[{required:!0,message:"请选择企业财务成长性情况",trigger:"change"}]}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.consultCost.financialGrowth,callback:function(e){t.$set(t.form.consultCost,"financialGrowth",e)},expression:"form.consultCost.financialGrowth"}},t._l(t.financialGrowth,function(t,e){return i("el-option",{key:e,attrs:{label:t.value,value:t.key}})}),1)],1),i("el-form-item",{attrs:{label:"企业最近一年营业收入：",prop:"consultCost.recentYearIncoming",rules:[{required:!0,message:"请选择企业最近一年营业收入",trigger:"change"}]}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.consultCost.recentYearIncoming,callback:function(e){t.$set(t.form.consultCost,"recentYearIncoming",e)},expression:"form.consultCost.recentYearIncoming"}},t._l(t.recentYearIncoming,function(t,e){return i("el-option",{key:e,attrs:{label:t.value,value:t.key}})}),1)],1)],1),i("div",{staticClass:"consulting"},[i("div",{staticClass:"title"},[t._v("专项审计报告")]),i("el-form-item",{attrs:{label:"预计申请年度：",prop:"specialAuditCost.applyYear",rules:[{required:!0,message:"请选择预计申请年度",trigger:"change"}]}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{change:t.setThreeYears},model:{value:t.form.specialAuditCost.applyYear,callback:function(e){t.$set(t.form.specialAuditCost,"applyYear",e)},expression:"form.specialAuditCost.applyYear"}},t._l(t.nearYears,function(t,e){return i("el-option",{key:e,attrs:{label:t.label,value:t.value}})}),1)],1),t._l(t.form.specialAuditCost.specialAuditList,function(e,a){return i("div",{key:a,staticClass:"inline inlineInput moreInput"},[i("el-form-item",{attrs:{label:"","label-width":"0"}},[i("el-input",{staticClass:"rightOne",attrs:{readonly:""},model:{value:e.year,callback:function(i){t.$set(e,"year",i)},expression:"x.year"}}),t._v("年度\n          ")],1),i("el-form-item",{attrs:{label:"营业收入：","label-width":"95px",prop:"specialAuditCost.specialAuditList."+a+".incoming",rules:[{required:!0,message:"请输入营业收入"},{type:"number",message:"营业收入必须为数字值"}]}},[i("el-input",{staticClass:"rightOne",attrs:{type:"number",min:"0"},model:{value:e.incoming,callback:function(i){t.$set(e,"incoming",t._n(i))},expression:"x.incoming"}}),t._v("万元\n          ")],1),i("el-form-item",{attrs:{label:"其中：","label-width":"65px",prop:"specialAuditCost.specialAuditList."+a+".type",rules:[{required:!0,message:"请选择费用类型"}]}},[i("el-select",{attrs:{placeholder:"请选择"},on:{change:function(e){t.getRdOrManager(a)}},model:{value:e.type,callback:function(i){t.$set(e,"type",i)},expression:"x.type"}},[i("el-option",{attrs:{label:"研发费用",value:"0"}}),i("el-option",{attrs:{label:"管理费用",value:"1"}})],1)],1),0==e.type?i("el-form-item",{attrs:{label:"投入金额：","label-width":"95px",prop:"specialAuditCost.specialAuditList."+a+".rdCost",rules:[{required:!0,message:"请输入投入金额"},{type:"number",message:"投入金额必须为数字值"}]}},[i("el-input",{staticClass:"rightOne",attrs:{min:"0",type:"number"},model:{value:e.rdCost,callback:function(i){t.$set(e,"rdCost",t._n(i))},expression:"x.rdCost"}}),t._v("万元\n          ")],1):i("el-form-item",{attrs:{label:"投入金额：","label-width":"95px",prop:"specialAuditCost.specialAuditList."+a+".managerCost",rules:[{required:!0,message:"请输入投入金额"},{type:"number",message:"投入金额必须为数字值"}]}},[i("el-input",{staticClass:"rightOne",attrs:{min:"0",type:"number"},model:{value:e.managerCost,callback:function(i){t.$set(e,"managerCost",t._n(i))},expression:"x.managerCost"}}),t._v("万元\n          ")],1)],1)}),i("div",{staticClass:"tips"},[t._v("根据高新技术企业申请规定，需要至少申报申请年度最近3年的营业收入及研发费用（管理费用）投入情况")])],2),i("div",{staticClass:"consulting"},[i("div",{staticClass:"title"},[t._v("知识产权费用")]),i("el-form-item",{attrs:{label:"知识产权费用需要测算：",prop:"resource"}},[i("el-radio-group",{model:{value:t.form.ipCost.isCheck,callback:function(e){t.$set(t.form.ipCost,"isCheck",e)},expression:"form.ipCost.isCheck"}},[i("el-radio",{attrs:{label:1}},[t._v("是")]),i("el-radio",{attrs:{label:0}},[t._v("否")])],1)],1),t._l(t.form.ipCost.ipList,function(e,a){return i("div",{key:a,staticClass:"IPtype inline"},[i("el-form-item",{attrs:{label:"知识产权类型：",prop:"ipCost.ipList."+a+".type",rules:1==t.form.ipCost.isCheck?[{required:!0,message:"请选择知识产权类型"}]:[]}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择",disabled:0==t.form.ipCost.isCheck},model:{value:e.type,callback:function(i){t.$set(e,"type",i)},expression:"x.type"}},t._l(t.ipType,function(t,e){return i("el-option",{key:e,attrs:{label:t.value,value:t.key}})}),1)],1),i("el-form-item",{attrs:{label:"知识产权数量：","label-width":"125px",prop:"ipCost.ipList."+a+".quantity",rules:1==t.form.ipCost.isCheck?[{required:!0,message:"请输入知识产权数量"}]:[]}},[i("el-input",{directives:[{name:"posInt",rawName:"v-posInt"}],staticClass:"rightOne posInt",attrs:{min:"0",type:"number",disabled:0==t.form.ipCost.isCheck},model:{value:e.quantity,callback:function(i){t.$set(e,"quantity",t._n(i))},expression:"x.quantity"}}),t._v("个\n          ")],1),0==a?i("el-button",{staticClass:"addIP",attrs:{type:"primary",disabled:0==t.form.ipCost.isCheck,icon:"el-icon-plus"},on:{click:t.addIpList}},[t._v("新增")]):i("el-button",{staticClass:"addIP",staticStyle:{background:"#f44336"},attrs:{type:"primary",disabled:0==t.form.ipCost.isCheck,icon:"el-icon-delete"},on:{click:function(e){t.removeIPList(a)}}},[t._v("删除")])],1)})],2),i("div",{staticClass:"consulting"},[i("div",{staticClass:"title"},[t._v("年度审计报告费用")]),i("el-form-item",{attrs:{label:"年度审计报告费用需要测算："}},[i("el-radio-group",{model:{value:t.form.annualAuditCost.isCheck,callback:function(e){t.$set(t.form.annualAuditCost,"isCheck",e)},expression:"form.annualAuditCost.isCheck"}},[i("el-radio",{attrs:{label:1}},[t._v("是")]),i("el-radio",{attrs:{label:0}},[t._v("否")])],1)],1),i("el-form-item",{attrs:{label:"预计申请年度：",prop:"annualAuditCost.applyYear",rules:1==t.form.annualAuditCost.isCheck?[{required:!0,message:"请选择预计申请年度"}]:[]}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择",disabled:0==t.form.annualAuditCost.isCheck},on:{change:t.setThreeYears2},model:{value:t.form.annualAuditCost.applyYear,callback:function(e){t.$set(t.form.annualAuditCost,"applyYear",e)},expression:"form.annualAuditCost.applyYear"}},t._l(t.nearYears,function(t,e){return i("el-option",{key:e,attrs:{label:t.label,value:t.value}})}),1)],1),t._l(t.form.annualAuditCost.annualAuditList,function(e,a){return i("div",{key:a,staticClass:"inline inlineInput"},[i("el-form-item",{attrs:{label:"","label-width":"0"}},[i("el-input",{staticClass:"rightOne",attrs:{clearable:2==a,readonly:"",disabled:0==t.form.annualAuditCost.isCheck},model:{value:e.year,callback:function(i){t.$set(e,"year",i)},expression:"x.year"}}),t._v("年度\n          ")],1),i("el-form-item",{attrs:{label:"资产总额：","label-width":"95px",prop:"annualAuditCost.annualAuditList."+a+".amount",rules:1==t.form.annualAuditCost.isCheck&&a<2?[{required:!0,message:"请输入资产总额"},{type:"number",message:"资产总额必须为数字值"}]:[]}},[i("el-input",{staticClass:"rightOne",attrs:{disabled:0==t.form.annualAuditCost.isCheck,min:"0",type:"number"},model:{value:e.amount,callback:function(i){t.$set(e,"amount",t._n(i))},expression:"x.amount"}}),t._v("万元\n          ")],1),2==t.form.annualAuditCost.annualAuditList.length&&0==a?i("el-button",{staticClass:"addIP",attrs:{type:"primary",disabled:0==t.form.annualAuditCost.isCheck,icon:"el-icon-plus"},on:{click:function(e){t.addAnnualAuditList(a)}}},[t._v("新增")]):t._e(),2==a?i("el-button",{staticClass:"addIP",staticStyle:{background:"#f44336"},attrs:{type:"primary",disabled:0==t.form.annualAuditCost.isCheck,icon:"el-icon-delete"},on:{click:function(e){t.romoveAnnualAuditList(a)}}},[t._v("删除")]):t._e()],1)}),i("div",{staticClass:"tips"},[t._v("根据高架高新技术企业申请规定，需要至少申报申请年度最近2年的资产总额数据")])],2),i("div",{staticClass:"consulting"},[i("div",{staticClass:"title"},[t._v("其他费用")]),i("el-form-item",{attrs:{label:"其他费用需要测算："}},[i("el-radio-group",{model:{value:t.form.otherCost.isCheck,callback:function(e){t.$set(t.form.otherCost,"isCheck",e)},expression:"form.otherCost.isCheck"}},[i("el-radio",{attrs:{label:1}},[t._v("是")]),i("el-radio",{attrs:{label:0}},[t._v("否")])],1)],1),t._l(t.form.otherCost.otherList,function(e,a){return i("div",{key:a,staticClass:"other inline"},[i("el-form-item",{attrs:{label:"费用类型：",prop:"otherCost.otherList."+a+".type",rules:1==t.form.otherCost.isCheck?[{required:!0,message:"请选择费用类型"}]:[]}},[i("el-select",{attrs:{placeholder:"请选择",disabled:0==t.form.otherCost.isCheck},model:{value:e.type,callback:function(i){t.$set(e,"type",i)},expression:"x.type"}},t._l(t.otherCostType,function(t,e){return i("el-option",{key:e,attrs:{label:t.value,value:t.key}})}),1)],1),i("el-form-item",{attrs:{label:"所需数量：","label-width":"120px",prop:"otherCost.otherList."+a+".quantity",rules:1==t.form.otherCost.isCheck?[{required:!0,message:"请输入所需数量"}]:[]}},[i("el-input",{directives:[{name:"posInt",rawName:"v-posInt"}],staticClass:"rightOne posInt",attrs:{type:"number",disabled:0==t.form.otherCost.isCheck},model:{value:e.quantity,callback:function(i){t.$set(e,"quantity",t._n(i))},expression:"x.quantity"}}),t._v("个\n          ")],1),0==a?i("el-button",{staticClass:"addIP",attrs:{type:"primary",disabled:0==t.form.otherCost.isCheck,icon:"el-icon-plus"},on:{click:t.addOtherCost}},[t._v("新增")]):i("el-button",{staticClass:"addIP",staticStyle:{background:"#f44336"},attrs:{type:"primary",disabled:0==t.form.otherCost.isCheck,icon:"el-icon-delete"},on:{click:function(e){t.romoveOtherList(a)}}},[t._v("删除")])],1)})],2)]),i("div",{staticClass:"btnWrap"},[i("el-button",{staticClass:"calc",on:{click:t.calc}},[t._v("开始核算")])],1)],1),i("btArea"),i("yyDialog",{ref:"resultDialog",attrs:{dialogConfig:t.dialogConfig}},[i("template",{slot:"bodyArea"},[i("el-form",{ref:"form1",staticStyle:{"padding-top":"40px"},attrs:{model:t.form,rules:t.rules,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"公司名称：",prop:"companyName"}},[i("el-input",{attrs:{placeholder:"请输入贵公司名称"},model:{value:t.form.companyName,callback:function(e){t.$set(t.form,"companyName",e)},expression:"form.companyName"}})],1),i("el-form-item",{attrs:{label:"联系电话：",prop:"telephone"}},[i("el-input",{attrs:{placeholder:"请输入联系电话"},model:{value:t.form.telephone,callback:function(e){t.$set(t.form,"telephone",e)},expression:"form.telephone"}})],1),i("el-form-item",[i("div",{staticClass:"tips"},[t._v("我们将以短信的形式发送给您评估报告"),i("br"),t._v("本次服务短信免费")])]),i("div",{staticClass:"btnArea"},[i("el-button",{attrs:{type:"primary"},on:{click:t.sendText}},[t._v("开始发送")])],1)],1)],1)],2)],1)},n=[],s=(i("ac6a"),i("456d"),i("be94")),o=i("2f62"),r=i("d9de"),l=i("817f"),c=i("365c"),u={name:"",data:function(){var t=function(t,e,i){e?/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(e.trim())?i():i(new Error("请输入正确的11位手机号码")):i(new Error("请输入电话号码"))};return{form:{consultCost:{financialGrowth:"",highField:"",recentYearIncoming:""},ipCost:{isCheck:1,ipList:[{quantity:"",type:""}]},otherCost:{isCheck:1,otherList:[{quantity:"",type:""}]},specialAuditCost:{applyYear:"",specialAuditList:[{incoming:"",managerCost:"",rdCost:"",year:"",type:"0"},{incoming:"",managerCost:"",rdCost:"",year:"",type:"0"},{incoming:"",managerCost:"",rdCost:"",year:"",type:"0"}]},annualAuditCost:{annualAuditList:[{amount:"",year:""},{amount:"",year:""},{amount:"",year:""}],applyYear:"",isCheck:1},companyName:"",telephone:""},highField:"",financialGrowth:"",recentYearIncoming:"",ipType:"",otherCostType:"",nearYears:[],dialogConfig:{centerDialogVisible:!1},rules:{companyName:[{required:!0,message:"请输入公司名称",trigger:"blur"}],telephone:[{required:!0,validator:t,trigger:"blur"}]}}},computed:Object(s["a"])({},Object(o["b"])([]),{IPCheck:function(){return this.form.ipCost.isCheck},annualAuditCostCheck:function(){return this.form.annualAuditCost.isCheck},otherCheck:function(){return this.form.otherCost.isCheck}}),components:{btArea:r["a"],yyDialog:l["a"]},methods:{addIpList:function(){this.form.ipCost.ipList.length<this.ipType.length&&this.form.ipCost.ipList.push({quantity:"",type:""})},removeIPList:function(t){var e=this;this.form.ipCost.ipList.map(function(i,a){t==a&&e.form.ipCost.ipList.splice(a,1)})},romoveOtherList:function(t){var e=this;this.form.otherCost.otherList.map(function(i,a){t==a&&e.form.otherCost.otherList.splice(a,1)})},romoveAnnualAuditList:function(t){var e=this;this.form.annualAuditCost.annualAuditList.map(function(i,a){t==a&&e.form.annualAuditCost.annualAuditList.splice(a,1)})},addAnnualAuditList:function(){if(2==this.form.annualAuditCost.annualAuditList.length){var t=this.form.annualAuditCost.annualAuditList[1].year-1;this.form.annualAuditCost.annualAuditList.push({amount:"",year:t})}},addOtherCost:function(){this.form.otherCost.otherList.length<this.otherCostType.length&&this.form.otherCost.otherList.push({type:"",quantity:""})},setThreeYears:function(){if(this.form.specialAuditCost.applyYear){var t=this.form.specialAuditCost.applyYear-1;this.form.specialAuditCost.specialAuditList.map(function(e){e.year=t--})}else this.form.specialAuditCost.specialAuditList.map(function(t){t.year=""})},setThreeYears2:function(){if(this.form.annualAuditCost.applyYear){var t=this.form.annualAuditCost.applyYear-1;this.form.annualAuditCost.annualAuditList.map(function(e){e.year=t--})}else this.form.annualAuditCost.annualAuditList.map(function(t){t.year=""})},getRdOrManager:function(t){this.form.specialAuditCost.specialAuditList.map(function(e,i){i==t&&(e.rdCost=e.managerCost="")})},calc:function(){var t=this;this.$refs["form"].validate(function(e){e&&(t.dialogConfig.centerDialogVisible=!0)})},sendText:function(){var t=this;this.$refs["form1"].validate(function(e){e&&Object(c["b"])({data:t.form}).then(function(e){t.dialogConfig.centerDialogVisible=!1,t.$alert(e.success?"已发送，请稍后查收短信。":e.msg,"提示",{confirmButtonText:"确定",type:"warning",closeOnClickModal:!0,callback:function(t){}})})})}},watch:{IPCheck:function(t){0==t&&this.form.ipCost.ipList.map(function(t){Object.keys(t).map(function(e){t[e]=""})})},annualAuditCostCheck:function(t){0==t&&this.form.annualAuditCost.annualAuditList.map(function(t){Object.keys(t).map(function(e){t[e]=""})})},otherCheck:function(t){0==t&&this.form.otherCost.otherList.map(function(t){Object.keys(t).map(function(e){t[e]=""})})}},mounted:function(){var t=this,e=[c["c"],c["g"],c["i"],c["j"],c["l"]],i=["financialGrowth","highField","ipType","otherCostType","recentYearIncoming"];e.map(function(e,a){e().then(function(e){t[i[a]]=e.data})});for(var a=(new Date).getFullYear(),n=0;n<30;n++){var s=a++;this.nearYears.push({value:s,label:s})}}},d=u,p=(i("2d26"),i("2877")),m=Object(p["a"])(d,a,n,!1,null,null,null);m.options.__file="index.vue";e["default"]=m.exports},"2d26":function(t,e,i){"use strict";var a=i("0175"),n=i.n(a);n.a},"2f4b":function(t,e,i){"use strict";var a=i("4fe0"),n=i.n(a);n.a},"365c":function(t,e,i){"use strict";i("cadf"),i("551c"),i("097d");var a=i("bc3a"),n=i.n(a),s=i("5c96"),o=(i("c0d6"),n.a.create({baseURL:"",timeout:2e4}));o.interceptors.request.use(function(t){return t},function(t){console.log("错误："),Promise.reject(t)}),o.interceptors.response.use(function(t){var e=t.data;return 200!==t.status?(Object(s["Message"])({message:e.msg,type:"error"}),403===e.code&&s["MessageBox"].confirm("登录超时，请重新登录","确定登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){window.location.href="#/login",location.reload()}),Promise.reject("error")):t.data},function(t){return console.log("err"+t),Object(s["Message"])({message:t.message,type:"error",duration:3e3}),Promise.reject(t)});var r=o;function l(t){return r({url:"highExams/basic/questions",method:"get"})}function c(t){return r({url:"highExams/basic/answers",method:"post",data:t.param})}function u(t){return r({url:"highExams/high/questions",method:"get"})}function d(t){return r({url:"highExams/high/answers",method:"post",data:t.param})}function p(t){return r({url:"highExams/high/detailResult",method:"post",data:t.param})}function m(){return r({url:"regions/cascade",method:"get"})}function f(t){return r({url:"highTechQuestions/search",method:"get",params:t.param})}function h(t){return r({url:"subsidyPolicies/recentModify",method:"get"})}function C(t){return r({url:"subsidyPolicies",method:"get",params:t.param})}function g(t){return r({url:"subsidyPolicies/company/"+"".concat(t.companyName),method:"get"})}function b(t){return r({url:"subsidyPolicies/region/"+"".concat(t.regionCode),method:"get"})}function v(t){return r({url:"dicts/financialGrowth",method:"get"})}function y(t){return r({url:"dicts/highField",method:"get"})}function k(t){return r({url:"dicts/ipType",method:"get"})}function A(t){return r({url:"dicts/otherCostType",method:"get"})}function _(t){return r({url:"dicts/recentYearIncoming",method:"get"})}function L(t){return r({url:"costAccount",method:"post",data:t.data})}i.d(e,"a",function(){return l}),i.d(e,"o",function(){return c}),i.d(e,"h",function(){return u}),i.d(e,"p",function(){return d}),i.d(e,"f",function(){return p}),i.d(e,"e",function(){return m}),i.d(e,"d",function(){return f}),i.d(e,"k",function(){return h}),i.d(e,"q",function(){return C}),i.d(e,"m",function(){return g}),i.d(e,"n",function(){return b}),i.d(e,"c",function(){return v}),i.d(e,"g",function(){return y}),i.d(e,"i",function(){return k}),i.d(e,"j",function(){return A}),i.d(e,"l",function(){return _}),i.d(e,"b",function(){return L})},"456d":function(t,e,i){var a=i("4bf8"),n=i("0d58");i("5eda")("keys",function(){return function(t){return n(a(t))}})},"4fe0":function(t,e,i){},"5eda":function(t,e,i){var a=i("5ca1"),n=i("8378"),s=i("79e5");t.exports=function(t,e){var i=(n.Object||{})[t]||Object[t],o={};o[t]=e(i),a(a.S+a.F*s(function(){i(1)}),"Object",o)}},"642e":function(t,e,i){"use strict";var a=i("7c8d"),n=i.n(a);n.a},"7c8d":function(t,e,i){},"817f":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"yydialog"},[i("el-dialog",{attrs:{title:"",visible:t.dialogConfig.centerDialogVisible,width:"35%",center:""},on:{"update:visible":function(e){t.$set(t.dialogConfig,"centerDialogVisible",e)},open:t.open}},[t._t("bodyArea")],2)],1)},n=[],s=i("be94"),o=i("2f62"),r={name:"",data:function(){return{}},props:["dialogConfig"],computed:Object(s["a"])({},Object(o["b"])([])),methods:{open:function(){}},mounted:function(){}},l=r,c=(i("642e"),i("2877")),u=Object(c["a"])(l,a,n,!1,null,null,null);u.options.__file="dialog.vue";e["a"]=u.exports},ac6a:function(t,e,i){for(var a=i("cadf"),n=i("0d58"),s=i("2aba"),o=i("7726"),r=i("32e9"),l=i("84f2"),c=i("2b4c"),u=c("iterator"),d=c("toStringTag"),p=l.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=n(m),h=0;h<f.length;h++){var C,g=f[h],b=m[g],v=o[g],y=v&&v.prototype;if(y&&(y[u]||r(y,u,p),y[d]||r(y,d,g),l[g]=p,b))for(C in a)y[C]||s(y,C,a[C],!0)}},be68:function(t,e,i){t.exports=i.p+"assets/img/qrcode.4c9bfde3.png"},d9de:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"bottomArea"},[a("div",{staticClass:"topArea"},[a("div",{staticClass:"qrcode"},[a("img",{attrs:{src:i("be68"),alt:""}})]),a("div",{staticClass:"phoneAdress"},[a("p",[t._v("联系我们：400-878-0703 ")]),a("p",[t._v("服务时间：周一至周五9:00-18:00 ")]),a("p",[t._v("邮箱：server@cezhitong.com")]),a("p",[t._v("地址：浙江省杭州市江干区红普路759号汇禾禧福汇电商创业大厦4-312室")])])]),a("div",{staticClass:"links"},[a("span",[t._v("友情链接：")]),a("a",{attrs:{href:"http://www.innocom.gov.cn/",target:"_blank"}},[t._v("国家高新技术企业认定管理工作网")]),a("a",{attrs:{href:"http://www.most.gov.cn/",target:"_blank"}},[t._v("科部网")]),a("a",{attrs:{href:"http://www.zjkjt.gov.cn/",target:"_blank"}},[t._v("浙江省科技厅")]),a("a",{attrs:{href:"http://202.107.205.11:8612/",target:"_blank"}},[t._v("浙江省高新技术企业认定管理工作网")])]),a("div",{staticClass:"copyRight"},[a("div",[t._v("©2018-2019 策知通科技公司版权所有 浙ICP备18006065号-1")]),a("div")])])])}],s={name:"",data:function(){return{}},methods:{},mounted:function(){}},o=s,r=(i("2f4b"),i("2877")),l=Object(r["a"])(o,a,n,!1,null,"1c418974",null);l.options.__file="index.vue";e["a"]=l.exports}}]);