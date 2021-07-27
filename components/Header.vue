<template lang="pug">
  .header-container(data-section-id='header' data-section-type='header')
    header#main-header
      .row
        .small-3.medium-3.columns.hide-for-large
          .burger-container(data-toggle='mobileMenuSidebar' aria-expanded='false' aria-controls='mobileMenuSidebar')
            #burger
              .bar.topBar
              .bar.btmBar
        .small-6.medium-6.large-3.columns.header__logo
          .logo-wrap
            div(itemscope='' itemtype='http://schema.org/Organization')
              a.logo__link(href='/' itemprop='url' title='Boxify' style='width:110px')
                img.logo__img(src='/new_logo_512x.png' alt='Boxify' itemprop='logo')
        .large-6.columns.show-for-large.primary-menu-container
          ul#primary-menu.dropdown.menu(role='menubar' data-e='p2jrte-e')
            li.menu-item(role='menuitem')
              a.menu-item-link(href='/pages/preguntas-frecuentes') {{ $t('Preguntas Frecuentes') }}
            li.menu-item(role='menuitem')
              a.menu-item-link(href='#') {{ $t('Para empresas') }}
            li.menu-item(role='menuitem')
              a.menu-item-link(href='/pages/elige-tu-tipo-de-box') {{ $t('Crear un boxify') }}

        .small-3.medium-3.large-3.columns.text-right
          h-menu
</template>

<script>
export default {
  name: "Header"
}
</script>
