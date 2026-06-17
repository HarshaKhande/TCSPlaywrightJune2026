import {test , expect } from '@playwright/test'

test('Tool tip handling' , async({page}) => {

    // launching of the browser with the url 

    await page.goto('https://demoqa.com/tool-tips')

    await page.locator('button').filter({ hasText: 'Hover me to see' }).hover();

    await expect(page.locator('.tooltip-inner')).toHaveText('You hovered over the Button');

 


});