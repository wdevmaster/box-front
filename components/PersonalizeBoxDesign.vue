<template lang="pug">
  div
    h2.builder-margin-title.select-box-title(v-if='this.form.box == null')
      span(v-if="type === '0'") {{ $t('Selecciona el diseño de tu boxify') }}
      span(v-if="type === '1'") {{ $t('Selecciona el color de tu Big Box')}}
    h2.builder-margin-title.select-box-title(v-if='this.form.box')
      | {{ $t('Estás personalizando el diseño {b}', {b: this.boxName}) }}
    h6.clientes-container
      span(v-if="type === '0'") {{ $t('Tu Boxify irá personalizado con el diseño elegido por fuera y dentro.') }}
      span(v-if="type === '1'") {{ $t('Tu Boxify irá personalizado con el nombre de la persona que elijas.')}}
    ul.row.small-up-2.medium-up-4.large-up-3.featured__grid.no-style.grid-centered
      li.column.column-block(v-for='box in boxes' :key='box.id')
        .box-select-option-inside.box-relative(:class='boxClass(box)' v-on:click='selectBox(box)')
          img(v-if='box.images[1]' :src='box.images[1].src' :alt='box.title')
          .box-info
            h5.box-label {{ box.title }}
            .price-tag
              span.compare-at-price(v-if='box.comparePrice') {{ price(box.comparePrice) }}
              |  {{ price(box.price) }}
  </template>

<script>
export default {
  props: {
    type: { type: String, required: true },
    boxes: { type: Array, default() { return [] }, required: false },
    boxName: { type: String, default: null, required: false },
    form: { type: Object, default: null, required: false }
  },
  methods: {
    selectBox(box) {
      const data = { box: box.shopifyVariantId }
      this.$emit('set', data)

      this.$snotify.success(
        this.$t('¡A por el regalo!'),
        this.$t('Box elegida'),
        {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true
        }
      )
      this.nextStep()
    },
    boxClass(box){
      if(this.form.box === box.shopifyVariantId){
        return 'selectedgift'
      }
      return ''
    },

    price(price) {
      return price.toFixed(2) + ' €'
    },
    prevStep(){
      this.$emit('prev')
    },
    nextStep(){
      this.$emit('next')
    }
  },
}
</script>
