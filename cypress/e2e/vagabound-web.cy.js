describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://app.lambus.com/');
    cy.get('#input-56').type(Cypress.env('LAMBUS_USERNAME'));
    cy.get('#input-61').type(Cypress.env('LAMBUS_PASSWORD'));
    cy.get('.v-form > .l-btn > .v-btn__content').click();
    })
})