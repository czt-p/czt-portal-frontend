import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tdks: [{
      "pageCode": "about",
      "pageName": "关于我们",
      "pageDescription": "关于我们",
      "title": "杭州策知通高新技术企业服务平台",
      "meta": [{
          "name": "keywords",
          "content": ""
        },
        {
          "name": "description",
          "content": ""
        }
      ]
    }, {
      "pageCode": "costing",
      "pageName": "高企成本核算",
      "pageDescription": "高企成本核算",
      "title": "高企申报|高新申报|高企成本核算-【杭州策知通】",
      "meta": [{
          "name": "keywords",
          "content": ""
        },
        {
          "name": "description",
          "content": ""
        }
      ]
    }, {
      "pageCode": "evaluating",
      "pageName": "高企评测-基础评估",
      "pageDescription": "高企评测-基础评估",
      "title": "高企评测|高新认定评估-【杭州策知通】",
      "meta": [{
          "name": "keywords",
          "content": "高企认定评测, 高企认定评估,高企认定条件"
        },
        {
          "name": "description",
          "content": "杭州策知通高企认定服务团队根据您填写的内容，免费一对一为您诊断您的企业是否满足高企认定条"
        }
      ]
    }, {
      "pageCode": "FAQs",
      "pageName": "高企问答",
      "pageDescription": "高企问答",
      "title": "关于高新高企认定相关知识-【杭州策知通】",
      "meta": [{
          "name": "keywords",
          "content": ""
        },
        {
          "name": "description",
          "content": ""
        }
      ]
    }, {
      "pageCode": "FAQsDetail",
      "pageName": "高企问答详情",
      "pageDescription": "高企问答详情",
      "title": "高企问答详情",
      "meta": [{
          "name": "keywords",
          "content": ""
        },
        {
          "name": "description",
          "content": ""
        }
      ]
    }, {
      "pageCode": "home",
      "pageName": "首页",
      "pageDescription": "首页",
      "title": "高新企业认定|高新企业申报评估认定条件|国家高新技术认定-【杭州策知通】",
      "meta": [{
          "name": "keywords",
          "content": "高新企业认定,高新企业申报,高新企业评估,国家高新技术认定"
        },
        {
          "name": "description",
          "content": "策知通高新技术企业服务平台专注于国家高新技术企业认定服务。团队拥有10年以上高新技术企业申报经验、财务规范辅导经验、知识产权申报经验；拥有资深科技项目申报专家、财务辅导专家，另邀请高企评审专家组建平台的专家顾问团队。平台推出高新技术企业认定咨询服务、保姆式服务、专家预审服务、担保服务等。策知通高新技术企业服务平台专注于国家高新技术企业认定服务。团队拥有10年以上高新技术企业申报经验、财务规范辅导经验、知识产权申报经验；拥有资深科技项目申报专家、财务辅导专家，另邀请高企评审专家组建平台的专家顾问团队。平台推出高新技术企业认定咨询服务、保姆式服务、专家预审服务、担保服务等。 "
        }
      ]
    }, {
      "pageCode": "newRate",
      "pageName": "高企评测-高新评分",
      "pageDescription": "高企评测-高新评分",
      "title": '高企评测-高新评分',
      "meta": [{
        "name": "keywords",
        "content": ""
      }, {
        "name": "description",
        "content": " "
      }]
    }, {
      "pageCode": "rateResult",
      "pageName": "高企评测-评估结果及建议",
      "pageDescription": "高企评测-评估结果及建议",
      "title": '高企评测-评估结果及建议',
      "meta": [{
        "name": "keywords",
        "content": ""
      }, {
        "name": "description",
        "content": " "
      }]
    }, {
      "pageCode": "subsidize",
      "pageName": "高企资助查询",
      "pageDescription": "高企资助查询",
      "title": "高企资助查询|高企资助政策-【杭州策知通】",
      "meta": [{
          "name": "keywords",
          "content": ""
        },
        {
          "name": "description",
          "content": ""
        }
      ]
    }, {
      "pageCode": "subsidizeDetail",
      "pageName": "高企资助详情",
      "pageDescription": "高企资助详情",
      "title": "高企资助详情",
      "meta": [{
          "name": "keywords",
          "content": ""
        },
        {
          "name": "description",
          "content": ""
        }
      ]
    }]
  },
  getters: {
    tdks: state => state.tdks
  },
  mutations: {

  },
  actions: {

  }
})
