import { LoginPage } from "../pages/LoginPage.js"

const loginPage = new LoginPage()
Cypress.Commands.add("login", (username, password) => {
    let us = username
    let pw = password
    //let url = Cypress.config().baseUrl

//    cy.visit(url)
    cy.visit('https://app.lambus.com/');


    // login
    cy.get(loginPage.field.username).type(Cypress.env('LAMBUS_USERNAME'));
    cy.get(loginPage.field.password).type(Cypress.env('LAMBUS_PASSWORD'));
    cy.get(loginPage.button.logIn).click();

    //
    cy.contains('span','FC').click();
    cy.contains('Your Account').should('be.visible');
    cy.contains('Settings').should('be.visible').click();




})