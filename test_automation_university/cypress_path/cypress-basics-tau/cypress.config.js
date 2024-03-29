const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://cypress.io',
    viewportHeight: 550,
    viewportWidth: 664,
    experimentalStudio: true
  },
});


require('@applitools/eyes-cypress')(module);
