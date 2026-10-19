// https://nuxt.com/docs/api/configuration/nuxt-config

// GitHub Pages servíruje projekt v podsložce /<repo>/ – nastavuje workflow přes NUXT_APP_BASE_URL
const baseURL = process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  // TypeScript – striktní režim, kontrola typů přes `npm run typecheck`
  typescript: {
    strict: true
  },

  app: {
    baseURL,
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Password Generator',
      meta: [
        { name: 'description', content: 'Frontend Mentor – Password Generator App (Vue 3 + Nuxt 3)' }
      ],
      link: [
        // Lokální font (definice v assets/css/tokens/typography.css)
        { rel: 'preload', href: `${baseURL}fonts/jetbrains-mono/JetBrainsMono-Bold.woff2`, as: 'font', type: 'font/woff2', crossorigin: '' }
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
