export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ]
    }
  },
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
      description: 'Личная база немецких глаголов и их приставочных вариантов.',
      theme_color: '#f3efe6',
      background_color: '#f3efe6',
      display: 'standalone',
      icons: [
        {
          src: '/icons/icon-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icons/icon-512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    devOptions: {
      enabled: false
    }
  }
});
