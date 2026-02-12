import LoginPage from '../pages/LoginPage';

describe('Login Tests', () => {

  it('TC_LOGIN_001 - Valid Login', () => {
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
    cy.url().should('include', 'inventory');
  });

  it('TC_LOGIN_002 -Empty Username', () => {
    LoginPage.visit();
    LoginPage.enterPassword('secret_sauce');
    LoginPage.clickLogin();
    LoginPage.verifyErrorMessage('Username is required');
  });

it('TC_LOGIN_003 - Empty Password', () => {
    LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.clickLogin();
    LoginPage.verifyErrorMessage('Password is required');
  });

  it('TC_LOGIN_004 - Empty Username and Password', () => {
    LoginPage.visit();
    LoginPage.clickLogin();
     LoginPage.verifyErrorMessage('Username is required');
  });

  it('TC_LOGIN_005 - Invalid Username and Invalid Password', () => {
   LoginPage.visit();
    LoginPage.enterUsername('wrong_user ');
    LoginPage.enterPassword('wrong_pass ');
    LoginPage.clickLogin();
    LoginPage.verifyErrorMessage('Username and password do not match');

  });

  it('TC_LOGIN_006 - Invalid Username and valid Password', () => {
   LoginPage.visit();
    LoginPage.enterUsername('wrong_user ');
    LoginPage.enterPassword('secret_sauce ');
    LoginPage.clickLogin();
    LoginPage.verifyErrorMessage('Username and password do not match');
   

  });

  it('TC_LOGIN_007 - Valid Username and Invalid Password', () => {
   LoginPage.visit();
    LoginPage.enterUsername('standard_user');
    LoginPage.enterPassword('wrong_pass ');
    LoginPage.clickLogin();
    LoginPage.verifyErrorMessage('Username and password do not match');
   

  });


});
