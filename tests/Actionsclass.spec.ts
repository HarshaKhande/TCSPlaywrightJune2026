import {test , expect } from '@playwright/test'

test('Acytions class ' , async({page}) => {

    /* 
    Mouse hover 
    Right Click
    Double click
    Drag and drop
    */

    // launching of the browser with the url 

    await page.goto('https://demoqa.com/buttons');

    // double click

    await page.locator(':text-is("Double Click Me")').dblclick();

    // right click

    await page.locator(':text("Right Click Me")').click({button: 'right'});

    // mouse hover 

     await page.goto('https://the-internet.herokuapp.com/hovers');

     await page.locator("(//img[@alt = 'User Avatar'])[3]").hover();

    let user3 = await page.getByText('name: user3').textContent()

    // assertion 

    expect(user3).toBe('name: user3')

    // drag and drop 

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    await page.locator('#column-a')
            .dragTo(page.locator('#column-b'));



});