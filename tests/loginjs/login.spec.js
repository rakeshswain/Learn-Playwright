// login.test.js
const { test } = require('@playwright/test');
const LoginPage = require('./loginPage');
const LoginActions = require('./loginAction');

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const loginActions = new LoginActions(page, loginPage);

  await loginActions.login('Admin', 'admin123');

  // Add assertions for successful login
});

test('invalid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const loginActions = new LoginActions(page, loginPage);

  await loginActions.login('invalid_username', 'invalid_password');

  // Add assertions for invalid login
});
