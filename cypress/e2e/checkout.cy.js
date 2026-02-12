import LoginPage from '../pages/LoginPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'

describe('SauceDemo Checkout Module', () => {

  beforeEach(() => {
    // Login
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();

    // Add product & go to cart
    CartPage.addFirstProductToCart();
    CartPage.openCart();
    CartPage.clickCheckout();
  });

  it('TC01 - Successful Checkout', () => {
    CheckoutPage.completeCheckout('Ashwini', 'Hinge', '411001');
    CheckoutPage.verifySuccessMessage('Thank you');
  });

  it('TC02 - Empty First Name', () => {
  
     CheckoutPage.enterLastName('Hinge');
    CheckoutPage.enterPostalCode('411001');
    CheckoutPage.clickContinue();

    CheckoutPage.verifyErrorMessage('First Name is required');
  });

  it('TC03 - Empty Last Name', () => {

    CheckoutPage.enterFirstName('Ashwini');

// CheckoutPage.enterLastName('');

    CheckoutPage.enterPostalCode('411001');
    CheckoutPage.clickContinue();

    CheckoutPage.verifyErrorMessage('Last Name is required');
  });

  it('TC04 - Empty Postal Code', () => {

      CheckoutPage.enterFirstName('Ashwini');
    CheckoutPage.enterLastName('Hinge');
   //  CheckoutPage.enterPostalCode('');
    CheckoutPage.clickContinue();

    CheckoutPage.verifyErrorMessage('Postal Code is required');
  });

});
