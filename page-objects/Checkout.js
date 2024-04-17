import { expect } from "@playwright/test";
import { timeout } from "../playwright.config";

export class Checkout {
    constructor(page){
        this.page= page

        this.basketCards = page.locator('//div[@data-qa="basket-card"]')
        this.basketItemPrice = page.locator('//div[@data-qa="basket-item-price"]')
        this.basketItemRemoveFromBasket = page.locator('//button[@data-qa="basket-card-remove-item"]')
        this.continueToCheckoutButton = page.locator('//button[@data-qa="continue-to-checkout"]/div')

    }

    removeCheapestProduct = async ()=>{
        await this.basketCards.first().waitFor()
        const itemsBeforeRemoval = await this.basketCards.count()
        console.warn({itemsBeforeRemoval})
       // await this.page.pause()
        await this.basketItemPrice.first().waitFor()
        const allPriceText = await this.basketItemPrice.allInnerTexts() 
        // { allPriceText: [ '499$', '599$', '320$' ] } - > [499, 599,320 ]
        const justNumders = allPriceText.map((element)=>{
            const withOutDollarSign = element.replace("$", "")
            console.warn({withOutDollarSign})
            return parseInt(withOutDollarSign)
        })
        console.warn({justNumders})
        const minValueItem =  Math.min(...justNumders)
        const minValueItemIndex = justNumders.indexOf(minValueItem)
        console.log({minValueItemIndex})
        const specificRemoveButton = this.basketItemRemoveFromBasket.nth(minValueItemIndex)
        await specificRemoveButton.waitFor()
        await specificRemoveButton.click()
        await expect(this.basketCards).toHaveCount(itemsBeforeRemoval -1)
        //await this.page.pause()
    }

    continueToCheckout = async () => {
        await this.continueToCheckoutButton.waitFor()
        await this.continueToCheckoutButton.click()
        await this.page.waitForURL(/\/login/, {timeout: 3000})
    }


}