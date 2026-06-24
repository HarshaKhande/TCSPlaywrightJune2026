import { test , expect} from '@playwright/test'

test('Buyer and Seller workflow', async ({ browser }) => {

// create a buyer session 
let  buyerContext = await browser.newContext();
let buyerPage = await buyerContext.newPage();

 // Create Seller Session
 let sellerContext = await browser.newContext()
 let sellerPage = await sellerContext.newPage()


 // Buyer Login
await buyerPage.goto('https://example.com/login')
await buyerPage.fill('#email','buyer@test.com')
await buyerPage.fill('#password','123')
await buyerPage.click('button[type=submit]')


 // Buyer creates order
 await buyerPage.click('text=Place Order')

// Seller Login
await sellerPage.goto('https://example.com/login')
await sellerPage.fill('#email','seller@test.com')
await sellerPage.fill('#password','123')
await sellerPage.click('button[type=submit]')

await sellerPage.click('text=Orders')
await sellerPage.click('text=Approve')

 // Buyer refreshes
await buyerPage.reload()


await expect(buyerPage.locator('text=Order Approved')).toBeVisible()


// Cleanup
 await buyerContext.close()

 await sellerContext.close()

 
});

