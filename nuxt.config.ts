// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  modules: ['@formkit/nuxt'],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  build: {
    transpile: ["vuetify"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
 

 
});
