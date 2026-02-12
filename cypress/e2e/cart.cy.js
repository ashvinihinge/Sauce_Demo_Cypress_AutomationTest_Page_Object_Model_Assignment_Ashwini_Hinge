import LoginPage from '../pages/LoginPage'
import CartPage from '../pages/CartPage'

describe('SauceDemo Cart Module', () => {

  beforeEach(() => {
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
  });

  it('TC01 - Add single product to cart', () => {
    CartPage.addFirstProductToCart();
    CartPage.verifyCartBadgeCount('1');
  });

  it('TC02 - Add multiple products to cart', () => {
    CartPage.addProductByIndex(0);
    CartPage.addProductByIndex(1);
    CartPage.verifyCartBadgeCount('2');
  });

  it('TC03 - Remove product from cart', () => {
    CartPage.addFirstProductToCart();
    CartPage.openCart();
    CartPage.removeFirstItem();
    CartPage.verifyCartItemCount(0);
  });

  it('TC04 - Verify product visible in cart', () => {
    CartPage.addFirstProductToCart();
    CartPage.openCart();
    CartPage.verifyCartItemCount(1);
  });

});
