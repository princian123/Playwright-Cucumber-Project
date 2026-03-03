import {Given, When,Then,setDefaultTimeout} from "@cucumber/cucumber"
import {expect} from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";  

setDefaultTimeout(60 *1000 *2)

Given('User navigates to the application', async function () {
           await pageFixture.page.goto(process.env.BASEURL!); 
           pageFixture.logger.info("User navigates to the application");
});


Given('User click on the login link', async function () {
          await pageFixture.page.waitForLoadState('networkidle');
          await pageFixture.page.locator("text=Login").first().click();
          pageFixture.logger.info("User click on the login link");
});


Given('User enter the username as {string}', async function (username) {
          await pageFixture.page.locator("input[formcontrolname='username']").fill(username);
          pageFixture.logger.info("User enter the username");
});



Given('User enter the password as {string}', async function (password) {
          await pageFixture.page.locator("input[type='password']").fill(password);
          pageFixture.logger.info("User enter the password");
});


When('User click on the login button', async function () {
           await pageFixture.page.locator("//span[text()='Login']").click();
           await pageFixture.page.waitForLoadState();
           //await pageFixture.page.waitForTimeout(60000);
         });

Then('Login should be success', async function () {
         const text= await pageFixture.page.locator("(//span[@class='mdc-button__label'])[2]").textContent();
         console.log('username' + text)

});



Then('Login should not be success', async function () {
        const text= await pageFixture.page.locator("(//span[@class='mdc-button__label'])[2]").textContent();

});


