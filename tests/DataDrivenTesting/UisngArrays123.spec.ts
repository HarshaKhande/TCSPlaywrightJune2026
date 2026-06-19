 /* import {test , expect } from '@playwright/test'

let products = [

    'Laptop',
    'Mobile',
    'Headphones'
];


products.forEach((product) => {
test(`Search ${product}`, async ({ page }) => {

    await page.goto('https://www.amazon.in');

    await page.waitForTimeout(2000);
    await page.locator('#twotabsearchtextbox').click();
    await page.fill('#twotabsearchtextbox' , product);
    await page.locator("//input[@id='nav-search-submit-button']").click();
    await expect(page).toHaveTitle(/Amazon/);  

});



let logindata = [

{
    username: 'admin',
    password: 'admin123'

},

{
    username: 'admin',
    password: 'admin123'

},

{
    username: 'admin',
    password: 'admin123'

}

  
];


logindata.forEach((lg) => {
test(`Login test for ${lg.username}`, async ({ page }) => {

  // launching of the browser with the url 

    await page.goto('https://www.saucedemo.com/')

    //  enter username 

    await page.locator('input[name="user-name"]').fill(lg.username);

    // enter password 

    await page.locator("//input[@id='password']").fill(lg.password);

    // click on login button 
    
    await page.locator('input[name="login-button"]').click();

    // validation for landing home page 

    let dashboardText = await page.locator("//div[@class='app_logo']").textContent()

    // assertion 

    expect(dashboardText).toBe('Swag Labs')


});

}); */

