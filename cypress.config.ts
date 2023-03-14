import { defineConfig } from "cypress";

module.exports = {
  projectId: "ysm2wi",
  // The rest of the Cypress config options go here...
}

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
