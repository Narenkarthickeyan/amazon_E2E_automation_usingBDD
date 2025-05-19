import { test, expect } from '@playwright/test';
import { AmazonHomePage } from '../../pages/AmazonHomePage';
import { AmazonLoginPage } from '../../pages/AmazonLoginPage';
import { AmazonCartPage  } from '../../pages/AmazonCartPage';
import { AmazonProductPage } from '../../pages/AmazonProductPage';

test.describe('Amazon Functional Tests', () => {

    test('Sign in with valid credentials', async ({ page }) => {
        const homePage = new AmazonHomePage(page);
        const loginPage = new AmazonLoginPage(page);
        // Navigate to the Amazon home page
        await homePage.navigate();
        await homePage.sigin();
        //singinpage
        await loginPage.validLogin({emilorphone:"Enteryouremail",Password:"EnteryourPassword"});
    });
    test('Sign in with Invalid credentials', async ({ page }) => {
        const homePage = new AmazonHomePage(page);
        const loginPage = new AmazonLoginPage(page);
        // Navigate to the Amazon home page
        await homePage.navigate();
        await homePage.sigin();
        //singinpage
        await loginPage.invalidLogin({emilorphone:"*********"});
    });
    test('Search and add a product after signing in', async ({ page }) => {
        const homePage = new AmazonHomePage(page);
        const loginPage = new AmazonLoginPage(page);
        const cardPage = new AmazonCartPage(page);
        const productPage = new AmazonProductPage(page);
        // Navigate to the Amazon home page
        await homePage.navigate();
        await homePage.sigin();
        //singinpage
        await loginPage.validLogin({emilorphone:"Enteryouremail",Password:"EnteryourPassword"});
        //select the laptop
        await homePage.searchForProduct('Laptop');
        await productPage.selectLaptop();
        await cardPage.gotocardpage();
    });  
});
