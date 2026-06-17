

import {test , expect } from '@playwright/test'

test('vertical scrolling' , async({page}) => {

    // launching of the browser with the url 

    await page.goto('https://the-internet.herokuapp.com/large')

    let element = await page.getByText('50.1').nth(0);

    element.isVisible();

    await element.scrollIntoViewIfNeeded();

    let text = await element.textContent();

    console.log(text);


});

test('vertical scrolling down using the mouse wheel ' , async({page}) => {

    // launching of the browser with the url 

    await page.goto('https://the-internet.herokuapp.com/large')

    // scroll down by 1000 pixels 

    await page.waitForTimeout(3000);

    await page.mouse.wheel(0 ,1000);

    // scroll up by 2000 pixels 

    await page.waitForTimeout(3000);

    await page.mouse.wheel(0, -2000);

    
});


test('horizontal scrolling' , async({page}) => {

    // launching of the browser with the url 

    await page.setViewportSize({
        width: 700,
        height: 500
    });


    await page.goto('https://the-internet.herokuapp.com/large')

    // right scroll 

    await page.waitForTimeout(5000);

    await page.mouse.wheel(1000, 0);

    await page.waitForTimeout(5000);

    //left scroll 

    await page.mouse.wheel(-2000, 0);
   

    
});