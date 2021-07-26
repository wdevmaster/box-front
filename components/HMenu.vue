<template lang="pug">
  ul#header-right-menu.dropdown.menu(role='menubar' data-e='91i64c-e')
    li.menu-item.show-for-large.header__user.is-dropdown-submenu-parent.opens-right(role='menuitem' aria-haspopup='true' aria-label='\
    ' data-is-click='false' @mouseover="hover=true" @mouseleave="hover=false" :class="{'is-active': hover}")
      a.menu-item-link(href='#')
        span.b-icon.b-icon-user-avatar
      ul.sub-menu.submenu.text-left.is-dropdown-submenu.first-sub.vertical(
        @mouseover="hover=true"
        @mouseleave="hover=false"
        :class="{'js-dropdown-active': hover}"
        data-submenu=''
        role='menu'
        style=''
      )
        li.menu-item.is-submenu-item.is-dropdown-submenu-item(role='menuitem')
          a#customer_login_link(href='#') {{ $t('Entrar') }}
        li.menu-item.is-submenu-item.is-dropdown-submenu-item(role='menuitem')
          a#customer_register_link(href='/account/register') {{ $t('Crear cuenta') }}
    li.menu-item.header__cart(role='menuitem')
      a.menu-item-link(href='/cart')
        span.b-icon.b-icon-bag
        .header__cart-count.hidden-count
          span#CartCount 0
</template>

<script>
export default {
  name: "HMenu",

  data() {
    return {
      hover: false
    }
  },
}
</script>
