import { RACING_CATEGORIES } from "../config/constants";


describe('Page Content', () => {
  it('Should correctly display page title', () => {
    cy.visit('');

    cy.get('[data-testid=page-title]').contains('Next To Go Races').and('be.visible');
  });

  it('Should have all filters checked by default', () => {
    cy.visit('');

    cy.get('[data-testid=category-filters]').within(() => {
      RACING_CATEGORIES.forEach((category) => {
        cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => {
          cy.get('[data-testid=category-filter-label]').contains(category.name).and('be.visible');
          cy.get('[data-testid=category-filter-checkbox]').should('be.checked');
        });
      })
    });
  })

  it('Handles errors gracefully', () => {
    cy.intercept('GET', 'http://localhost:3000/v2/racing/next-races-category-group?count=5&categories=%5B%224a2788f8-e825-4d36-9894-efd4baf1cfae%22%2C%229daef0d7-bf3c-4f50-921d-8e818c60fe61%22%2C%22161d9be2-e909-4326-8c2c-35ed71fb460b%22%5D', {
      statusCode: 500,
      body: 'Something went wrong',
    }).as('getRacesError')
  
    cy.visit('/')
    cy.wait('@getRacesError')
  })
});