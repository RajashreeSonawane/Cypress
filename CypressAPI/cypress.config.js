const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //videoCompression: 15,
  chromeWebSecurity:false,
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
