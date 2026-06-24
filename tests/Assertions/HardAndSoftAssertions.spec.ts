import { test, expect } from '@playwright/test';

test('Hard Assertion',async ({ page }) => {

await page.goto('https://playwright.dev');

// Fail
//await expect(page.locator('h1')).toHaveText('Wrong Text');

// soft assertions 
await expect.soft(page).toHaveTitle(/Wrong/);


// Pass
await expect(page).toHaveTitle(/Fast and reliable end-to-end testing for modern web apps | Playwright/);




// Will NOT executeconsole.log('Execution stopped');

});