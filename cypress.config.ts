import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'ysm2wi',
  e2e: {
    baseUrl: 'http://localhost:3000',
    fixturesFolder: 'cypress/fixtures/*.json',
    supportFile: 'cypress/support/component.ts',
    specPattern: 'cypress/e2e/*'
  },
})



