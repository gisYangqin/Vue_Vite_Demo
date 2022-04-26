# 安装Vue Router
`npm install vue-router@4`
网址：www.next.router.vues.org


# 安装vuex
`npm install vuex@next --save`

# 配置路径别名
resolve-alias
直接引用path不知道类型，需要安装
`npm i -D @types/node`

# CSS 样式管理
安装CSS预处理器

``` sh
npm install -D sass 
npm install -D less  
npm install -D stylus
```  
使用SASS模式
style文件目录结构
``` sh
variables.scss  # 全局 Sass 变量
mixin.scss      # 全面mixin
common.scss     # 全局公共样式
transition.scss # 全局过渡动画样式
index.scss      # 组织统一导出
```

# axios
安装  
`npm install axios`  
[www.github.com/axios](www.github.com/axios)

# 请求接口
``` js
import request from '@/utils/request'

interface ResponseData<T=any>{
    status:number
    msg:string
    data:T
}

export const getLoginInfo = () => {
  return request.get<ResponseData<{
      a:number
      b:string
  }>>('/login/info').then(res => {
    return res.data
  })
  ```

# 跨域
## 前端配置CORS
## 配置开发服务器代理，vite-server.proxy

## 服务器配置CORS
nginx