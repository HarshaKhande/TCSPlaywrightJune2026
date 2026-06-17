import {test , expect } from '@playwright/test'

test('Navigational commands' , async({page, browser , context}) => {

    // launching of the browser with the url 

    await page.goto('https://www.amazon.in/')

    await page.waitForTimeout(3000);

    await page.goBack();

    await page.waitForTimeout(3000);

    await page.goForward();

    await page.waitForTimeout(3000);

    await page.reload();

    //Close current tab/page

    await page.close();

    //Close entire browser

    await browser.close();

    await context.close();


});