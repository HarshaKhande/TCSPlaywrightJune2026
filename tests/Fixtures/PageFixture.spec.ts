import { test , expect} from '@playwright/test'


// page fixtures - this provides a single browser tab 

/* Browser 
Context
Page 
*/

test('Open Website', async ({ page }) => {

  // launching of the browser with the url 

    await page.goto('https://www.saucedemo.com/')

    //  enter username 

    await page.locator('input[name="user-name"]').fill('standard_user');

    // enter password 

    await page.locator("//input[@id='password']").fill('secret_sauce');

    // click on login button 
    
    await page.locator('input[name="login-button"]').click();

    // validation for landing home page 

    let dashboardText = await page.locator("//div[@class='app_logo']").textContent()

    // assertion 

    expect(dashboardText).toBe('Swag Labs')
    
});