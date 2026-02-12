const { defineConfig } = require("cypress");

module.exports = defineConfig({
   reporter: "cypress-mochawesome-reporter",
  allowCypressEnv: false,

  e2e: {

    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      
    },
  },
});
