import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementPlus from './pulgins/element-plus'

// 加载全局样式
import './style/index.scss'

createApp(App)
  .use(router)
  .use(store)
  .use(elementPlus)
  .mount('#app')
