/** 
 * writen by jonah 2019年1月7日16:12:24
 */
import request from '../util/request.js'

//seo
export function getSeoConfig(obj) { //seo查询
    return request({
        url: 'seoConfig',
        method: 'get',
    })
}

//高企评测
export function basicQuestions(obj) { //查询基础评测所有问题
    return request({
        url: 'highExams/basic/questions',
        method: 'get',
    })
}
export function submitBasic(obj) { //提交基础评测答案
    return request({
        url: 'highExams/basic/answers',
        method: 'post',
        data:obj.param
    })
}
export function highQuestions(obj) { //查询高新评分所有问题
    return request({
        url: 'highExams/high/questions',
        method: 'get',
        // data:obj.param
    })
}
export function submitHigh(obj) { //提交高新评分答案
    return request({
        url: 'highExams/high/answers',
        method: 'post',
        data:obj.param
    })
}
export function getResult(obj) { //发送评测报告
    return request({
        url: 'highExams/high/detailResult',
        method: 'post',
        data:obj.param
    })
}



//高企问答
export function getRegions() { ///查询所有行政地区， 以层级方式进行组织
    return request({
        url: 'regions/cascade',
        method: 'get',
    })
}
export function getHighTechQ(obj) { //批量查询HighTechQuestion操作， 支持分页查询
    return request({
        url: 'highTechQuestions/search',
        method: 'get',
        params: obj.param
    })
}

//高企资助
export function recentModify(obj) { //查询最新更新的10条资助政策
    return request({
        url: 'subsidyPolicies/recentModify',
        method: 'get',
    })
}
export function subsidyPolicies(obj) { //批量查询资助政策操作，支持分页查询
    return request({
        url: 'subsidyPolicies',
        method: 'get',
        params: obj.param
    })
}
export function searchByCompany(obj) { //根据企业全名查询其能享受的资助政策
    return request({
        url: 'subsidyPolicies/company/'+`${obj.companyName}`,
        method: 'get',
    })
}
export function searchByRegionCode(obj) { //根据区域代码查询区域资助政策
    return request({
        url: 'subsidyPolicies/region/'+ `${obj.regionCode}`,
        method: 'get',
    })
}

//成本核算
export function financialGrowth(obj) { //财务增长情况
    return request({
        url: 'dicts/financialGrowth',
        method: 'get',
    })
}
export function highField(obj) { //高新领域
    return request({
        url: 'dicts/highField',
        method: 'get',
    })
}
export function ipType(obj) { //知识产权类型
    return request({
        url: 'dicts/ipType',
        method: 'get',
    })
}
export function otherCostType(obj) { //其他费用类型
    return request({
        url: 'dicts/otherCostType',
        method: 'get',
    })
}
export function recentYearIncoming(obj) { //最近一年营业收入
    return request({
        url: 'dicts/recentYearIncoming',
        method: 'get',
    })
}
export function costAccount(obj) { //成本核算
    return request({
        url: 'costAccount',
        method: 'post',
        data: obj.data,
    })
}