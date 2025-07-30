import request from '/@/utils/request';

export function getPersonalInfo() {
    return request({
        url: '/system/personal/getPersonalInfo',
        method: 'get',
    })
}


export function editPersonal(data:object) {
    return request({
        url: '/system/personal/edit',
        method: 'put',
        data:data
    })
}

//重置個人密碼
export function resetPwdPersonal(data:object) {
    return request({
        url: '/system/personal/resetPwd',
        method: 'put',
        data:data
    })
}


