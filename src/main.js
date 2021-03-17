import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/style/reset.css'
import './assets/element/index.css'
import 'video.js/dist/video-js.css'
import Video from 'video.js'

Vue.prototype.$video = Video
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
