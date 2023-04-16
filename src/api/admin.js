import request from '../request'


  
  export function getAllUser(params) {
    return request({
      url: '/api/user/all',
      method: 'get',
      params
    })
  }

  export function getImageAll(params) {
    return request({
      url: '/api/image/all',
      method: 'get',
      params
    })
  }

  export function getAllAnnotation(params) {
    return request({
      url: '/api/annotation/all',
      method: 'get',
      params
    })
  }
  
  export function getImageByImageID(params) {
    return request({
      url: '/api/image/byImageID'+'/'+params,
      method: 'get',
      params
    })
  }

  
  export function deleteuser(data) {
    return request({
      url: '/api/user/deleteUser'+'/'+data,
      method: 'delete',
      data
    })
  }

  
  export function deleteimage(data) {
    return request({
      url: '/api/image/delete'+'/'+data,
      method: 'delete',
      data
    })
  }

  export function deleteannotation(data) {
    return request({
      url: '/api/annotation/delete'+'/'+data,
      method: 'delete',
      data
    })
  }

  export function resetRole(data) {
    return request({
      url: '/api/user/resetRole',
      method: 'put',
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