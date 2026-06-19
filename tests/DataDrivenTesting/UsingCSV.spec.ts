// tests/login-csv.spec.ts

import { test, expect } from '@playwright/test';
import { readCsvData } from '../../utils/csvReader';

const data = readCsvData('../../testdata/Logindata.csv');

data.forEach(({ username,password}) => 
{
    test(`Login (CSV) ${username}`, async ({ page }) => 
    {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('input[name="username"]').fill(username);
    await page.pause()
    ;
    await page.locator('input[name="password"]').fill('password');
    await page.getByRole('button', { name: 'Login' }).click();

    const dashboardText = await page
        .locator('.oxd-topbar-header-breadcrumb h6')
        .textContent();

    console.log(dashboardText);

    expect(dashboardText).toBe('Dashboard')

    });

});
