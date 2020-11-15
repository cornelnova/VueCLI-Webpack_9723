import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import VueProgressBar from 'vue-progressbar'
import router from './router'

Vue.config.productionTip = false

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueProgressBar, options)

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')

