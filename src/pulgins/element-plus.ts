// 全局配置element-plus插件
import ELementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/dist/index.css'
import { App } from 'vue'

export default {
  install (app:App) {
    app.use(ELementPlus, { size: 'small', zIndex: 3000 })
  }
}
