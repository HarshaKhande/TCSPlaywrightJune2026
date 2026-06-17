import {test , expect } from '@playwright/test'
import fs from 'fs';
import path from 'path'


test('Downloading' , async({page}) => {

    // launching of the browser with the url 

    await page.goto('https://the-internet.herokuapp.com/download')

    await page.locator('a:has-text("some-file.txt")').click();

    let filePath = `C:\\Users\\Anurag Patil\\Downloads\\some-file.txt`;

    expect (fs.existsSync(filePath)).toBeTruthy();

    const actualName =
    path.basename(filePath);

    if (actualName === 'some-file.txt') {
    console.log('File found');
    }
    else {
    console.log('Wrong file');
    }









 


});