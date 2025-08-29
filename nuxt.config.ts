export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@vite-pwa/nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
  app: {
    head: {
      title: 'Open Energy Coop Web',
      meta: [{ name: 'description', content: 'Open Energy Coop Web' }],
    },
  },
})