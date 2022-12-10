// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-font-loader"],

  fontLoader: {
    local: [
      {
        src: "/fonts/RubikVinyl-Regular.ttf",
        family: "Rubik Vinyl",
        class: "font-rubik"
      },
    ],
  }
})
