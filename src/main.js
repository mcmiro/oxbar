import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'

// BootstrapVue
Vue.use(BootstrapVue)

// Styles
// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Leaflet
import 'leaflet/dist/leaflet.css';
// Custom
require('@/assets/styles/main.scss')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
