import Vue from 'vue/dist/vue.esm.browser'
import RouterView from './RouterView.vue'
import RouterLink from './RouterLink.vue'

const routes = {
  '/home': {
    template: '<h2>Home</h2>'
  },
  '/about': {
    template: '<h2>About</h2>'
  }
}

const app = new Vue({
  el: '.vue.hash',
  components: {
    'router-view': RouterView,
    'router-link': RouterLink
  },
  beforeCreate () {
    this.$routes = routes
  }
})

