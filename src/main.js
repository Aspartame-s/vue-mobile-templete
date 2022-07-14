import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/common.css'
import 'vant/lib/index.css'
import Vant from 'vant';
import '@/assets/iconfont/iconfont.css'
import store from './store/index'

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
