import { timeout } from "../playwright.config"

export class DeliveryDetails{
    constructor(page){
        this.page = page

        this.firstNameInput = page.locator('//input[@placeholder="First name"]')
        this.lastNameInput = page.locator('//input[@placeholder="Last name"]')
        this.streetInput = page.locator('//input[@placeholder="Street"]')
        this.postCodeInput = page.locator('//input[@placeholder="Post code"]')
        this.cityInput = page.locator('//input[@placeholder="City"]')
        this.countrySelect = page.locator('//select[@data-qa="country-dropdown"]')
        this.saveAddressButton= page.locator('//button[@data-qa="save-address-button"]')
        this.continuePaymentButton = page.locator('//button[@data-qa="continue-to-payment-button"]')
    }

    fillDetails = async()=>{
        await this.firstNameInput.waitFor()
        await this.firstNameInput.fill('first')
        await this.lastNameInput.waitFor()
        await this.lastNameInput.fill('last')
        await this.streetInput.waitFor()
        await this.streetInput.fill('street')
        await this.postCodeInput.waitFor()
        await this.postCodeInput.fill('postCode')
        await this.cityInput.waitFor()
        await this.cityInput.fill('city')
        await this.countrySelect.waitFor()
        await this.countrySelect.selectOption("Ukraine")
        await this.saveAddressButton.waitFor()
        await this.saveAddressButton.click()
        await this.continuePaymentButton.waitFor()
        await this.continuePaymentButton.click()
        await this.page.waitForURL(/\/payment/, {timeout: 2000}) 


        this.page.pause()
        
    }
}