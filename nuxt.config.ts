// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
       ['@nuxtjs/supabase'],
    ],
    imports: {
       dirs:["stores"]
    },
    css: ["/assets/css/main.css"],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
   })
   