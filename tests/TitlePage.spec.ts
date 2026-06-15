import {test , expect } from '@playwright/test'

test('Invoke Chrome' , async({page}) => {

    // launching of the browser with the url 

    await page.goto('https://www.saucedemo.com/')

    // get the tilte of the web page 

    await expect(page).toHaveTitle('Swag Labs');
});