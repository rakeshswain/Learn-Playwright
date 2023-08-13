// loginPage.js
class LoginPage {
    constructor(page) {
      this.page = page;
    }
  
    get usernameInput() {
      return this.page.getByPlaceholder('Username');
    }
  
    get passwordInput() {
      return this.page.getByPlaceholder('Password');
    }
  
    get loginButton() {
      return this.page.getByRole('button', { name: 'Login' });
    }
  
    async open() {
      await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
  }
  
  module.exports = LoginPage;
  