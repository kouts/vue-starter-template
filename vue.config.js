const path = require('path');

module.exports = {
  lintOnSave: 'warning',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/scss/styles.scss')]
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/styles.scss";
        `
      }
    }
  }
};
