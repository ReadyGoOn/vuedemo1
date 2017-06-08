// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

// var md5 = require('md5')
// import VueResource from 'vue-resource'
// Vue.use(VueResource);


/*css*/
import '@/assets/css/lib/reset.css'
import '@/assets/css/iconfont/iconfont.css'
import '@/assets/css/lib/animate.css'
/*rem*/
import '@/assets/js/rem.js'
/*js*/
import common from '@/assets/js/common.js'

/*axios*/
Vue.prototype.$ajax = axios;
Vue.prototype.$common = common;


Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
