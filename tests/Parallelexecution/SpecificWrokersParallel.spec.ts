import { test, expect } from '@playwright/test';


test.describe.configure({mode: 'parallel'});


test('Login', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('input[name="username"]').fill('Admin');
    await page.pause()
    ;
    await page.locator('input[name="password"]').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    const dashboardText = await page
        .locator('.oxd-topbar-header-breadcrumb h6')
        .textContent();

    console.log(dashboardText);

    expect(dashboardText).toBe('Dashboard')

    

});


test('verify link', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('input[name="username"]').fill('Admin');
    await page.pause()
    ;
    await page.locator('input[name="password"]').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    const dashboardText = await page
        .locator('.oxd-topbar-header-breadcrumb h6')
        .textContent();

    console.log(dashboardText);

    expect(dashboardText).toBe('Dashboard')

    

});


test('forgot password', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('input[name="username"]').fill('Admin');
    await page.pause()
    ;
    await page.locator('input[name="password"]').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    const dashboardText = await page
        .locator('.oxd-topbar-header-breadcrumb h6')
        .textContent();

    console.log(dashboardText);

    expect(dashboardText).toBe('Dashboard')

    

});

test('logo', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('input[name="username"]').fill('Admin');
    await page.pause()
    ;
    await page.locator('input[name="password"]').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    const dashboardText = await page
        .locator('.oxd-topbar-header-breadcrumb h6')
        .textContent();

    console.log(dashboardText);

    expect(dashboardText).toBe('Dashboard')

    

});

test('socail ', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('input[name="username"]').fill('Admin');
    await page.pause()
    ;
    await page.locator('input[name="password"]').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    const dashboardText = await page
        .locator('.oxd-topbar-header-breadcrumb h6')
        .textContent();

    console.log(dashboardText);

    expect(dashboardText).toBe('Dashboard')

    

});

//npx playwright test ".\SpecificWorkersParallel.spec.ts" --headed --workers=4