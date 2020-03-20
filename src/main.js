// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import Buttons from './components/Buttons'
import HelloWorld from './components/HelloWorld'
import TextLink from './components/TextLink'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/Buttons', component: Buttons },
  { path: '/TextLink', component: TextLink }
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