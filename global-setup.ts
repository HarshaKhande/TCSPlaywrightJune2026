import { chromium } from "@playwright/test";

async function globalSetup(){

    console.log('Global Setup started');

    let browser = await chromium.launch();

    let page = await browser.newPage();

    await page.goto('https://www.saucedemo.com');

    await page.fill('#user-name','standard_user');

    await page.fill('#password','secret_sauce');

    await page.click('#login-button');


    // save authentication

    await page.context().storageState({

        path:
        'auth.json'

});
console.log('Global Setup Completed');

}

export default globalSetup;