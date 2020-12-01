import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#app',
    data: {
      message: "Can you say hello?",
      wine: "Gevrey Chambertin",
      selected: ''
    }
    // components: { App }
  })
})