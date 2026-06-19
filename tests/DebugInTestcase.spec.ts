import { test } from '@playwright/test';

test('Login Test', async ({ page }) => {

await page.goto('https://example.com');

await page.pause();

await page.getByRole('button', {
name: 'Login'
}).click();

});