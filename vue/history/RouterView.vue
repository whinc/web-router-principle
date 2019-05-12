<template>
  <component :is="routeView" />
</template>

<script>
import utils from '~/utils.js'

export default {
  data () {
    return {
      routeView: null
    }
  },
  created () {
    this.boundPopState = this.onPopState.bind(this)
  },
  beforeMount () {
    this.$root.$on('popstate', this.boundPopState)
  },
  beforeDestroy() {
    this.$root.$off('popstate', this.boundPopState)
  },
  methods: {
    onPopState (e) {
      const path = utils.extractUrlPath(window.location.href)
      this.routeView = this.$root.$routes[path] || null
      console.log('[Vue] popstate:', path)
    }
  }
}
</script>

