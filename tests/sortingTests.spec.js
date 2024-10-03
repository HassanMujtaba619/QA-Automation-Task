const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const AllItemsPage = require('../pages/allItemsPage');

test.describe('Sorting tests', () => {
  let page;
  let allItemsPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    allItemsPage = new AllItemsPage(page);
    const loginPage = new LoginPage(page);
    
    // Navigate to the SauceDemo login page
    await page.goto('https://www.saucedemo.com/');
    
    // Log in with valid credentials
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should verify sorting order Z-A on All Items page', async () => {
    await allItemsPage.selectSortOption('za');

    const itemNames = await allItemsPage.getItemNames();
    const sortedNames = [...itemNames].sort().reverse();

    expect(itemNames).toEqual(sortedNames);
  });

  test('should verify price order high-low on All Items page', async () => {
    await allItemsPage.selectSortOption('hilo');

    const itemPrices = await allItemsPage.getItemPrices();
    const sortedPrices = [...itemPrices].sort((a, b) => b - a);

    expect(itemPrices).toEqual(sortedPrices);
  });
});
