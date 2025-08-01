import request from '/@/utils/request';


export function logList(query:object) {
    return request({
        url: '/system/loginLog/list',
        method: 'get',
        params:query
    })
}


export function deleteLog(ids:number[]) {
    return request({
        url: '/system/loginLog/delete',
        method: 'delete',
        params:{ids}
    })
}



export function clearLog() {
    return request({
        url: '/system/loginLog/clear',
        method: 'delete',
    })
}
