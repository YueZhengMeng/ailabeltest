import request from '../request'

// export function register(data) {
//     return request({
//       url: '/user/register',
//       method: 'post',
//       data
//     })
//   }
  
  export function getImageAll(params) {
    return request({
      url: '/api/image/all',
      method: 'get',
      params
    })
  }

  export function getAnnotationByAnnotaterID(params) {
    return request({
      url: '/api/annotation/byAnnotaterID'+'/'+params.annotaterID,
      method: 'get',
      params
    })
  }

  
  export function addAnnotation(data) {
    return request({
      url: '/api/annotation/add',
      method: 'post',
      data
    })
  }