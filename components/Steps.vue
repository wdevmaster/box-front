<template lang="pug">
  ul.steps
    li(:class='stepClass(i)' v-on:click='goTo(i)' v-for='(s, i) of steps' :key='i')
      span.number {{ i+1 }}
      span.step-name {{ s }}
</template>

<script>
export default {
  name: "Steps",

  props: {
    step: {type: Number, value: 0, required: true},
    steps: {type: Array, value: [], required: true}
  },

  methods: {
    stepClass(i){
      const classes = []

      if(this.step === i){
        classes.push('current')
      }

      return classes.join(' ')
    },

    goTo(s){
      this.$emit('goto', s)
    },
  }
}
</script>

<style lang="scss">
  @import '~/assets/component-steps';
</style>
