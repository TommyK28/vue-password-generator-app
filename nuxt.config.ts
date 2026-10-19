// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  // TypeScript – striktní režim, kontrola typů přes `npm run typecheck`
  typescript: {
    strict: true
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Design System',
      meta: [
        { name: 'description', content: 'Vue 3 + Nuxt 3 + Vite Design System' }
      ]
    }
  },

  // Vite je výchozí bundler Nuxt 3
  vite: {
    css: {
      devSourcemap: true
    }
  },

  compatibilityDate: '2024-11-01'
})
