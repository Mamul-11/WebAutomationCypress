const { defineConfig } = require("cypress");
const browserify = require('@cypress/browserify-preprocessor');

module.exports = defineConfig({
  viewportHeight : 660,
  viewportWidth : 1078,
  chromeWebSecurity : false,
  defaultCommandTimeout : 10000,
  env:{
    baseUrl:"https://www.globalsqa.com/angularJs-protractor/BankingProject"
  },
  e2e: {
    setupNodeEvents(on) {
      let options = browserify.defaultOptions;
      options.browserifyOptions.transform[1][1].plugins.push([
        'module-resolver',
        {
          alias:{
            '@tests' : './tests',
            '@helpers' : './tests/helpers'
          },
        },
      ]);
      on('file:preprocessor', browserify(options));
    },
    specPattern: 'tests/scenario/**/*.test.js'
  },
});
