import {test,expect} from '@playwright/test';
import postAPIRequest from '../../testdata/apirequests/POST_API_Request.json';
import putAPIRequest from '../../testdata/apirequests/PUT_API_Request.json';
import token from '../../testdata/apirequests/Token_API_Request.json';
import patchAPIRequest from '../../testdata/apirequests/PATCH_API_Request.json';

import dotenv from 'dotenv';

dotenv.config();

test.use({
    baseURL: process.env.BASE_API_URL,
})

/**
 * Author Testers Talk
 */
test('Create POST API Request using static file in playwright & typescript', async ({ request }) => {

     // Create POST API Request
    let postAPIResponse = await request.post(`/booking`, { data: postAPIRequest });

     // Print JSON API response
    let  jsonPOSTAPIResponse = await postAPIResponse.json();
    // null - not to update the data 
    // 2 proper spacing in the string
    console.log('POST API Response : ' + JSON.stringify(jsonPOSTAPIResponse, null, 2));

    // Validating api response
    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe('OK');
    expect(postAPIResponse.headers()['content-type']).toContain('application/json');

       // Validate propert/key names
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname');
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname');

    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout');

    // Validate API response body
    expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0);
    expect(jsonPOSTAPIResponse.booking.firstname).toBe('playwright typescript by testers talk');
    expect(jsonPOSTAPIResponse.booking.lastname).toBe('playwright javascript by testers talk');

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2025-01-15');
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2025-01-17');

  

    // Create GET API request
    const bookingId = jsonPOSTAPIResponse.bookingid;
    console.log('Booking Id : ' + bookingId);

    const getAPIResponse = await request.get(`/booking/${bookingId}`);

    // Validate status code, status text
    expect(getAPIResponse.status()).toBe(200);
    expect(getAPIResponse.statusText()).toBe('OK');

    // Print GET API response
    const getAPIJSONResponse = await getAPIResponse.json();
    console.log('GET API Response : ' + JSON.stringify(getAPIJSONResponse, null, 2));


     // Create PUT API Request

    const putAPIResponse = await request.put(`/booking/${bookingId}`, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${token}`
        },
        data: putAPIRequest,
    })

    // Validate status code, status text
    expect(putAPIResponse.status()).toBe(200);
    expect(putAPIResponse.statusText()).toBe('OK');

    // Print GET API response
    const putAPIJSONResponse = await putAPIResponse.json();
    console.log('PUT API Response : ' + JSON.stringify(putAPIJSONResponse, null, 2));


    // create patch harsha
     // Create PATCH API Request
    const patchAPIResponse = await request.patch(`/booking/${bookingId}`, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${token}`
        },
        data: patchAPIRequest,
    })

    // Validate status code, status text
    expect(patchAPIResponse.status()).toBe(200);
    expect(patchAPIResponse.statusText()).toBe('OK');

    // Print GET API response
    const patchAPIJSONResponse = await patchAPIResponse.json();
    console.log('PATCH API Response : ' + JSON.stringify(patchAPIJSONResponse, null, 2));


    // Create DELETE API Request
    const deleteAPIResponse = await request.delete(`/booking/${bookingId}`, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=${token}`
        },
    })

    // Validate status code, status text
    expect(deleteAPIResponse.status()).toBe(201);
    expect(deleteAPIResponse.statusText()).toBe('Created');

    console.log('DELETE API Response : ' + await deleteAPIResponse.body());

});

