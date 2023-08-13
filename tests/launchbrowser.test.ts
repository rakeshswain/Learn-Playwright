import {test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test('Orange Hrm Login', async ({ page }) => {
    await page.goto("https://www.commbank.com.au/digital/digitalappointmentbooker")
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect.soft(accessibilityScanResults.violations).toEqual([]);
    await page.type("input[name='username']", "Admin")
    await page.type("input[type='password']", "admin123")
    await page.click("button[type='submit']")
    await expect.soft(page).toHaveURL("https://www.commbank.com.au/digital/digitalappointmentbooker")
    const accessibilityScan = await new AxeBuilder({ page }).analyze();
    expect.soft(accessibilityScan.violations).toEqual([]);
    
})
