export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    '@pinia/nuxt'
  ],
  pwa: {
    manifest: {
      name: 'Electricity Price Web',
      short_name: 'PriceWeb',
      lang: 'es',
      theme_color: '#ffffff'
    }
  }
})
