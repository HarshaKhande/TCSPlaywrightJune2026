import { test,expect } from '@playwright/test';


// test.skip() - skip the execution 

test.skip('Test1', async ({ page }) => {

await page.goto('https://www.saucedemo.com/');
await page.close();
});


test('Test2', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.close();
});

// test.only - focus on this tetscased onll


/*test.only('Test3', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

}); */

test('Test4', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.close();
});

test.fixme('Test5', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.close();
});

// test.fail will fail the testcase deliberately

test.fail('Test6', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await page.close();
});


//test.slow() → Increase Timeout

test('Test7', async ({ page }) => {

test.slow();

await page.goto('https://example.com');
await page.close();

});

// test.describe() → Group Tests

/*test.describe('Login Module', () => {

test('Valid Login', async () => {

});

test('Invalid Login', async () => {

});

}); */

//Add Tags (Common Framework Pattern)

test('Test8 @smoke @regression', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.close();
}
);


//npx playwright test --grep "@smoke"
//npx playwright test --grep "@regression"



