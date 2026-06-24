import { test , expect} from '@playwright/test'

test('Employee Admin Workflow',async ({ browser }) => {

    // context 

    let employeeconext = await browser.newContext();

    let adminContext = await browser.newContext()

    // page fixture

   let employee = await employeeconext.newPage()

    let admin = await adminContext.newPage()

    // employee login test

    await employee.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // employee action 

    await employee.click('text=Apply Leave')

    await admin.goto('/admin')

    await admin.click('text=Approve')

    // Employee verify
    await employee.reload()

    await expect(employee.locator('text=Approved')).toBeVisible()






});


