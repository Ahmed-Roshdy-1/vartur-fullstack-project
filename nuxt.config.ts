// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css:["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
    
  },
    
  //  // Other configurations...
  //  nitro: {
  //   routeRules: {
  //     '/uploads/**': { swr: true }, // Serve files in the uploads directory
  //   },
  // },
  
})
