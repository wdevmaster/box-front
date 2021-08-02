<template lang="pug">
  .builder
    .loading(v-show='loading')
      Spinner
    .loaded-wrapper(v-show='!loading')
      .wrapper.gift-builder
        PersonalizeBox(@loading="isLoading")
</template>

<script>
export default {
  asyncData({ params, query }) {
    const slug = params.slug
    return { slug }
  },

  data() {
    return {
      loading: true
    }
  },

  head() {
    return {
      title: `${this.$t(this.slug)} - Boxify`,
    }
  },

  methods: {
    isLoading(val) {
      this.loading = val
    }
  },
}
</script>

<style>
#PageContainer {
  background: #f9f6f6;
}
.main-content {
  max-width: 1200px;
  margin: auto;
}
</style>
