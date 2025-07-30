import request from '/@/utils/request';

/**
 * 登录api接口集合
 * @method signIn 用户登录
 */
export function login(params: object){
	return request({
		url: '/system/login',
		method: 'post',
		data: params,
	});
}

/**
 * 获取验证码
 */
export function captcha(){
	return request({
		url:"/captcha/get",
		method:"get"
	})
}

/**
 * 退出登录
 */
export function logout(){
	return request({
		url: '/system/logout',
		method: 'get',
	});
}
