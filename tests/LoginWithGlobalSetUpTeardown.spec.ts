import {test,expect} from '@playwright/test'



test('Open inventory', async ({ page}) => {

    await page.goto('https://www.saucedemo.com/inventory.html');

     // validation for landing home page 

    let dashboardText = await page.locator("//div[@class='app_logo']").textContent()

    // assertion 

    expect(dashboardText).toBe('Swag Labs')


});


