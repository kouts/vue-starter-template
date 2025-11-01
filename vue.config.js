// eslint-disable-next-line no-unused-vars
import path from 'path'

export default {
  lintOnSave: 'warning',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/variables.scss";
        `,
        sassOptions: {
          silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'ProjectName'
      args[0].meta = { description: 'A single page application created using Vue.js' }

      return args
    })
  },
}
