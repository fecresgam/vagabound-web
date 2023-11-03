describe('Login page test', function () {

  beforeEach(() => {
    cy.userLogInWithUsernameAndPassword();
  })


  it.only('Valid Login', function () {

    cy.clickOnMyAccount();

  })

  afterEach(() => {
    cy.logOut();
  })

})
