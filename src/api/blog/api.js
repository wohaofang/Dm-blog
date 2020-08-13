import api from '@/api/config.js'



/**
 * @description: Summary issues 列表
 * @author: Dm
 * @date: 2020-08-13
* */

export function apiIssues (params) {
    return api.get(`https://api.github.com/repos/wohaofang/Summary/issues?page=${params.page||0}&per_page=${params.num||0}&labels=${params.labels}`)
}

/**
 * @description: Summary labels 列表
 * @author: Dm
 * @date: 2020-08-13
* */

export function apiLabels() {
    return api.get('https://api.github.com/repos/wohaofang/Summary/labels')
}


// export function apiIssuesLabels (params) {
//     return api.get(`https://api.github.com/repos/wohaofang/Summary/issues?labels=${params.labels}`)
// }