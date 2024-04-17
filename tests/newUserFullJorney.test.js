const { test, expect } = require("@playwright/test");
import {ProductPage} from '../page-objects/ProductPage'
import { Navigation } from '../page-objects/Navigation';
import {Checkout} from "../page-objects/Checkout"
import { Login } from '../page-objects/Login'
import {DeliveryDetails} from './../page-objects/DeliveryDetails' 
import {RegisterPage} from '../page-objects/RegisterPage'
import { v4 as uuidv4 } from 'uuid';

test('newUserE2eYournay',  async ({page})=>{
// productPage.visit()
// productPage.addItemToBasket(1)
// productPage.sortProductByCheapest()

// navigation.moveToCheckout()
// basket.removeCheapestItem()
const productPage = new ProductPage(page);
await productPage.visit();
await productPage.addProductToBasket(0)
await productPage.addProductToBasket(1)
await productPage.addProductToBasket(2)
const navigation = new Navigation(page)
await navigation.goToCheckout()


const checkout = new Checkout(page)
await checkout.removeCheapestProduct()
await page.pause()
})

test('checkOrder',  async ({page})=>{
    const productPage = new ProductPage(page);
    await productPage.visit();
    await productPage.sortByCheapest();
// await page.pause()
})

test('ContinueCheckout',  async ({page})=>{
    const productPage = new ProductPage(page);
    await productPage.visit();
    await productPage.addProductToBasket(0)
    await productPage.addProductToBasket(1)
    const navigation = new Navigation(page)
    await navigation.goToCheckout()
    const checkout = new Checkout(page)
    //await page.pause()
    await checkout.continueToCheckout()
    //await page.pause()
})

test ('go to SignPage and put data', async({page})=>{
    const productPage = new ProductPage(page);
    await productPage.visit();
    const navigation = new Navigation(page)
    await navigation.goToCheckout()  
    //await  page.pause()
    const checkout = new Checkout(page)
    await checkout.continueToCheckout()
    const loginPage = new Login(page)
    loginPage.moveToSignup()
    //await page.pause()
    const registerPage = new RegisterPage(page)
    await page.waitForTimeout(1000);
    const email = uuidv4()+ "@gmail.com"
    const password = uuidv4()
    registerPage.signupAsNewUser(email,password)
    await page.pause()
})

test ('Delivery Details', async({page})=>{
    const productPage = new ProductPage(page);
    await productPage.visit();
    const navigation = new Navigation(page)
    await navigation.goToCheckout()  
    //await  page.pause()
    const checkout = new Checkout(page)
    await checkout.continueToCheckout()
    const loginPage = new Login(page)
    loginPage.moveToSignup()
    //await page.pause()
    const registerPage = new RegisterPage(page)
    await page.waitForTimeout(1000);
    const email = uuidv4()+ "@gmail.com"
    const password = uuidv4()
    registerPage.signupAsNewUser(email,password)

    const deliveryDetails = new DeliveryDetails(page)
    deliveryDetails.fillDetails()
    await page.pause()
})