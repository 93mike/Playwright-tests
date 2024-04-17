import { expect } from "@playwright/test";
import { Navigation } from "./Navigation";

 
export class ProductPage {
    constructor(page) {
        this.page = page;
        
        this.addButtons = page.locator('[data-qa="product-button"]')
        this.sortDropdown = page.locator('//select[@data-qa="sort-dropdown"]')
        this.productTitle = page.locator('//div[@data-qa="product-title"]')
       // this.theBasketCouter = page.locator('//div[@data-qa="header-basket-count"]')
    }

    visit = async()=>{
        await this.page.goto("/");
    }

    // getBasketCount = async()=>{
    //     await this.theBasketCouter.waitFor()
    //     //return number
    //     const text = await this.theBasketCouter.innerText() // "0" , "1", "2"....
    //     //"0" -> 0
    //     return parseInt(text,10)
    // }

    addProductToBasket = async (index) =>{
        //data-qa="product-button"
        const specificAddButton = this.addButtons.nth(index)
        await specificAddButton.waitFor()
        await expect(specificAddButton).toHaveText('Add to Basket')
        const navigaton = new Navigation(this.page)
        const busketCountBeforeAdding = await navigaton.getBasketCount()
        await specificAddButton.click()
        await expect(specificAddButton).toHaveText('Remove from Basket')
        const busketCountAfterAdding = await navigaton.getBasketCount()
        await expect(busketCountBeforeAdding).toBeLessThan(busketCountAfterAdding)
    }
    
    sortByCheapest = async() =>{
        await this.sortDropdown.waitFor()
        //get order of product
        await this.productTitle.first().waitFor()
        const productTitlesBeforeSorting = await this.productTitle.allInnerTexts()
        await this.sortDropdown.selectOption("price-asc")
        //get order of product
        // compare
        const productTitlesAfterSorting = await this.productTitle.allInnerTexts()
        expect(productTitlesAfterSorting).not.toEqual(productTitlesBeforeSorting)

        this.page.pause()
    }
}
