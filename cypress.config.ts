import { defineConfig } from "cypress";

module.exports = {
  projectId: "ysm2wi",
  // The rest of the Cypress config options go here...
}

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
