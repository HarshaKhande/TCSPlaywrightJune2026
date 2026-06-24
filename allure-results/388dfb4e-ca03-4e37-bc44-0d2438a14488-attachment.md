# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\users.spec.ts >> Create POST API Request using static file in playwright & typescript
- Location: tests\api\users.spec.ts:14:5

# Error details

```
TypeError: apiRequestContext.post: Invalid URL
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | import postAPIRequest from '../../testdata/apirequests/POST_API_Request.json';
  4  | 
  5  | 
  6  | test.use({
  7  |     baseURL: process.env.BASE_API_URL,
  8  | })
  9  | 
  10 | 
  11 | /**
  12 |  * Author Testers Talk
  13 |  */
  14 | test('Create POST API Request using static file in playwright & typescript', async ({ request }) => {
  15 | 
  16 | 
  17 |      // Create POST API Request
> 18 |     let postAPIResponse = await request.post(`/booking`, { data: postAPIRequest });
     |                                         ^ TypeError: apiRequestContext.post: Invalid URL
  19 | 
  20 | 
  21 |      // Print JSON API response
  22 |     let  jsonPOSTAPIResponse = await postAPIResponse.json();
  23 |     // null - not to update the data 
  24 |     // 2 proper spacing in the string
  25 |     console.log('POST API Response : ' + JSON.stringify(jsonPOSTAPIResponse, null, 2));
  26 | 
  27 |     // Validating api response
  28 |     expect(postAPIResponse.status()).toBe(200);
  29 |     expect(postAPIResponse.statusText()).toBe('OK');
  30 |     expect(postAPIResponse.headers()['content-type']).toContain('application/json');
  31 | 
  32 |        // Validate propert/key names
  33 |     expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
  34 |     expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');
  35 | 
  36 |     expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
  37 |     expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');
  38 | 
  39 |     // Validate API response body
  40 |     expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
  41 |     expect(jsonPOSTAPIResponse.booking.firstname).toBe('playwright typescript by testers talk');
  42 |     expect(jsonPOSTAPIResponse.booking.lastname).toBe('playwright javascript by testers talk');
  43 | 
  44 |     expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-15');
  45 |     expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-17');
  46 | 
  47 | 
  48 | });
```