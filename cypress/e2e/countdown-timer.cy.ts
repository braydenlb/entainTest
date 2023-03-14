describe('Countdown Timer', () => {

    //ignore unhandled error in Git
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  

  it('Verify we are able to get the start time from the advertised time', () => {
    cy.intercept('GET', 'http://localhost:3000/v2/racing/next-races-category-group?count=5&categories=%5B%224a2788f8-e825-4d36-9894-efd4baf1cfae%22%2C%229daef0d7-bf3c-4f50-921d-8e818c60fe61%22%2C%22161d9be2-e909-4326-8c2c-35ed71fb460b%22%5D', {
      fixture: 'races.json'
    }).as('getRaces')

    // Make the API call that will be intercepted and mocked
    cy.visit('/')

    // Wait for the API call to be mocked
    cy.wait('@getRaces').its('response.statusCode').should('eq', 200);

    //extracting Race ID and confirming we have the start time
    cy.get('@getRaces').its('response.body.race_summaries').then((races) => {
      const sortedRaces = Object.keys(races).sort((a, b) => {
        const startTimeA = new Date(races[a].advertised_start).getTime();
        const startTimeB = new Date(races[b].advertised_start).getTime();
        return startTimeA - startTimeB;
      });

      // Make sure the first race is the one starting soonest
      expect(sortedRaces[0]).to.eq(Object.keys(races)[0]);
    });
  });

});

