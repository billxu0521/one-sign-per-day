// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss","@pinia/nuxt"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  typescript: {
    shim: false,
    strict: true,
  },
})