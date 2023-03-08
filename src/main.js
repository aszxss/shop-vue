import Vue from 'vue'
import App from './App.vue'
import router from './router'
import typeNav from '../src/pages/Home/typeNav/typeNav.vue'
import  {reqCatgoryList} from './api/api'
import Vuex from 'vuex'
Vue.component(typeNav.name,typeNav)
Vue.config.productionTip = false,
reqCatgoryList(),
new Vue({
  router,
  Vuex,
  render: h => h(App),
}).$mount('#app')
