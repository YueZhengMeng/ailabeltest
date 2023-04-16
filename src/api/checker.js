import request from '../request'

  
  export function getAllAnnotation(params) {
    return request({
      url: '/api/annotation/all',
      method: 'get',
      params
    })
  }

  export function getAnnotationByCheckerID(params) {
    return request({
      url: '/api/annotation/byCheckerID'+'/'+params.checkerID,
      method: 'get',
      params
    })
  }
  
  
export function checkAnnotation(data) {
  return request({
    url: '/api/annotation/check',
    method: 'post',
    data
  })
}