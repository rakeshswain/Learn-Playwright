// loginActions.js
class LoginActions {
    constructor(page, loginPage) {
      this.page = page;
      this.loginPage = loginPage;
    }
  
    async login(username, password) {
      await this.loginPage.open();
      await this.page.fill(this.loginPage.usernameInput, username);
      await this.page.fill(this.loginPage.passwordInput, password);
      await this.page.click(this.loginPage.loginButton);
    }
  }
  
  module.exports = LoginActions;
  