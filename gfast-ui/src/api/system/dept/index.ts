import request from '/@/utils/request';

export function getDeptList(query?:Object) {
    return request({
        url: '/system/dept/list',
        method: 'get',
        params:query
    })
}


export function addDept(data:object) {
    return request({
        url: '/system/dept/add',
        method: 'post',
        data:data
    })
}


export function editDept(data:object) {
    return request({
        url: '/system/dept/edit',
        method: 'put',
        data:data
    })
}


export function deleteDept(id:number) {
    return request({
        url: '/system/dept/delete',
        method: 'delete',
        data:{id}
    })
}
