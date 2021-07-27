<template lang="pug">
  div
    #header-page-contact.section.js-animate-appear-show.page__header(style='opacity: 1;')
      .content-section.section__background(style="height: 200px;background-color: #f26060;")
        .content-section__inner.row.columns.page__header__content.text-center.text-shadow__none
          h1.page__header__title.section__title-style {{ $t('Vende tus productos en Boxify') }}

    .page-template.custom-page(data-section-id='page-contact' data-section-type='page-template')
      div
        #section-1575743378040.section
          .content-section.contact-form-section.section__background.text-shadow__none(style="padding-top: 50px; padding-bottom: 50px; font-size: 16px;")
            .row.columns.js-animate-appear-show.text-center(style='opacity: 1;')
              h3.section-title.contact-form__title.section__title-style
                | {{ $t('¿Quieres hablar con nosotros?') }}
              .contact-form__description.section__text-style
                p {{ $t('Solemos tardar menos de {h} horas en responder', {h:'24'}) }}.
            .row.js-animate-appear-show.text-center(style='opacity: 1;')
              .medium-7.large-6.medium-centered.large-centered.columns.contact-form__wrap
                .contact__form__inputs
                  form#contact_form.contact-form(method='post' action='/contact#contact_form' accept-charset='UTF-8')
                    input(type='hidden' name='form_type' value='contact')
                    input(type='hidden' name='utf8' value='✓')
                    .row
                      .medium-6.large-6.columns
                        label(for='ContactFormName') {{ $t('Nombre') }}
                        input#ContactFormName.input-full.form__input(type='text' name='contact[nombre]' :placeholder="$t('Nombre')" autocapitalize='words' value='')
                      .medium-6.large-6.columns
                        label(for='ContactFormEmail') {{ $t('Correo electrónico') }}
                        input#ContactFormEmail.input-full.form__input(type='email' name='contact[email]' :placeholder="$t('Correo electrónico')" autocorrect='off' autocapitalize='none' value='')
                    label(for='ContactFormMessage') {{ $t('Mensaje') }}
                    textarea#ContactFormMessage.input-full.form__input(rows='5' name='contact[body]' :placeholder="$t('Mensaje')")
                    input#button-1575743378040.button(type='submit' :value="$t('Enviar mensaje')")

</template>

<script>
export default {
  head() {
    return {
      title: `${this.$t('Vende tus productos en Boxify')} - Boxify`,
    }
  },
}
</script>
