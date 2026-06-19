import { test } from '@playwright/test';

test('Trace enable at testcase level ', async ({ page, context }) => {

    // enable the tracing 

await context.tracing.start({screenshots: true,snapshots: true});

await page.goto('https://example.com');

// disable the tracing

await context.tracing.stop({
path: 'trace.zip'
});

});