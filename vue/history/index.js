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
  el: '.vue.history',
  components: {
    'router-view': RouterView,
    'router-link': RouterLink
  },
  created () {
    this.$routes = routes
    this.boundPopState = this.onPopState.bind(this)
  },
  beforeMount () {
    window.addEventListener('popstate', this.boundPopState) 
  },
  beforeDestroy () {
    window.removeEventListener('popstate', this.boundPopState) 
  },
  methods: {
    onPopState (...args) {
      this.$emit('popstate', ...args)
    }
  }
})

