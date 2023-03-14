describe('Category Filters', () => {
  it('Cycle through filters and ensure they are working', () => {
    cy.visit('');
    cy.wait(500);

    //for each checkbox, uncheck is and then check that the dom items have updated
    cy.get('.filter-checkbox').each(($el) => {
      cy.wrap($el).each(($child) => {
        const targetSelector = '#root > div > header > div > div > div:nth-child(3) > div:nth-child(1)';
      const originalText = Cypress.$(targetSelector).text();
    
      $child.trigger('click');
      cy.wait(1000);
    
      cy.get(targetSelector).should(($target) => {
        const newText = $target.text();
        expect(newText).not.to.equal(originalText);
      });
      })
    });
  });

  it('Should display only 5 class=item elements', () => {
    cy.visit('');
    cy.wait(500);
  
    // Assert that there are 5 class=item elements on the page
    cy.get('.item').should('have.length', 5);
  
    // Click on a filter checkbox
    cy.get('.filter-checkbox').first().click();
    cy.wait(1000);
  
    // Assert that there are still only 5 class=item elements on the page
    cy.get('.item').should('have.length', 5);
  });

});
