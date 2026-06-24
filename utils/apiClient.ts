import {
request
}
from '@playwright/test';

export async function apiClient() {

return await request.newContext({

baseURL:
'https://jsonplaceholder.typicode.com'

});

}