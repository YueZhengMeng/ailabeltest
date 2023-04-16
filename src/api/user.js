import request from '../request'

export function deleteimage(data) {
    return request({
      url: '/api/image/delete'+'/'+data,
      method: 'delete',
      data
    })
  }
  
  export function getUserAllImage(params) {
    // console.log("params:",params)
    return request({
      url: '/api/image/byByUploaderID'+'/'+params.uploaderID,
      method: 'get',
      params
    })
  }

  export function getAnnotationByImageID(params) {
    // console.log("params:",params)
    return request({
      url: '/api/annotation/byImageID'+'/'+params.imageID,
      method: 'get',
      params
    })
  }  
  