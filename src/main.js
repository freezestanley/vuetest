import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
alert('pppppp')
console.log('fffff')

window.addEventListener('popstate', function(event) {
  console.log(event);
})
