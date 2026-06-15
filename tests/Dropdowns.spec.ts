import {test , expect } from '@playwright/test'

test('Handling Drop downs' , async({page}) => {

    // launching of the browser with the url 

    await page.goto('https://the-internet.herokuapp.com/dropdown')


   let dropwdown =  await page.locator("//select[@id='dropdown']")

   await page.waitForTimeout(3000)

   // select by value  

   await dropwdown.selectOption({value: '1'});

     await page.waitForTimeout(3000)

   // select by index

   await dropwdown.selectOption({index: 2});

     await page.waitForTimeout(3000)

   // select by label 

   await dropwdown.selectOption({label: 'Option 2'});

   await page.close();
    

});
