<template lang="pug">
  div
    #header-page-faq.section.js-animate-appear-show.page__header(style='opacity: 1;')
      .content-section.section__background(style='height: 200px; background-color: #f26060;')
        .content-section__inner.row.columns.page__header__content.text-shadow__none
          h1.page__header__title.section__title-style {{ $t('Preguntas Frecuentes') }}

    .page-template.custom-page(data-section-id='page-faq' data-section-type='page-template')
      div
        .row
          .medium-10.large-9.columns.custom-page__content.medium-centered.large-centered
            .rte
              h2
                strong {{ $t('Crear un Boxify') }}
              p
                strong {{ $t('¿Qué es un Boxify?') }}
              p
                | {{ $t('Un Boxify es una box 100% personalizable que podrás mandar a quien tu quieras, con tus fotos personalizadas, mensaje personalizado y el diseño y regalo(s) que elijas.') }}
              p
                strong
                  | {{ $t('¿Cuantas fotos puedo subir?') }}
                  br
              strong {{ $t('En la {t}', {t: 'Mini Print Box'}) }}:
              |
              | {{ $t('Puedes subir hasta {n} fotos de tu ordenador, móvil, Instagram o Facebook!', {n: 4}) }}
              br
              br
              p
                strong {{ $t('En la {t}', {t: 'Bigbox'}) }}:
                |
                | {{ $t('Sube hasta una foto que irá acompañando a tu tarjeta.') }}
                br
                br
              p
                strong {{ $t('¿Cuánto cuesta un Boxify?') }}
              p
                strong Mini Print Box:
                | {{ $t('{m} con todo incluido (caja + fotos).', {m: '11,95€'}) }}
                br
                | {{ $t('A partir de ahí, según el regalo que selecciones tendrá un precio adicional u otro.') }}
              p
                strong Big Box:&nbsp;
                | {{ $t('{m} con todo incluido (caja + tarjeta + viruta de seda blanca).', {m: '14,95€'}) }}
                br
                | {{ $t('A partir de ahí, según el regalo que selecciones tendrá un precio adicional u otro.') }}
              p
                strong
                  br
                  | {{ $t('Tengo problemas al crear mi Boxify, ¿Qué hago?') }}
              p
                | {{ $t('¡Utiliza nuestro chat de Lunes a Viernes de {hi} a {hf}!', {hi: '10.00h', hf: '18.00h'}) }}
                br
                br

              h2 {{ $t('Envíos y devoluciones') }}
              p
                strong {{ $t('¿Cuanto tarda el envío?') }}

              p
                span(style='text-decoration: underline;')
                  strong {{ $t('Para envíos estandar') }}:

              p {{ $t('El proceso de fabricación + envío es 48/96h laborables.  *Aunque el 95% de veces cumplimos las fechas, no dependen de nosotros los posibles percances de la agencia de transporte, por lo que recomendamos siempre pedir con margen por si hubiera algún imprevisto.') }}
              p {{ $t('El coste del envío es de {mi} a Península y {mj} a Baleares para pedidos inferiores a {my}.', {mi: '3,95€', mj: '6,95€', my: '40€'}) }}
              p {{ $t('Para pedidos superiores a {m} el envío es GRATIS', {m: '40€'}) }}.
              p {{ $t('Para envíos a Europa, el coste es de {m}', {m: '9,95€'}) }}.

              p
                span(style='text-decoration: underline;')
                  strong {{ $t('Para envíos exprés') }}:
              p {{ $t('El proceso de fabricación + envío es 48h laborables.  Además puedes elegir la fecha de entrega concreta. *Aunque el 95% de veces cumplimos las fechas, no dependen de nosotros los posibles percances de la agencia de transporte, por lo que recomendamos siempre pedir con margen por si hubiera algún imprevisto.') }}
              p {{ $t('El coste del envío es de {mi} a Península y {mj} a Baleares (un día más de envío) para pedidos inferiores a {my}.', {mi: '5,50€',mj: '7,95€', my: '40€' }) }}
              p {{ $t('Para pedidos superiores a {m} el envío es GRATIS', {m: '40€'}) }}.
              p {{ $t('Para envíos a Europa, el coste es de {m}', {m: '9,95€'}) }}.

              strong {{ $t('¿Se admiten devoluciones?') }}
              br
              | {{ $t('Al tratarse de un producto personalizado, sólo se admitirán devoluciones en caso de que el producto llegue deteriorado / roto.No se admitirán devoluciones por retrasos causados por la agencia de transporte.') }}

</template>

<script>
export default {
  head() {
    return {
      title: `${this.$t('Preguntas Frecuentes')} - Boxify`,
    }
  },
}
</script>
