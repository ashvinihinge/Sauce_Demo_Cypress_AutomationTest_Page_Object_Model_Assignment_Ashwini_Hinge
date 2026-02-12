class CheckoutPage {

  // ---------- Locators ----------
  firstNameInput = '#first-name';
  lastNameInput = '#last-name';
  postalCodeInput = '#postal-code';
  continueButton = '#continue';
  finishButton = '#finish';
  cancelButton = '#cancel';
  successMessage = '.complete-header';
  errorMessage = '[data-test="error"]';
  itemTotalLabel = '.summary_subtotal_label';
  taxLabel = '.summary_tax_label';
  totalLabel = '.summary_total_label';
  backHomeButton='[data-test="back-to-products"]';

  // ---------- All Actions On WebPage ----------

  enterFirstName(firstName) {
    cy.get(this.firstNameInput).type(firstName);
  }

  enterLastName(lastName) {
    cy.get(this.lastNameInput).type(lastName);
  }

  enterPostalCode(postalCode) {
    cy.get(this.postalCodeInput).type(postalCode);
  }

  clickContinue() {
    cy.get(this.continueButton).click();
  }

  clickFinish() {
    cy.get(this.finishButton).click();
  }

  clickBackHomePageButton() {
    cy.get(this.backHomeButton).click();
  } 

  clickCancel() {
    cy.get(this.cancelButton).click();
  }

  completeCheckout(firstName, lastName, postalCode) {
    this.enterFirstName(firstName);
    this.enterLastName(lastName);
    this.enterPostalCode(postalCode);
    this.clickContinue();
    this.clickFinish();
  }

  verifySuccessMessage(message) {
    cy.get(this.successMessage).should('contain', message);
  }

  verifyErrorMessage(message) {
    cy.get(this.errorMessage).should('contain', message);
  }

}

export default new CheckoutPage();
