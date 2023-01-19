const { defineConfig } = require("cypress");

//const initCypressMousePositionPlugin = require('cypress-mouse-position/plugin');
module.exports = defineConfig({
  chromeWebSecurity:false,
  e2e: {
    //chromeWebSecurity:false,
    setupNodeEvents(on, config) {
      on('task', {
        'seedRisks' () {
            console.log(2); //just a placeholder
          }
      })
      // implement node event listeners here
      //return require('./cypress/plugins/index.js')(on,config)
      //initCypressMousePositionPlugin(on);
    },
    
   // supportFile:'cypress/support/e2e.js'
  },
});


