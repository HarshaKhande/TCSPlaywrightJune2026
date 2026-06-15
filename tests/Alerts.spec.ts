import {test , expect } from '@playwright/test'

test('Alerts Handling ' , async({page}) => {

    // launching of the browser with the url 

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    //  simple alerts handling 

    await page.locator('button').filter({ hasText: 'Click for JS Alert' }).click();

    // switch the control to the alert 

    page.on('dialog' , async dialog =>{
        console.log(dialog.message());

        // cliecking on ok button
        await dialog.accept();
        
    });

     //  confirmational  alerts handling 

   await page.locator('button').filter({ hasText: 'Click for JS Confirm' }).click();

    // switch the control to the alert 

    page.on('dialog' , async dialog =>{
        console.log(dialog.message());

        // clicking on cancel  button
        await dialog.dismiss();
        
    });

     //  prompt  alerts handling 

   await page.locator('button').filter({ hasText: 'Click for JS Prompt' }).click();

    // switch the control to the alert 

    page.on('dialog' , async dialog =>{
        console.log(dialog.message());

        // clicking on cancel  button
        await dialog.accept('hello');

        await expect(page.locator("//p[@id='result']")).toHaveText('You entered: Hello');
        
    });


});