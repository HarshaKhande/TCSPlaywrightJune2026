import { Page   } from "@playwright/test";


export class loginPage {

    constructor(
        private page : Page
    ) {}

    // locators 

    username = 'input[name="user-name"]';

    password = "//input[@id='password']";

    loginButton = 'input[name="login-button"]';

    // page actions 

    async open(){

          await this.page.goto('https://www.saucedemo.com/');
    }

    async login (user : string , pass : string){

        await this.page.fill(this.username,'standard_user');

        await this.page.fill(this.password,'secret_sauce');

        await this.page.click(this.loginButton);
    
    }

}