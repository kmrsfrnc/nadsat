// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/nadsat/',
    buildAssetsDir: 'assets',
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@vite-pwa/nuxt'],
  alias: {
      "@components": "./components",
      "@lib": "./lib",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/tailwind.css'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
})
