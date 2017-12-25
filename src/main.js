// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import VueRx from 'vue-rx'
import { Observable, Subscription, Subject } from 'rxjs'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import '../theme/index.css'
// fade/zoom 等
import '../theme/base.css'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import App from './App'

Vue.use(ElementUI).use(VueRx, {
  Observable,
  Subscription,
  Subject
})
sync(store, router)
Vue.config.productionTip = false
Vue.component(CollapseTransition.name, CollapseTransition)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  template: '<App/>',
  components: { App }
})
