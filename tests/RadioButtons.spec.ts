import {test , expect } from '@playwright/test'

test('Invoke Chrome' , async({page}) => {

    // launching of the browser with the url 

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    // click on radio button 

    await page.locator('label').filter({ hasText: 'Radio2' }).click();

    // verigfy that the radio button is clicked 

    let isChecked = await page.locator('label').filter({ hasText: 'Radio2' }).isChecked();
    expect(isChecked).toBeTruthy();

    // verify that radio button is to be checked 

    await expect(page.locator("input[value='radio3']")).toBeChecked();

    // handling multple radio buttons 

});

test('Multiple radio button handling' , async({page}) => {

    // launching of the browser with the url 

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    // handling multple radio buttons 

    let radios = page.locator("//input[@type= 'radio']");

    let count = await radios.count();

    console.log(count); 

    for (let i = 0 ; i < count ; i++   ){

        await   radios.nth(i).check();
    }

});