<template lang="pug">
  div
    #shopify-section-collection-header.shopify-section
      .row.collection-header-new
        h1.h1 {{ $t(slug) }}

    .collection-page
      .row
        .large-12.medium-12.columns.collection-content
          .collection__products-grid.row.small-up-2.medium-up-3.large-up-3.js-animate-appear-up(style='transform: matrix(1, 0, 0, 1, 0, 0); opacity: 1;')
            .column.column-block.product-loop-item
              .product-loop-item-inner
                a.product-loop-image.secondary-image-enabled(href='https://www.boxify.es/products/crear-un-boxify')
                  img.product-image_featured.lazyautosizes.lazyloaded(src='//cdn.shopify.com/s/files/1/2578/6058/products/Treboles4hojas_png-01_300x300.jpg?v=1596480195' data-widths='[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]' data-aspectratio='1.0' data-sizes='auto' alt='Caja regalo personalizada de Lucky Print' data-srcset='//cdn.shopify.com/s/files/1/2578/6058/products/lucky_180x.jpg?v=1623934797 180w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_360x.jpg?v=1623934797 360w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_540x.jpg?v=1623934797 540w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_720x.jpg?v=1623934797 720w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_900x.jpg?v=1623934797 900w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_1080x.jpg?v=1623934797 1080w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_1296x.jpg?v=1623934797 1296w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_1512x.jpg?v=1623934797 1512w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_1728x.jpg?v=1623934797 1728w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_2048x.jpg?v=1623934797 2048w' sizes='340px' srcset='//cdn.shopify.com/s/files/1/2578/6058/products/lucky_180x.jpg?v=1623934797 180w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_360x.jpg?v=1623934797 360w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_540x.jpg?v=1623934797 540w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_720x.jpg?v=1623934797 720w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_900x.jpg?v=1623934797 900w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_1080x.jpg?v=1623934797 1080w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_1296x.jpg?v=1623934797 1296w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_1512x.jpg?v=1623934797 1512w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_1728x.jpg?v=1623934797 1728w, //cdn.shopify.com/s/files/1/2578/6058/products/lucky_2048x.jpg?v=1623934797 2048w')
                a.section__text-style.product-loop-title(href='/products/lucky-print-1') Caja regalo personalizada de Lucky Print
                a.section__text-style.product-loop-price(href='/products/lucky-print-1')
                  span.money &euro;11.95
                a(href='https://boxifygifts.com/products/crear-un-boxify?box=4553798451318')
                  button.button.btn-primary {{ $t('Ir al diseñador') }}

</template>

<script>
export default {
  asyncData({ params }) {
    const slug = params.slug
    return { slug }
  },

  head() {
    return {
      title: `${this.$t(this.slug)} - Boxify`,
    }
  },
}
</script>
