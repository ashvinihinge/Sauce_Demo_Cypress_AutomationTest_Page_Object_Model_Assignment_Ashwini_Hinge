class LoginPage {

    // ---------- Locators ----------

  usernameInput = '#user-name';
  passwordInput = '#password';
  loginButton = '#login-button';
  errorMessage = '[data-test="error"]';


    // ---------- All Actions On WebPage ----------

  visit() {
    cy.visit('/');
  }
 
  enterUsername(username) {
    cy.get(this.usernameInput).type(username);
  }

  enterPassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  verifyErrorMessage(message) {
    cy.get(this.errorMessage).should('contain', message);
  }
}

export default new LoginPage();
