# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\users.spec.ts >> Create POST API Request using static file in playwright & typescript
- Location: tests\api\users.spec.ts:18:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 403
```

# Test source

```ts
  1   | import {test,expect} from '@playwright/test';
  2   | import postAPIRequest from '../../testdata/apirequests/POST_API_Request.json';
  3   | import putAPIRequest from '../../testdata/apirequests/PUT_API_Request.json';
  4   | import token from '../../testdata/apirequests/Token_API_Request.json';
  5   | import patchAPIRequest from '../../testdata/apirequests/PATCH_API_Request.json';
  6   | 
  7   | import dotenv from 'dotenv';
  8   | 
  9   | dotenv.config();
  10  | 
  11  | test.use({
  12  |     baseURL: process.env.BASE_API_URL,
  13  | })
  14  | 
  15  | /**
  16  |  * Author Testers Talk
  17  |  */
  18  | test('Create POST API Request using static file in playwright & typescript', async ({ request }) => {
  19  | 
  20  |      // Create POST API Request
  21  |     let postAPIResponse = await request.post(`/booking`, { data: postAPIRequest });
  22  | 
  23  |      // Print JSON API response
  24  |     let  jsonPOSTAPIResponse = await postAPIResponse.json();
  25  |     // null - not to update the data 
  26  |     // 2 proper spacing in the string
  27  |     console.log('POST API Response : ' + JSON.stringify(jsonPOSTAPIResponse, null, 2));
  28  | 
  29  |     // Validating api response
  30  |     expect(postAPIResponse.status()).toBe(200);
  31  |     expect(postAPIResponse.statusText()).toBe('OK');
  32  |     expect(postAPIResponse.headers()['content-type']).toContain('application/json');
  33  | 
  34  |        // Validate propert/key names
  35  |     expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
  36  |     expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');
  37  | 
  38  |     expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
  39  |     expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');
  40  | 
  41  |     // Validate API response body
  42  |     expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
  43  |     expect(jsonPOSTAPIResponse.booking.firstname).toBe('playwright typescript by testers talk');
  44  |     expect(jsonPOSTAPIResponse.booking.lastname).toBe('playwright javascript by testers talk');
  45  | 
  46  |     expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-15');
  47  |     expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-17');
  48  | 
  49  |   
  50  | 
  51  |     // Create GET API request
  52  |     const bookingId = jsonPOSTAPIResponse.bookingid;
  53  |     console.log('Booking Id : ' + bookingId);
  54  | 
  55  |     const getAPIResponse = await request.get(`/booking/${bookingId}`);
  56  | 
  57  |     // Validate status code, status text
  58  |     expect(getAPIResponse.status()).toBe(200);
  59  |     expect(getAPIResponse.statusText()).toBe('OK');
  60  | 
  61  |     // Print GET API response
  62  |     const getAPIJSONResponse = await getAPIResponse.json();
  63  |     console.log('GET API Response : ' + JSON.stringify(getAPIJSONResponse, null, 2));
  64  | 
  65  | 
  66  |      // Create PUT API Request
  67  | 
  68  |     const putAPIResponse = await request.put(`/booking/${bookingId}`, {
  69  |         headers: {
  70  |             "Content-Type": "application/json",
  71  |             "Cookie": `token=${token}`
  72  |         },
  73  |         data: putAPIRequest,
  74  |     })
  75  | 
  76  |     // Validate status code, status text
> 77  |     expect(putAPIResponse.status()).toBe(200);
      |                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  78  |     expect(putAPIResponse.statusText()).toBe('OK');
  79  | 
  80  |     // Print GET API response
  81  |     const putAPIJSONResponse = await putAPIResponse.json();
  82  |     console.log('PUT API Response : ' + JSON.stringify(putAPIJSONResponse, null, 2));
  83  | 
  84  | 
  85  |     // create patch harsha
  86  |      // Create PATCH API Request
  87  |     const patchAPIResponse = await request.patch(`/booking/${bookingId}`, {
  88  |         headers: {
  89  |             "Content-Type": "application/json",
  90  |             "Cookie": `token=${token}`
  91  |         },
  92  |         data: patchAPIRequest,
  93  |     })
  94  | 
  95  |     // Validate status code, status text
  96  |     expect(patchAPIResponse.status()).toBe(200);
  97  |     expect(patchAPIResponse.statusText()).toBe('OK');
  98  | 
  99  |     // Print GET API response
  100 |     const patchAPIJSONResponse = await patchAPIResponse.json();
  101 |     console.log('PATCH API Response : ' + JSON.stringify(patchAPIJSONResponse, null, 2));
  102 | 
  103 | 
  104 |     // Create DELETE API Request
  105 |     const deleteAPIResponse = await request.delete(`/booking/${bookingId}`, {
  106 |         headers: {
  107 |             "Content-Type": "application/json",
  108 |             "Cookie": `token=${token}`
  109 |         },
  110 |     })
  111 | 
  112 |     // Validate status code, status text
  113 |     expect(deleteAPIResponse.status()).toBe(201);
  114 |     expect(deleteAPIResponse.statusText()).toBe('Created');
  115 | 
  116 |     console.log('DELETE API Response : ' + await deleteAPIResponse.body());
  117 | 
  118 | });
  119 | 
  120 | 
```