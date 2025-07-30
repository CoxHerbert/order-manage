import request from '/@/utils/request';

// 清除缓存
export function removeCache() {
    return request({
        url: '/system/cache/remove',
        method: 'delete'
    })
}
