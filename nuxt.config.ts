import { DESIGN } from './constants'
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  buildModules: ['@nuxtjs/html-validator'],
  // https://color-mode.nuxtjs.org
  colorMode: {
    preference: `${DESIGN.THEMES.theaterpedia}-${DESIGN.VARIANTS.flip}`, // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: ''
  },
  // https://content.nuxtjs.org
  content: {
    documentDriven: true,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'github-light' // 'dracula'
    }
  }
})
