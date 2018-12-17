// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import fastClick from 'fastclick'
import MintUI from 'mint-ui'
// import iView from 'iview'

import 'mint-ui/lib/style.css'
import './assets/styles/border.css'
import './assets/styles/reset.css'
import 'iview/dist/styles/iview.css'

import { ToastPlugin,ConfirmPlugin,AlertPlugin} from 'vux'

import api from './common/js/index'
Vue.prototype.$api = api;

Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)
Vue.use(MintUI)

// fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
