import { expect } from "@playwright/test";
import { Navigation } from "./Navigation";
import { Checkout } from "./Checkout";
import { timeout } from "../playwright.config";
import { v4 as uuidv4 } from 'uuid';

export class RegisterPage {
    constructor(page){
        this.page = page

        this.emailInput = page.locator('//input[@placeholder="E-Mail"]')
        this.passwordInput = page.locator('//input[@placeholder="Password"]')
        this.registerButton = page.locator('//button[@type="submit"]')
        this.locatoradditional = page.locator('//div/h1')
    }

    signupAsNewUser = async(email, password)=>{
        //type into email and password
        //click register 
        await this.emailInput.waitFor()
        await this.emailInput.fill(email)
        await this.locatoradditional.click()
        await this.passwordInput.waitFor();
        await this.passwordInput.click()
        await this.passwordInput.fill(password)
        await this.locatoradditional.click()
        await this.registerButton.waitFor()
        await this.registerButton.click()
        await this.page.pause()
    }
}