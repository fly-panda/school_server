import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locale'
import iView from 'iview'
import custom_form from '@/views/page/editor/custom_form';

import 'iview/dist/styles/iview.css'
import '@/my_theme/index.less'
import '@/my_theme/base.less'

import api from './common/js/index'
Vue.prototype.$api = api;

Vue.use(iView, {
    i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false
Vue.use(custom_form);
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
