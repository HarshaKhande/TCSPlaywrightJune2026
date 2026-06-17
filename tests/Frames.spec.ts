import {test , expect } from '@playwright/test'

test('Frames' , async({page}) => {

    // launching of the browser with the url 

    await page.goto('https://jqueryui.com/checkboxradio/')

    // class or id of the frames 

    let frame = page.frameLocator("//iframe[@class = 'demo-frame']");

    // indexing 

    let frame1 = page.frameLocator('0');

    await frame.locator("(//span[@class='ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank'])[1]").click();


});