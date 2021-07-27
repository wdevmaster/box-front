<template lang="pug">
  .row.cart-page
    .columns.js-animate-appear-show(style='opacity: 1;')
      h2.page-title.text-center {{ $t('Tu carrito') }}
      p.text-center.rte-raw
        | {{ $t('No tienes ningún Boxify creado aún. Prueba a') }}
        |
        a(href='/pages/elige-tu-tipo-de-box') {{ $t('crear uno') }}
        | .
</template>

<script>
export default {
  head() {
    return {
      title: `${this.$t('Tu carrito')} - Boxify`,
    }
  },
}
</script>
