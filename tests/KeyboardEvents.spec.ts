import {test , expect } from '@playwright/test'

test('Keyboard events' , async({page}) => {
    
    // launching of the browser with the url 

    await page.goto('https://the-internet.herokuapp.com/key_presses');

    // KEYBOARD ACTIONS 

    await page.locator('input[type="text"]').click();

    await page.keyboard.press('A');

    await page.keyboard.press('SHIFT')
    
    await page.keyboard.press('TAB')

    await page.keyboard.press('Enter')

    // MOuse  actions 

    await page.mouse.down();

    await page.mouse.up();






});
