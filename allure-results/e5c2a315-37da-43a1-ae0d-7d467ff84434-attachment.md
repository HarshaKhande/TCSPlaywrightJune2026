# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Parallelexecution\3WorkersParallel.spec.ts >> verify link
- Location: tests\Parallelexecution\3WorkersParallel.spec.ts:30:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="password"]')
    - locator resolved to <input type="password" name="password" data-v-1f99f73c="" placeholder="Password" class="oxd-input oxd-input--active"/>
    - fill("admin123")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - generic [ref=e7]:
      - img "company-branding"
    - generic [ref=e8]:
      - heading "Login" [level=5] [ref=e9]
      - generic [ref=e10]:
        - generic [ref=e12]:
          - paragraph [ref=e13]: "Username : Admin"
          - paragraph [ref=e14]: "Password : admin123"
        - generic [ref=e15]:
          - generic [ref=e17]:
            - generic [ref=e18]:
              - generic [ref=e19]: 
              - generic [ref=e20]: Username
            - textbox "Username" [active] [ref=e22]
          - generic [ref=e24]:
            - generic [ref=e25]:
              - generic [ref=e26]: 
              - generic [ref=e27]: Password
            - textbox "Password" [ref=e29]
          - button "Login" [ref=e31] [cursor=pointer]
          - paragraph [ref=e33] [cursor=pointer]: Forgot your password?
        - separator [ref=e34]
        - paragraph [ref=e36]: Or login with
        - generic "Instagram" [ref=e38] [cursor=pointer]:
          - paragraph [ref=e39]: Instagram
      - generic [ref=e40]:
        - generic [ref=e41]:
          - link [ref=e42] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e45] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e48] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e51] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e54]:
          - paragraph [ref=e55]: OrangeHRM OS 5.8
          - paragraph [ref=e56]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e57] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - generic [ref=e58]:
    - img "orangehrm-logo"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | 
  4  | 
  5  | test.describe.configure({mode: 'parallel'});
  6  | 
  7  | 
  8  | test('Login', async ({ page }) => {
  9  | 
  10 |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  11 | 
  12 |     await page.locator('input[name="username"]').fill('Admin');
  13 |     await page.pause()
  14 |     ;
  15 |     await page.locator('input[name="password"]').fill('admin123');
  16 |     await page.getByRole('button', { name: 'Login' }).click();
  17 | 
  18 |     const dashboardText = await page
  19 |         .locator('.oxd-topbar-header-breadcrumb h6')
  20 |         .textContent();
  21 | 
  22 |     console.log(dashboardText);
  23 | 
  24 |     expect(dashboardText).toBe('Dashboard')
  25 | 
  26 |     
  27 | 
  28 | });
  29 | 
  30 | test('verify link', async ({ page }) => {
  31 | 
  32 |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  33 | 
  34 |     await page.locator('input[name="username"]').fill('Admin');
  35 |     await page.pause()
  36 |     ;
> 37 |     await page.locator('input[name="password"]').fill('admin123');
     |                                                  ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  38 |     await page.getByRole('button', { name: 'Login' }).click();
  39 | 
  40 |     const dashboardText = await page
  41 |         .locator('.oxd-topbar-header-breadcrumb h6')
  42 |         .textContent();
  43 | 
  44 |     console.log(dashboardText);
  45 | 
  46 |     expect(dashboardText).toBe('Dashboard')
  47 | 
  48 |     
  49 | 
  50 | });
  51 | 
  52 | test('forgot password', async ({ page }) => {
  53 | 
  54 |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  55 | 
  56 |     await page.locator('input[name="username"]').fill('Admin');
  57 |     await page.pause()
  58 |     ;
  59 |     await page.locator('input[name="password"]').fill('admin123');
  60 |     await page.getByRole('button', { name: 'Login' }).click();
  61 | 
  62 |     const dashboardText = await page
  63 |         .locator('.oxd-topbar-header-breadcrumb h6')
  64 |         .textContent();
  65 | 
  66 |     console.log(dashboardText);
  67 | 
  68 |     expect(dashboardText).toBe('Dashboard')
  69 | 
  70 |     
  71 | 
  72 | });
  73 | 
  74 | 
```