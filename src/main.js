import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from'./store'
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false;

Vue.use(new VueSocketIO({
  connection: io('http://localhost:4000/')
}), store);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
