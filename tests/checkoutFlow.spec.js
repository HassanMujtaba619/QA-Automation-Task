const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const AllItemsPage = require('../pages/allItemsPage');

test('should add items to cart and complete checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const allItemsPage = new AllItemsPage(page);
  
  // Navigate to the SauceDemo login page
  await page.goto('https://www.saucedemo.com/');
  
  // Log in with valid credentials
  await loginPage.login('standard_user', 'secret_sauce');

  // Validate items in the cart
  await page.locator('.shopping_cart_link').click();
  const cartItems = await page.locator('.cart_item').count();
  expect(cartItems).toBe(2);

  // Proceed to checkout and complete process
  await page.locator('#checkout').click();
  await page.fill('#first-name', 'Test');
  await page.fill('#last-name', 'User');
  await page.fill('#postal-code', '12345');
  await page.locator('#continue').click();
  await page.locator('#finish').click();
  expect(page.locator('.complete-header')).toHaveText('THANK YOU FOR YOUR ORDER');
});
