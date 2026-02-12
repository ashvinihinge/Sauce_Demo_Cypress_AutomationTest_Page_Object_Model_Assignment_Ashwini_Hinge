class CartPage {

  // ---------- Locators ----------
  addToCartButton = '.btn_inventory';
  cartIcon = '.shopping_cart_link';
  cartBadge = '.shopping_cart_badge';
  cartItem = '.cart_item';
  removeButton = '.cart_button';
  checkoutButton = '#checkout';

  // ---------- All Actions On WebPage ----------

  addFirstProductToCart() {
    cy.get(this.addToCartButton).first().click();
  }

  addProductByIndex(index) {
    cy.get(this.addToCartButton).eq(index).click();
  }

  openCart() {
    cy.get(this.cartIcon).click();
  }

  verifyCartBadgeCount(count) {
    cy.get(this.cartBadge).should('contain', count);
  }

  verifyCartItemCount(count) {
    cy.get(this.cartItem).should('have.length', count);
  }

  removeFirstItem() {
    cy.get(this.removeButton).first().click();
  }

  clickCheckout() {
    cy.get(this.checkoutButton).click();
  }

}

export default new CartPage();
