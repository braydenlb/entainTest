import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    env: {
        projectId: 'ysm2wi',
      },
    fixturesFolder: 'cypress/fixtures/*',
    supportFile: 'cypress/support/component.ts',
    specPattern: 'cypress/e2e/*'
  },
})



