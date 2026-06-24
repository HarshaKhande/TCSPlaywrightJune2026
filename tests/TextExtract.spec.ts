import {test , expect } from '@playwright/test'

test('Text extract' , async({page}) => {

    // launching of the browser with the url 

    await page.goto('https://the-internet.herokuapp.com/')

    // get the text content of all the elements 

    let texts = await page.locator('//li').allTextContents();

    console.log(texts);

    let abtext = await page.getByText('A/B Testing').textContent();

    console.log(abtext);

});