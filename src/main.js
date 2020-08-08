// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入echarts
import echarts from 'echarts'
// 引入axios
import axios from 'axios'

import App from './App'

import Buttons from './components/Buttons'
import HelloWorld from './components/HelloWorld'
import TextLink from './components/TextLink'
import Radios from './components/Radios'
import Checkboxes from './components/Checkboxes'
import Animations from './components/Animations'
import Inputs from './components/Inputs'
import InputNumbers from './components/InputNumbers'
import Selects from './components/Selects'
import Cascader from './components/Cascader'
import EchartsBar from './components/echarts-bar'
import UniswapAccounts from './components/uniswap-accounts'
import UniswapPair from './components/uniswap-pair'
// import { component } from 'vue/types/umd'

Vue.prototype.$echarts = echarts
// 使用时: 类似this.$axios.get(`url${params}`)
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/Buttons', component: Buttons },
  { path: '/TextLink', component: TextLink },
  { path: '/Radios', component: Radios },
  { path: '/Checkboxes', component: Checkboxes },
  { path: '/Animations', component: Animations },
  { path: '/Inputs', component: Inputs },
  { path: '/InputNumbers', component: InputNumbers },
  { path: '/Selects', component: Selects },
  { path: '/Cascader', component: Cascader },
  { path: '/EchartsBar', component: EchartsBar },
  { path: '/UniswapAccounts', component: UniswapAccounts },
  {
    path: '/UniswapPair',
    name: 'UniswapPair',
    component: UniswapPair
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
