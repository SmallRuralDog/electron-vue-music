import Vue from 'vue'
import axios from './utils/http'
import ElementUI from 'element-ui';
import './assets/styles/theme.scss';
Vue.use(ElementUI);
import App from './App'
import router from './router'
import store from './store'
import filters from './filters'

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

//if (!process.env.IS_WEB)
Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app');
