# Sauce_Demo_Cypress_AutomationTest_Page_Object_Model_Assignment_Ashwini_Hinge

Environment & Credentials

URL: https://www.saucedemo.com/ 
Test User: standard_user
Password: secret_sauce
-----------------------------------
MANUAL TEST CASES :
--------------------
### 1. LOGIN TEST CASES :
  
TC_LOGIN_01 – Valid Login 
Steps: 
 1.Open https://www.saucedemo.com
 2.Enter username: standard_user
 3.Enter password: secret_sauce
 4.Click Login 
Test Data: standard_user / secret_sauce 
Expected Result: User should navigate to Products page.
Actual Result: User navigate to Products page.

----------------------------------
TC_LOGIN_002 - Empty Username
Steps: 
   1.Open https://www.saucedemo.com
   2.Empty username
   3.Enter password: secret_sauce
   4.Click Login 
Test Data:               / secret_sauce 
Expected Result: Error message displayed
Actual Result: Error message display

---------------------------------------------------------------
TC_LOGIN_003 - Empty Password
Steps: 
   1.Open https://www.saucedemo.com
   2. Enter username
   3.Empty password 
   4.Click Login 
Test Data:     standard_user /
Expected Result: Error message displayed
Actual Result: Error message display

------------------------------------------------------------------
TC_LOGIN_004 - Empty Username and Password
Steps: 
 1.Open https://www.saucedemo.com
 2. Empty username
 3.Empty password 
 4.Click Login 
Test Data:      /
Expected Result: Error message displayed
Actual Result: Error message display

----------------------------------------------------------------------

TC_LOGIN_005- Invalid Username and Invalid Password
Steps: 
1.Open https://www.saucedemo.com
 2. Enter Invalid username
 3. Enter Invalid password 
 4.Click Login 
Test Data:    wrong_user   / wrong_pass  
Expected Result: Error message displayed
Actual Result: Error message display

-------------------------------------------------------------------------
TC_LOGIN_006- Invalid Username and valid Password
Steps: 
 1.Open https://www.saucedemo.com
 2. Enter Invalid username
 3. Enter valid password 
 4.Click Login 
Test Data:    wrong_user   /    secret_sauce 
 Expected Result: Error message displayed
Actual Result: Error message display

---------------------------------------------------------------------------
TC_LOGIN_007- Valid Username and Invalid Password
Steps: 
1.Open https://www.saucedemo.com
 2. Enter Invalid username
 3. Enter Invalid password 
 4.Click Login 
Test Data:    standard_user /    wrong_pass
Expected Result: Error message displayed
Actual Result: Error message display

--------------------------------------------------------------------------------
### 2. CART TEST CASES :

TC_ CART_001-   Add single product to cart
Steps: 
1.Open https://www.saucedemo.com
 2. Enter username
 3. Enter password 
 4.Click Login 
Test Data:    standard_user /    secret _ sauce
Expected Result: Item should be visible in cart
Actual Result:  Item visible in cart

--------------------------------------------------------------------------------------------
TC_ CART_002-   Add multiple Product to Cart
Steps: 
1.Open https://www.saucedemo.com
 2. Enter username
 3. Enter password 
 4.Click Login 
5. Click "Add to cart" for three item 
6. Click cart icon 
Test Data:    standard_user /    secret _ sauce
Expected Result: All selected items should be appeared in cart 
Actual Result: All selected items appear in cart

---------------------------------------------------------------------------------------------------
TC_ CART_003- Remove Product from Cart
Steps: 
1.Open https://www.saucedemo.com
 2. Enter username
 3. Enter password 
 4.Click Login 
5. Click "Add to cart" for one item 
6. Click cart icon 
7. Click on remove option
Test Data:    standard_user /    secret _ sauce
Expected Result: Product should be removed successfully 
Actual Result: Product removed successfully

-----------------------------------------------------------------------------------------------------------
TC_ CART_004- Verify product visible in cart
Steps: 
1.Open https://www.saucedemo.com
 2. Enter username
 3. Enter password 
 4.Click Login 
5. Click "Add to cart" for one item 
6. Click cart icon 
Test Data:    standard_user /    secret _ sauce
Expected Result: Product should be visible in cart 
Actual Result: Product visible in cart

------------------------------------------------------------------------------------------------------------
### 3. CHECKOUT TEST CASES :

TC_ CHECKOUT _001- Successful Checkout
Steps: 
    1.Open https://www.saucedemo.com
    2. Enter username
    3. Enter password 
    4.Click Login 
    5.Click "Add to cart" for one item 
    6.Click cart icon 
    7.Click Checkout
    8.Enter First Name, Last Name, Zip
    9.Click Continue
  10.Click Finish
 Test Data:    standard_user /    secret _ sauce
Expected Result: Thank you for your order message should be displayed. 
Actual Result: Actual Result: Thank you for your order" message display.

--------------------------------------------------------------------------
 TC_ CHECKOUT _002-Empty Frist Name
Steps: 
   1.	Open https://www.saucedemo.com
   2. Enter username
   3. Enter password 
   4.Click Login 
  5.Click "Add to cart" for one item 
  6. Click cart icon 
  7.Click Checkout
  8.Empty First Name and Enter Last Name, Zip
  9. Click Continue
  10.Click Finish
Test Data:    standard_user /    secret _ sauce
Expected Result: Error message displayed
Actual Result: Error message display
-----------------------------------------------------------------------------
TC_ CHECKOUT _003- Empty Last Name
Steps: 
  1.	Open https://www.saucedemo.com
  2. Enter username
  3. Enter password 
  4.Click Login 
  5. Click "Add to cart" for one item 
  6. Click cart icon 
  7. Click Checkout
  8. Enter First Name, Zip and Empty Last Name
  9. Click Continue
  10.Click Finish
Test Data:    standard_user /    secret _ sauce
Expected Result: Error message displayed
Actual Result: Error message display

----------------------------------------------------------------------------------------------
TC_ CHECKOUT _004- Empty Postal Code
Steps: 
  1.	Open https://www.saucedemo.com
  2. Enter username
  3. Enter password 
  4.Click Login 
  5. Click "Add to cart" for one item 
  6. Click cart icon 
  7. Click Checkout
  8. Enter First Name, Last Name and Empty Postal Code
  9. Click Continue
  10.Click Finish
Test Data:    standard_user /    secret _ sauce
Expected Result: Error message displayed
Actual Result: Error message display

-----------------------------------------------------------------------------------------------------------------
## Saucedemo Cypress Automation


# Setup
1.	Clone repo
2.	Run npm install
3.	Run npx cypress open
4.	Run npx cypress run


# Test Coverage
•	Login
•	Cart
•	Checkout

# Tools Used
•	Cypress
•	JavaScript 
•	Page Object Model

# Setup Steps
1.	Clone repository
2.	Run: npm install
3.	Run: npx cypress open
4.	Run: npx cypress run
