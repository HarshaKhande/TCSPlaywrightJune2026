import {test , expect } from '@playwright/test'

test('Upload ' , async({page}) => {

    // launching of the browser with the url 

    await page.goto('https://the-internet.herokuapp.com/upload');

    await page.locator('input[name="file"]').setInputFiles('C:/Users/Anurag Patil/Downloads/some-file.txt')

    await page.locator('input[type="submit"]').click();

    await page.locator('h3:has-text("File Uploaded!")').waitFor();

    await expect(page.locator('h3:has-text("File Uploaded!")')).toBeVisible();



});

test('Upload multiple files ' , async({page}) => {

    // launching of the browser with the url 

    await page.goto('https://the-internet.herokuapp.com/upload');

    await page.setContent(`
        <input type="file" multiple>
    `);

    await page.locator('input[type="file"]')
        .setInputFiles([
            'test-data/file1.txt',
            'test-data/file2.txt'
        ]);

    await page.locator('input[type="submit"]').click();

    await page.locator('h3:has-text("File Uploaded!")').waitFor();

    await expect(page.locator('h3:has-text("File Uploaded!")')).toBeVisible();



});