<template lang="pug">
  h1 PersonalizeGift
</template>

<script>
export default {
  props: {
    type:   { type: String, required: true, },
    gifts:  { type: Array, default() { return [] }, required: false },
    box:    { type: Object, default: null, required: true },
    form:   { type: Object, default: null, required: true },
    pack:   { type: String, default: null, required: false }
  },

  data() {
    return {
      selectedCollection: null,
      items: [],
      isActive: false,
      isHidden: false,
      selectedGift: null,
      previewingGift: null,
      max: 20,
      modals: {
        boxSize: false,
        maxSpace: false
      }
    }
  },

  created () {

  },

  computed: {
    filteredGifts() {
      if(this.selectedCollection == null)
        if (this.type === '0')
          return this.gifts.filter((el) => el.size <= 3).filter(g => this.isGiftAvailable(g))
        else if (this.type === '1')
          return this.gifts


      if (this.type === '0')
        return this.gifts.filter((el) => el.collection_id === this.selectedCollection._id && el.size <= 3).filter(g => this.isGiftAvailable(g))
      else if (this.type === '1')
        return this.gifts.filter((el) => el.collection_id === this.selectedCollection._id)
    }
  },
}
</script>
