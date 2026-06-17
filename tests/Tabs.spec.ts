import {test , expect } from '@playwright/test'

test('Tabs handling' , async({page}) => {

    // launching of the browser with the url 

    await page.goto('https://the-internet.herokuapp.com/windows')
    let  page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Click Here' }).click();
    let page1 = await page1Promise;
    await expect(page.getByRole('heading', { name: 'Opening a new window' })).toBeVisible();
});

 
test('Tabs handling using code ' , async({page, context }) => {

    // launching of the browser with the url 

    await page.goto('https://the-internet.herokuapp.com/windows')

    let [newPage]   = await Promise.all([
        context.waitForEvent('page'),
        page.getByText('Click Here').click()
    ]);   
    await  newPage.waitForLoadState();
    console.log(await newPage.title());
    await expect(newPage.locator('h3')).toHaveText('New Window');
    await newPage.close();
        
});


 
test('switching between parent and child windows  ' , async({page, context }) => {

    // launching of the browser with the url 

    await page.goto('https://the-internet.herokuapp.com/windows')

    let parentPage = page;

    let [childPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByText('Click Here').click()
    ]);

      await childPage.waitForLoadState();

    console.log('Parent Title:', await parentPage.title());
    console.log('Child Title:', await childPage.title());

    await childPage.close();
    await parentPage.bringToFront();
    await expect(page.getByRole('heading', { name: 'Opening a new window' })).toBeVisible();
        
});


test('multiple tabs handling  ' , async({page, context }) => {

    // launching of the browser with the url 

    await page.goto('https://the-internet.herokuapp.com/windows')

    let tab1 = await context.newPage();
    tab1.goto('https://the-internet.herokuapp.com/windows/new')
    // do the operations 

    let tab2 = await context.newPage();
    tab2.goto('https://www.bing.com')
    // do the operations 


    
        
});



