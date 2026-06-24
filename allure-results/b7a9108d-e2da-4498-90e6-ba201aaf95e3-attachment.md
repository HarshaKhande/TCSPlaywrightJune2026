# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assertions\HardAndSoftAssertions.spec.ts >> Hard Assertion
- Location: tests\Assertions\HardAndSoftAssertions.spec.ts:3:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('h1')
Expected: "Wrong Text"
Received: "Playwright enables reliable web automation for testing, scripting, and AI agents."
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('h1')
    11 × locator resolved to <h1 class="hero__title heroTitle_ohkl">…</h1>
       - unexpected value "Playwright enables reliable web automation for testing, scripting, and AI agents."

```

```yaml
- heading "Playwright enables reliable web automation for testing, scripting, and AI agents." [level=1]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Hard Assertion',async ({ page }) => {
  4  | 
  5  | await page.goto('https://playwright.dev');
  6  | 
  7  | // Fail
> 8  | await expect(page.locator('h1')).toHaveText('Wrong Text');
     |                                  ^ Error: expect(locator).toHaveText(expected) failed
  9  | 
  10 | // Pass
  11 | await expect(page).toHaveTitle(/Fast and reliable end-to-end testing for modern web apps | Playwright/);
  12 | 
  13 | 
  14 | 
  15 | // Will NOT executeconsole.log('Execution stopped');
  16 | 
  17 | });
```