import { CommonPage } from "../pages/CommonPage.js"

const commonPage = new CommonPage()
Cypress.Commands.add("clickOnMyAccount", () => {
    cy.contains('span','FC').should('be.visible').click();
    cy.contains('Your Account').should('be.visible');
    cy.contains('Settings').should('be.visible');
    cy.contains('Get Help').should('be.visible');
    cy.contains('See Privacy Policy').should('be.visible');
    cy.contains('See Terms of Service').should('be.visible');
    cy.contains('Contact us').should('be.visible');
    cy.contains('Log out').should('be.visible');
});

Cypress.Commands.add("logOut", () => {
    cy.contains('span','FC').should('be.visible').click();
    cy.contains('Log out').should('be.visible').click();
});