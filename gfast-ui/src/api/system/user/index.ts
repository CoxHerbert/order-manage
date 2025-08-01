import request from '/@/utils/request';

export function getUserList(query:Object) {
    return request({
        url: '/system/user/list',
        method: 'get',
        params:query
    })
}

export function getDeptTree() {
    return request({
        url: '/system/dept/treeSelect',
        method: 'get'
    })
}

export function getParams() {
    return request({
        url: '/system/user/params',
        method: 'get'
    })
}

export function getEditUser(id:number) {
    return request({
        url: '/system/user/getEdit',
        method: 'get',
        params:{id}
    })
}

export function addUser(data:object) {
    return request({
        url: '/system/user/add',
        method: 'post',
        data:data
    })
}


export function editUser(data:object) {
    return request({
        url: '/system/user/edit',
        method: 'put',
        data:data
    })
}

export function resetUserPwd(userId:number, password:string) {
    return request({
        url: '/system/user/resetPwd',
        method: 'put',
        data:{userId,password}
    })
}

export function changeUserStatus(userId:number, status:number) {
    return request({
        url: '/system/user/setStatus',
        method: 'put',
        data:{userId,status}
    })
}


export function deleteUser(ids:number[]) {
    return request({
        url: '/system/user/delete',
        method: 'delete',
        data:{ids}
    })
}


