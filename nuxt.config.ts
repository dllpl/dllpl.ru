// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'dllpl.ru',
      titleTemplate: '%s - dllpl.ru',
      meta: [{ name: 'description', content: 'dllpl.ru всё о веб-разработке' }],
      script: [{ src: 'https://telegram.org/js/telegram-web-app.js', defer: true }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },
  site: {
    url: 'https://dllpl.ru',
    identity: {
      type: 'Person',
    },
  },

  typescript: {
    strict: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },

  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    'nuxt-simple-sitemap',
    '@nuxtjs/tailwindcss',
    '@stefanobartoletti/nuxt-social-share',
    'yandex-metrika-module-nuxt3',
  ],

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  devServer: {
    host: '127.0.0.1',
  },

  yandexMetrika: {
    // eslint-disable-next-line n/prefer-global/process
    id: process.env.YANDEX_METRIKA_ID || '97670741',
    webvisor: true,
    consoleLog: false,
  },

  content: {
    highlight: {
      theme: 'dracula',
    },
  },
})
