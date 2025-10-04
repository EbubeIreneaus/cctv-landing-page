// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  css: ['~/assets/main.css'],

  ui: {
    colorMode: false,
    theme: {
      colors: ['primary', 'secondary', 'error', 'warning', 'background','info']
    }
  }
})