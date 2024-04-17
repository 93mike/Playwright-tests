import { expect } from "@playwright/test";
import { Navigation } from "./Navigation";
import { Checkout } from "./Checkout";
import { timeout } from "../playwright.config";


export class Login {
    constructor(page){
        this.page = page;

        this.registerButton = page.locator('//button[@data-qa="go-to-signup-button"]')
    }

    moveToSignup = async () =>{
        await this.registerButton.waitFor()
        await this.registerButton.click()
        await this.page.waitForURL(/\/signup/,{timeout:5000})

    }
}