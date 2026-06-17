import {test , expect } from '@playwright/test'

test('Autowaiting ' , async({page}) => {

  // launching of the browser with the url 

    await page.goto('https://www.saucedemo.com/')

    //  enter username 

    await page.locator('input[name="user-name"]').fill('standard_user');

    // enter password 

    await page.locator("//input[@id='password']").fill('secret_sauce');

    await expect(page.locator("input[name='login-button']")).toBeEnabled();
    
    await page.locator('input[name="login-button"]').click();

    // expect assertion to check or wait untill the text appears 

    // expect assertion to check the visbility of the element

    await expect(page.locator("//span[@class='title']")).toBeVisible();

    await expect(page.locator("//span[@class='title']")).toHaveText('Products');

});