// loginPage.js
class LoginPage {
    constructor(page) {
      this.page = page;
    }
  
    get usernameInput() {
      return this.page.locator('#username');
    }
  
    get passwordInput() {
      return this.page.locator('#password');
    }
  
    get loginButton() {
      return this.page.locator('button[type="submit"]');
    }
  
    async open() {
      await this.page.goto('https://example.com/login');
    }
  }
  
  module.exports = LoginPage;
  