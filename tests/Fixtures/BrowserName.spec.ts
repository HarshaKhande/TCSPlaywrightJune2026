import {test,expect} from '@playwright/test'

// browserName - test something specific to the browser
test('File Upload',async ({page,browserName}) => {

    if (browserName === 'webkit'){
        test.skip();
    }else {

    await page.goto('https://example.com')
    await page.setInputFiles('#upload','test.pdf')}
});


test('Screenshot',async ({page,browserName})=>{

await page.goto('/')
await page.screenshot({
    path:
    `${browserName}.png`

})

})