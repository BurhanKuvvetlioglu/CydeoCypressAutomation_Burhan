const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.cydeo.com/',
    video: false, // it doesn't create videos. By default it's set to record videos if you don't put this line here
    retries: 1, // if your test case fails, it will try X (the number you put here) times
    defaultCommandTimeout: 5000,  // normally default is 4 seconds (4000)
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
