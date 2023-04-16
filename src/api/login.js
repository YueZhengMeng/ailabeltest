import request from '../request'

export function login(data) {
    return request({
      url: '/api/login',
      method: 'post',
      data
    })
}

export function register(data) {
  return request({
    url: '/api/user/register',
    method: 'post',
    data
  })
}

export function getUserInfo(params) {
  return request({
    url: '/api/user/me',
    method: 'get',
    params
  })
}

export function resetUserName(data) {
  return request({
    url: '/api/user/resetUserName',
    method: 'put',
    data
  })
}

export function resetPassword(data) {
  return request({
    url: '/api/user/resetPassword',
    method: 'put',
    data
  })
}

