describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://app.lambus.com/');
    cy.get('#input-56').type('test-');
    cy.get('#input-56').type(Cypress.env('LAMBUS_PASSWORD'));
    })
})