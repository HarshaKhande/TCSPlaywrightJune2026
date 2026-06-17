import {test , expect } from '@playwright/test'
import { loginPage } from '../pages/loginPage';

test('Login ' , async({page}) => {
let lp = new loginPage(page);
lp.open();
lp.login('standard_user','secret_sauce');
});