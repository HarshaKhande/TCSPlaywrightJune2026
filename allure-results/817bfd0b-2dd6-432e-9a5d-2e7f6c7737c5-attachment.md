# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TraceAtTestcaseLevel.spec.ts >> Trace enable at testcase level 
- Location: tests\TraceAtTestcaseLevel.spec.ts:3:5

# Error details

```
Error: tracing.start: Tracing has been already started
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | test('Trace enable at testcase level ', async ({ page, context }) => {
  4  | 
  5  |     // enable the tracing 
  6  | 
> 7  | await context.tracing.start({screenshots: true,snapshots: true});
     |                       ^ Error: tracing.start: Tracing has been already started
  8  | 
  9  | await page.goto('https://example.com');
  10 | 
  11 | // disable the tracing
  12 | 
  13 | await context.tracing.stop({
  14 | path: 'trace.zip'
  15 | });
  16 | 
  17 | });
```