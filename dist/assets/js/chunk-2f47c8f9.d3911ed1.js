(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f47c8f9"],{"1ab2":function(t,e,n){t.exports=n.p+"assets/img/noneSubsidize.17c0cdde.png"},3903:function(t,e,n){"use strict";(function(t){var i=n("2f62"),a=n("365c"),s=n("d9de");function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e["a"]={name:"subsidize",metaInfo:function(){return{title:this.seoConfig.title,meta:this.seoConfig.meta}},data:function(){var t=this;return{seoConfig:this.$store.state.tdks.filter(function(e){return e.pageCode===t.$options.name})[0],companyName:"",regionList:[],selectedOptions:[],props:{value:"code",label:"name"},hotSearhList:[],subscribeList:[],params:{limit:10,pageIndex:1,queryString:[]},regionNone:!1,companyNone:!1,loadMore:!1,totalNum:0,loading:!0,reg:/<\/?.+?\/?>/g}},computed:o({},Object(i["c"])([])),components:{btArea:s["a"]},methods:{handleChange:function(t){},scrollBottom:function(){var e=this;if(t(".leftArea").height()+t(".leftArea").scrollTop()==t(".leftArea ul").height()+20){this.params.pageIndex++;var n=!0;n&&this.subscribeList.length<this.totalNum&&(this.loadMore=!0,n=!1,Object(a["q"])({param:this.params}).then(function(t){n=!0,e.subscribeList=e.subscribeList.concat(t.data.content),e.loadMore=!1}))}},clickSearchCompany:function(){var t=this;this.loading=!0;var e=!0;e&&(this.companyName&&this.companyName.trim()?Object(a["m"])({companyName:this.companyName.trim()}).then(function(n){t.loading=!1,e=!0,n.data.length>0?(t.companyNone=!1,t.regionNone=!1,t.subscribeList=n.data,t.toDetail(t.subscribeList[0])):(t.subscribeList=[],t.regionNone=!1,t.companyNone=!0)}):(this.params.pageIndex=1,this.initLeftContent(),e=!0))},clickSearchRegion:function(){var t=this;this.loading=!0;var e=!0;e&&(e=!1,this.selectedOptions.length>0?Object(a["n"])({regionCode:this.selectedOptions[this.selectedOptions.length-1]-0}).then(function(n){t.loading=!1,e=!0,n.data.length>0?(t.regionNone=!1,t.companyNone=!1,t.subscribeList=n.data,t.toDetail(t.subscribeList[0])):(t.subscribeList=[],t.companyNone=!1,t.regionNone=!0)}):(this.params.pageIndex=1,this.initLeftContent(),e=!0))},initLeftContent:function(){var t=this;this.regionNone=!1,this.companyNone=!1,Object(a["q"])({param:this.params}).then(function(e){t.loading=!1,t.subscribeList=e.data.content,t.totalNum=e.data.total,t.loadMore=!1})},initHotSearch:function(){var t=this;Object(a["k"])().then(function(e){t.hotSearhList=e.data})},toDetail:function(t){console.log("content",t),this.$router.push({name:"subsidizeDetail",params:{content:t}})},smoothscroll:function(){var e=t(".leftArea").scrollTop();e>0&&(window.requestAnimationFrame(this.smoothscroll),t(".leftArea")[0].scrollTo(0,e-e/5))}},mounted:function(){var e=this;Object(a["e"])().then(function(t){e.regionList=t.data}),this.initLeftContent(),this.initHotSearch(),t(".leftArea")[0].addEventListener("scroll",this.scrollBottom)}}}).call(this,n("1157"))},"9fa62":function(t,e,n){t.exports=n.p+"assets/img/noneRegion.e0c1d87a.png"},c87e:function(t,e,n){},d379:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"subsidize"},[i("div",{staticClass:"wrap"},[i("div",{staticClass:"topSearch animated fadeIn"},[i("el-tabs",{attrs:{type:"card"}},[i("el-tab-pane",{staticClass:"company clearfix",attrs:{label:"按公司全称查询"}},[i("el-input",{attrs:{placeholder:"请输入公司全称，查询当地高企资助政策；如：杭州快知科技有限公司",clearable:""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.clickSearchCompany(e):null}},model:{value:t.companyName,callback:function(e){t.companyName=e},expression:"companyName"}}),i("el-button",{attrs:{icon:"el-icon-search"},on:{click:t.clickSearchCompany}})],1),i("el-tab-pane",{staticClass:"company clearfix",attrs:{label:"按所在地查询"}},[i("el-cascader",{attrs:{options:t.regionList,props:t.props,"change-on-select":"",clearable:""},model:{value:t.selectedOptions,callback:function(e){t.selectedOptions=e},expression:"selectedOptions"}}),i("el-button",{attrs:{icon:"el-icon-search"},on:{click:t.clickSearchRegion}})],1)],1)],1),i("div",{staticClass:"downArea animated fadeIn"},[i("div",{staticClass:"leftArea"},[t.companyNone?i("div",{staticClass:"none1"},[i("img",{staticStyle:{width:"35%"},attrs:{src:n("1ab2"),alt:""}}),i("div",{staticStyle:{"font-size":"14px","margin-top":"25px"}},[t._v("搜索无结果...")])]):t._e(),t.regionNone?i("div",{staticClass:"none2"},[i("img",{staticStyle:{width:"35%"},attrs:{src:n("9fa62"),alt:""}}),i("div",{staticStyle:{"font-size":"14px","margin-top":"25px"}},[t._v("该地区的高新资助正在努力扩展中，试试在线客服寻求帮助吧…")])]):t._e(),i("ul",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[t._l(t.subscribeList,function(e,n){return i("li",{key:n},[i("div",{staticClass:"title"},[i("span",{staticClass:"ellipsis tName"},[t._v(t._s(e.name))]),i("span",{staticStyle:{"font-size":"11px","font-family":"SourceHanSansCN-Regular","font-weight":"400",color:"rgba(133,133,133,1)"}},[t._v("时间："+t._s(new Date(e.modifyTime).Format("yyyy-MM-dd hh:mm:ss")))])]),i("div",{staticClass:"content"},[i("span",{staticClass:"ellipsis",staticStyle:{width:"83%"}},[t._v(t._s(e.content.replace(t.reg,"")))]),i("el-button",{attrs:{type:"text"},on:{click:function(n){t.toDetail(e)}}},[t._v("查看详情 》")])],1)])}),t.subscribeList.length==t.totalNum&&0!=t.subscribeList.length?i("div",{staticClass:"noneList",staticStyle:{"text-align":"center",color:"#9e9e9e","font-size":"12px"}},[t._v("---没有更多了---")]):t._e()],2),t.subscribeList.length>6?i("el-button",{staticClass:"toTop",attrs:{circle:"",type:"primary",icon:"el-icon-arrow-up"},on:{click:t.smoothscroll}}):t._e(),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loadMore,expression:"loadMore"}],staticClass:"loadMore"})],1),i("div",{staticClass:"rightArea"},[i("div",{staticClass:"topTitle"},[t._v("\n                  最新高企资助政策\n              ")]),i("ul",t._l(t.hotSearhList,function(e,n){return i("li",{key:n},[i("div",{staticClass:"num"},[t._v(t._s(n+1))]),i("div",{staticClass:"hotSearch",on:{click:function(n){t.toDetail(e)}}},[t._v(t._s(e.name))])])}),0)])])]),i("btArea")],1)},a=[],s=n("3903"),o=s["a"],c=(n("f15b"),n("2877")),r=Object(c["a"])(o,i,a,!1,null,null,null);r.options.__file="index.vue";e["default"]=r.exports},f15b:function(t,e,n){"use strict";var i=n("c87e"),a=n.n(i);a.a}}]);