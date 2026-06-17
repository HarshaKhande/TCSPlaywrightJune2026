import {test , expect } from '@playwright/test'

test('Date picker' , async({page}) => {


  await page.goto('https://demoqa.com/date-picker');
  await page.locator('#datePickerMonthYearInput').click();
  await page.getByRole('gridcell', { name: 'Choose Wednesday, June 17th,' }).click();
  await page.locator('#dateAndTimePickerInput').click();
  await page.getByRole('gridcell', { name: 'Choose Thursday, June 18th,' }).click();
  await page.getByRole('option', { name: '10:30' }).click();
});
 

