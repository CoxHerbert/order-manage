import request from '/@/utils/request';

export function getMenuList(query:Object) {
    return request({
        url: '/system/menu/list',
        method: 'get',
        params:query
    })
}

export function getUserMenus() {
    return request({
        url: '/system/user/getUserMenus',
        method: 'get'
    })
}

export function getMenuParams() {
    return request({
        url: '/system/menu/getParams',
        method: 'get'
    })
}

export function addMenu(data:Object) {
    return request({
        url: '/system/menu/add',
        method: 'post',
        data:data
    })
}

export function getMenuInfo(id:number) {
    return request({
        url: '/system/menu/get',
        method: 'get',
        params:{id}
    })
}

export function updateMenu(data:Object) {
    return request({
        url: '/system/menu/update',
        method: 'put',
        data:data
    })
}


// 删除菜单
export function delMenu(menuId:number) {
    return request({
        url: '/system/menu/delete',
        method: 'delete',
        data:{ids:[menuId]}
    })
}
