import Vue from 'vue'
import App from './App.vue'
import CustomButtom from '@jfdev/webcomps-button'
import Card from '@jfdev/webcomps-card'

Vue.config.productionTip = false

Vue.use(Card)
Vue.use(CustomButtom)
new Vue({
  render: h => h(App),
}).$mount('#app')
