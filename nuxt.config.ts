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
      title: 'Password Generator',
      meta: [
        { name: 'description', content: 'Frontend Mentor – Password Generator App (Vue 3 + Nuxt 3)' }
      ],
      link: [
        // Lokální font (definice v assets/css/tokens/typography.css)
        { rel: 'preload', href: '/fonts/jetbrains-mono/JetBrainsMono-Bold.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }
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
