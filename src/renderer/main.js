import { remote } from 'electron'
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import moment from 'moment'

// Styles
import './assets/font-awesome/css/font-awesome.css'

Vue.prototype.$db = remote.getGlobal('db')
Vue.prototype.$config = remote.getGlobal('config')
Vue.prototype.$moment = moment

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: {App},
  router,
  store,
  template: '<App/>'
}).$mount('#app')

router.push('password') // send them to the login screen
