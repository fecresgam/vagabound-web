import { LoginIds } from "../pages/LoginIds.js"

const loginIds = new LoginIds()

Cypress.Commands.add("login", (username, password) => {
    let us = username
    let pw = password
    //let url = Cypress.config().baseUrl

//    cy.visit(url)
    cy.visit('https://app.lambus.com/');


    // login
    cy.get(loginIds.field.username).type(Cypress.env('LAMBUS_USERNAME'));
    cy.get(loginIds.field.password).type(Cypress.env('LAMBUS_PASSWORD'));
    cy.get(loginIds.button.logIn).click();

    //
    cy.contains('span','FC').click();
    cy.contains('Your Account').should('be.visible');
    cy.contains('Settings').should('be.visible').click();




})