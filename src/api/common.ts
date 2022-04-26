import request from '@/utils/request'

// export const getLoginInfo3 = () => {
//   return request({
//     method: 'GET',
//     url: '/login/info'
//   })
//

interface ILoginInfo{
  a:number
  b:string
  c:boolean
}

export interface ResponseData{
    status:number
    msg:string
    data:ILoginInfo
}

export const getLoginInfo = () => {
  return request.get<ResponseData>('/login/info')
    .then(res => {
      return res.data
    })
}

export const getLoginInfo2 = () => {
  return request({
    method: 'GET',
    url: '/login/info'
  })
}
