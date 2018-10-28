import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import Vue2Storage from 'vue2-storage'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.use(Vue2Storage, {
  prefix: 'app_medfacil_',
  driver: 'local',
  ttl: 60 * 60 * 24 * 1000
});

Vue.use(Vuetify)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
