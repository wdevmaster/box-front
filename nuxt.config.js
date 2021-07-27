export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'code',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/universe-core.css',
    '~/assets/css/custom.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/filters.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL
  },

  // I18n module configuration: https://i18n.nuxtjs.org/es/setup
  i18n: {
      strategy: 'prefix_except_default',
      locales: [
        {
          code: 'es',
          file: 'es.js',
          name: 'Español'
        },
        {
          code: 'fr',
          file: 'fr.js',
          name: 'Français'
        }
      ],
      lazy: true,
      langDir: '~/lang',
      defaultLocale: 'es'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
