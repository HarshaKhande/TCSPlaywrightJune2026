import {test , expect } from '@playwright/test'

test('web table  ' , async({page}) => {

    // launching of the browser with the url 

    await page.goto('https://testautomationpractice.blogspot.com/');

    // locate table rows 

    await page.locator("//table[@name = 'BookTable']").scrollIntoViewIfNeeded();

    let rows = page.locator("//table[@name = 'BookTable']/tbody/tr");

    let rowCount = await rows.count();

    console.log(rowCount);

    // locate table columns  

    let cols = page.locator("//table[@name = 'BookTable']/tbody/tr/td");

    let colCount = await cols.count();

    console.log(colCount);

    // read a specfic cell (row 2)

    let celldata = await page.locator("//table[@name = 'BookTable']/tbody/tr[5]/td[1]").textContent();

    console.log(celldata);

    // print all the table data 

    for (let i = 0 ; i < rowCount; i++){

        let  cols = rows.nth(i).locator('td');
        let  currentColCount = await cols.count();

        let rowData = '';

        for (let j = 0 ; j < currentColCount ; j++){
        rowData += await cols.nth(j).textContent() + ' | ';
       }  

    console.log(rowData);

    }
});

