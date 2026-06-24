# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginWithGlobalSetUpTeardown.spec.ts >> Open inventory
- Location: tests\LoginWithGlobalSetUpTeardown.spec.ts:5:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /inventory/
Received string:  "https://www.saucedemo.com/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    12 × unexpected value "https://www.saucedemo.com/"

```

```yaml
- text: Swag Labs
- textbox "Username"
- textbox "Password"
- 'heading "Epic sadface: You can only access ''/inventory.html'' when you are logged in." [level=3]':
  - button
  - text: "Epic sadface: You can only access '/inventory.html' when you are logged in."
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | 
  4  | 
  5  | test('Open inventory', async ({ page}) => {
  6  | 
  7  |     await page.goto('https://www.saucedemo.com/inventory.html');
  8  | 
> 9  |     await expect(page).toHaveURL(/inventory/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  10 | 
  11 | 
  12 | });
  13 | 
  14 | 
  15 | 
```