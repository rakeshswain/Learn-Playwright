// login.test.js
const { test } = require('@playwright/test');
const LoginPage = require('./loginPage');
const LoginActions = require('./loginActions');

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const loginActions = new LoginActions(page, loginPage);

  await loginActions.login('your_username', 'your_password');

  // Add assertions for successful login
});

test('invalid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const loginActions = new LoginActions(page, loginPage);

  await loginActions.login('invalid_username', 'invalid_password');

  // Add assertions for invalid login
});
