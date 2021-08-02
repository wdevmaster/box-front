<template lang="pug">
  div
    Steps(:step='step' :steps='steps' @goto='goTo')
    transition(name='fade' mode='out-in')
      section.builder-inner(v-if='step == 0' key='0')
        PersonalizeBoxDesign(:type="type" :boxes="boxes" :form="form" v-on:set="mergeFormData" v-on:next="next")
      section.builder-inner(v-if='step == 1' key='1')
        PersonalizeGift(:type="type" :box="selectedBox" :pack="selectedPack" :gifts="gifts" :form="form" v-on:set="mergeFormData" v-on:next="next" v-on:prev="prev")
      section.builder-inner(v-if='step == 2' key='2')
        | personalize-select-card
        | personalize-recipient
      section.builder-inner(v-if='step == 3' key='3')
        | personalize-customize-card
        | personalize-photos
</template>

<script>
export default {
  name: "PersonalizeBox",

  data() {
    return {
      type : null,
      form: {
        image0: null,
        image1: null,
        image2: null,
        image3: null,
        name: '',
        message: '',
        box: null,
        gift: null,
        type: 'small',
        lang: 'es'
      },
      boxes: [],
      gifts: [],
      cards: [],
      step: 0,
      maxStep: 1,
    }
  },

  computed: {
    steps() {
      let arryStep = []
      if (this.type === '1')
        arryStep = [
          this.$t('Elige color'),
          this.$t('Elige regalos'),
          this.$t('Selecciona tu tarjeta'),
          this.$t('¡Personalízalo!'),
        ]
      else if (this.type === '0')
        arryStep = [
          this.$t('Elige una box'),
          this.$t('Elige regalo'),
          this.$t('¡Personalízalo!'),
          this.$t('Personalizar fotos'),
        ]

      return arryStep
    },

    selectedBox () {
      return this.boxes.find(b => b.shopifyVariantId === this.form.box)
    },

    selectedPack () {
      if (this.$route.query.pack)
        return decodeURI(this.route.query.pack)

      return null
    }

  },

  created () {
    this.type = this.$route.query.t
    if (this.type === '1')
      this.maxStep = 0

    this.load()
  },

  methods: {
    async load() {
      this.isLoading(true)

      const responses = await Promise.all([
        this.$axios.get('/front/product?type=box'),
        this.$axios.get('/front/product?type=bigbox'),
        this.$axios.get('/front/product?type=gift'),
        this.$axios.get('/front/product?type=card')
      ])

      this.boxes = responses[this.type].data.products
      this.gifts = responses[2].data.products
      this.cards = responses[3].data.products

      // Sort gifts
      this.gifts.sort((a, b) => {
        return a.price > b.price ? 1 : -1
      })

      // Sort Boxes
      this.boxes.sort(function(a,b){return a.title < b.title ? -1 : 1});

      if (this.type === '0') {
        if (this.boxes.length > 0)
          this.form.box   = this.boxes[0].shopifyVariantId

        if (this.gifts.length > 0)
          this.form.gift  = this.gifts[0].shopifyVariantId
      }

      this.isLoading(false)
      window.scrollTo(0, 0)
    },

    mergeFormData(data){
      this.form = Object.assign(this.form, data)
    },

    isLoading (val) {
      this.$emit('loading', val)
    },

    goTo(step){
      if (step <= this.maxStep) {
        this.step = step
      }
    },
    next(){
      this.step++
      if (this.step > this.maxStep) {
        this.maxStep = this.step
      }

      this.$nextTick(function(){
        window.scrollTo(0, 0)
      })
    },
    prev(){
      if(this.step > 0){
        this.step--
      }
      this.$nextTick(function(){
        window.scrollTo(0, 0)
      })
    },
  },
}
</script>

<style lang="scss">
  @import '~/assets/perzonalize-box';
</style>
