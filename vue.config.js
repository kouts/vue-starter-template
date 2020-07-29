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
          @import "@/scss/variables.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'ProjectName';
      args[0].meta = { description: 'A single page application created using Vue.js' };
      return args;
    });
  }
};
