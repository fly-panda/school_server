// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import fastClick from 'fastclick'
import MintUI from 'mint-ui'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'mint-ui/lib/style.css'
import './assets/styles/border.css'
import './assets/styles/reset.css'

// import { ToastPlugin,ConfirmPlugin,AlertPlugin, LoadingPlugin} from 'vux'

import { Toast } from 'mint-ui'

import api from './common/js/index'
Vue.prototype.$api = api;

Vue.use(MintUI)
Vue.use(ElementUI)
// Vue.use(ConfirmPlugin)
// Vue.use(AlertPlugin)
// Vue.use(LoadingPlugin)

// fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
