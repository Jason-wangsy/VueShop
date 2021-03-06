// 入口文件
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'


// 按需导入 Mint-UI 中的组件   
import MintUI from 'mint-ui'
// import { Header, Swipe, SwipeItem, Button, Lazyload  } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// Vue.use(Lazyload);
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)


// 1.3 导入自己的 router.js 路由模块
import router from './router.js'


// 导入 App 根组件
import app from './App.vue'

import moment from 'moment'
Vue.filter('dateFormat',function(dateStr,format="YYYY-MM-DD HH:mm:ss"){
  return moment(dateStr).format(format)
})

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router // 1.4 挂载路由对象到 VM 实例上
})