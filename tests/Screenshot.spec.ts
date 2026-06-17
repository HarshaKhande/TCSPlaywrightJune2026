import {test , expect } from '@playwright/test'

test('element Screen  shot taking ' , async({page}) => {

    // launching of the browser with the url 

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


    await page.locator('input[name="username"]').screenshot({ path: 'screehshots/username.png'})

});

test(' Screen  shot taking for whole page ' , async({page}) => {

    // launching of the browser with the url 

    let  timestamp = Date.now();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


      await page.screenshot({
        path: `screenshots/screenshot-${timestamp}.png`,
        fullPage: true
    });



});

/* Options:

screenshot: 'on'
screenshot: 'off'
screenshot: 'only-on-failure' */
