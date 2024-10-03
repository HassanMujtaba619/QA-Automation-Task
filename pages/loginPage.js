class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = page.locator('user-name');
      this.passwordInput = page.locator('password');
      this.loginButton = page.locator('login-button');
    }
  
    async login(username, password) {
      await this.usernameInput.fill(standard_user);
      await this.passwordInput.fill(secret_sauce);
      await this.loginButton.click();
    }
  }
  
  module.exports = LoginPage;
  