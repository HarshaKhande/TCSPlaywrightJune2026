 import {test , expect } from '@playwright/test'
 import data from '../../testdata/products.json'

data.forEach((item) => {

test(`Find product ${item.product}`, async ({ page }) => {

    await page.goto('https://www.amazon.in');

    await page.waitForTimeout(2000);
    await page.locator('#twotabsearchtextbox').click();
    await page.fill('#twotabsearchtextbox' , item.product);
    await page.locator("//input[@id='nav-search-submit-button']").click();
    await expect(page).toHaveTitle(/Amazon/);  

});

 

});

