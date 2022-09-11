import Vue from 'vue'
import App from './App.vue'
import {
  BootstrapVue
} from 'bootstrap-vue'
import VueWaypoint from 'vue-waypoint'

// Waypoint plugin
Vue.use(VueWaypoint)

var VueScrollTo = require('vue-scrollto');

// BootstrapVue
Vue.use(BootstrapVue)

// Scroll to id
Vue.use(VueScrollTo)

// Styles
// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Leaflet
import 'leaflet/dist/leaflet.css';
// Custom
require('@/assets/styles/main.scss');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// eslint-disable-next-line  
delete L.Icon.Default.prototype._getIconUrl
// eslint-disable-next-line  
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})


/*
#TO DO
[ ] right text
[ ] change content images
[ ] change instagram url
*/