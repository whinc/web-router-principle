<template>
  <a @click.prevent="onClick" href=''><slot></slot></a>
</template>

<script>
export default {
  props: {
    to: String
  },
  methods: {
    onClick () {
      history.pushState(null, '', this.to)
      this.$root.$emit('popstate')
    }
  }
}
</script>

