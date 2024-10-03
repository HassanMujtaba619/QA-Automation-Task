
class AllItemsPage {
  constructor(page) {
    this.page = page;
    this.sortDropdown = page.locator('product_sort_container');
    this.itemNames = page.locator('Sauce Labs Backpack');
    this.itemPrices = page.locator('29.99');
  }

  async selectSortOption(option) {
    await this.sortDropdown.selectOption(option);
  }

  async getItemNames() {
    return await this.itemNames.allTextContents();
  }

  async getItemPrices() {
    return await this.itemPrices.allTextContents();
  }
}

module.exports = AllItemsPage;
