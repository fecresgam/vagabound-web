describe('Home page test', function () {

  beforeEach(() => {
    cy.userLogInWithUsernameAndPassword();
  })


  it.only('Standard Log In', function () {

    cy.clickOnMyAccount();

  })

  afterEach(() => {
    cy.logOut();
  })
})
