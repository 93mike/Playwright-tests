import { expect } from "@playwright/test";

export class Navigation{
    constructor(page) {
        this.page = page;
       
        this.theBasketCouter = page.locator('//div[@data-qa="header-basket-count"]')
        this.checkoutLink = page.locator('//p[@data-qa="desktop-nav-link"]/a[@href="/basket"]')
    }

    getBasketCount = async()=>{
        await this.theBasketCouter.waitFor()
        //return number
        const text = await this.theBasketCouter.innerText() // "0" , "1", "2"....
        //"0" -> 0
        return parseInt(text,10)
    }

    goToCheckout = async () =>{
        await this.checkoutLink.waitFor()
        await this.checkoutLink.click()
        await this.page.waitForURL("/basket")
    }

}

