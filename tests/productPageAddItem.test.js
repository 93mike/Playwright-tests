const { test, expect } = require("@playwright/test");

// test("addItemIntoItem", async({page})=>{
//     await page.goto("localhost:2221");
//     const addToBasket = page.locator('//button[@data-qa="product-button"]').first()
//     const basketCounter = page.locator("//div[@data-qa='header-basket-count']");

//     await addToBasket.waitFor()
//     await expect(basketCounter).toHaveText('0');
  
//     await addToBasket.click()

//     const numOfButtonsWithAddTobasket = page.getByRole('button', { name: 'Add to Basket' }).count();
//     console.log(await page.getByRole('button', { name: 'Add to Basket' }).count()+ " items")
//     expect(addToBasket.count(numOfButtonsWithAddTobasket))
//     await expect(basketCounter).toHaveText('1');

   // const checkoutLink = page.locator('//div[@data-qa="mobile-nav-drawer"]//a[@href="/basket"]');
//     const checkoutLink = page.getByRole('link', {name: 'Checkout'})
//     await checkoutLink.waitFor();
//     await checkoutLink.click()
//     page.waitForURL("/basket")

//     await page.pause()


// })


