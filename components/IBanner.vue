<template lang="pug">
  #section-banner.section.js-animate-appear-show.text-shadow__none(style='opacity: 1;')
    .content-section.hero-section.section__background
      .background_darken
      .content-section__inner.row.hero__wrap.hero__wrap_left.hero_mobile-centered
        .medium-5.large-5.columns.hero__content.text-left
          h2.hero__title.section__title-style
            | {{ $t('Divertidas cajas') }}
            br
            |  {{ $t('regalo diseñadas a tu gusto') }}.
          .rte.hero__text.section__text-style
            p {{ $t('Crea y diseña tu propia caja regalo personalizada para cada ocasión y se acordará toda la vida') }}.
          a(href='/pages/elige-tu-tipo-de-box')
            button.button.btn.btn-primary {{ $t('Crear un Boxify') }}
        .medium-7.large-7.columns
          ul.auto
            li
              img.img-fluid(src='2_255ed29e-db8f-4e9b-be01-b77dc55590f4.png')
            li
              img.img-fluid(src='1_a947e798-6352-48eb-a0a3-1fcdf6677baa.png')
            li
              img.img-fluid(src='3_ad49062d-e6eb-46f8-96ad-9ae4921366eb.png')
    .hero-cta-box.text-center
      h3.bold {{ $t('Encuentra un diseño de boxify para') }}...
      ul.list-none.d-flex
        a(href='/collections/todas-las-cajas-personalizadas')
          li
            img(src='//cdn.shopify.com/s/files/1/2578/6058/t/35/assets/1i_220x.png?v=5682573118611567041' alt='')
            |           {{ $t('Ver todas') }}
        a(href='/collections/cajas-regalo-personalizadas-para-ellos')
          li
            img(src='//cdn.shopify.com/s/files/1/2578/6058/t/35/assets/2i_220x.png?v=7097502001431015202' alt='')
            |           {{ $t('Para el') }}
        a(href='/collections/cajas-regalo-personalizadas-para-ella')
          li
            img(src='//cdn.shopify.com/s/files/1/2578/6058/t/35/assets/3i_220x.png?v=12278094243628408710' alt='')
            |           {{ $t('Para ella') }}
        a(href='/collections/cajas-regalo-personalizadas-para-bodas')
          li
            img(src='//cdn.shopify.com/s/files/1/2578/6058/t/35/assets/4i_220x.png?v=14218697417596957523' alt='')
            |           {{ $t('Bodas') }}
        a(href='/collections/todas-las-cajas-personalizadas')
          li
            img(src='//cdn.shopify.com/s/files/1/2578/6058/t/35/assets/5i_220x.png?v=12287923140542959502' alt='')
            |           {{ $t('Parejas') }}
        a(href='/collections/cajas-regalo-personalizadas-para-mejor-amiga-o-amigo')
          li
            img(src='//cdn.shopify.com/s/files/1/2578/6058/t/35/assets/6i_220x.png?v=7831313208784448622' alt='')
            |           {{ $t('Amigos') }}
        a(href='/collections/cajas-regalo-personalizadas-para-ninos')
          li
            img(src='//cdn.shopify.com/s/files/1/2578/6058/t/35/assets/7i_220x.png?v=7227273105215794739' alt='')
            |           {{ $t('Niños') }}
        a(href='/collections/todas-las-cajas-personalizadas')
          li
            img(src='//cdn.shopify.com/s/files/1/2578/6058/t/35/assets/8i_220x.png?v=11928349617560600095' alt='')
            |           {{ $t('Cumples') }}
        a(href='/collections/todas-las-cajas-personalizadas')
          li
            img(src='//cdn.shopify.com/s/files/1/2578/6058/t/35/assets/9i_220x.png?v=9231515252056698164' alt='')
            |           {{ $t('Navidad') }}
        a(href='/collections/todas-las-cajas-personalizadas')
          li
            img(src='//cdn.shopify.com/s/files/1/2578/6058/t/35/assets/10i_220x.png?v=6754394009406044599' alt='')
            |           {{ $t('Aniversario') }}

</template>

<script>
export default {
  name: "IBanner"
}
</script>

<style scoped>
  #section-banner > .content-section {
    padding-top: 0;
    padding-bottom: 50px;
    color: #6a6663;
    font-size: 22px;
    background-color: #f9f6f6;
  }
  #section-banner .section__title-style {
    color: #343434 !important;
    font-size: 62px;
  }

  #section-banner .section__text-style {
    color: #6a6663;
    font-size: 22px;
  }

  #section-banner > .section__title-style {
    font-size: 45px;
  }

  @media print, screen and (min-width: 1024px) {
    #section-banner .section__title-style {
      font-size: 62px;
    }
  }

  #section-banner .background_darken {
    background:rgba(145, 111, 111, 0)
  }

  #section-banner .content-section {
    min-height: 560px;
  }
  @media print, screen and (min-width: 1024px) {
    #section-banner .content-section {
      min-height: 770px;
    }
  }

</style>
