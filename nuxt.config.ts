export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt', '@vite-pwa/nuxt', '@nuxt/eslint'],
  nitro: {
    preset: 'netlify'
  },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI || '',
    authSecret: '',
    adminEmail: '',
    adminPasswordHash: '',
    public: {
      appName: 'WordPanda'
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'WordPanda',
      short_name: 'WordPanda',
      description: 'Shared dictionary for German verb families and prefix variants.',
      theme_color: '#f3efe6',
      background_color: '#f3efe6',
      display: 'standalone'
    },
    devOptions: {
      enabled: false
    }
  }
})
