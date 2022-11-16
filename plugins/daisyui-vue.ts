import { installTheme } from 'daisyui-vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(installTheme)
})
