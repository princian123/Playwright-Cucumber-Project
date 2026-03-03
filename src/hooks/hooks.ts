import {Before, After, BeforeAll, AfterAll, Status} from "@cucumber/cucumber";
import {Browser, BrowserContext} from "@playwright/test"
import {pageFixture} from "./pageFixture"
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/utils/logger";
const fs = require("fs-extra");

let browser:Browser;
let context: BrowserContext;

BeforeAll(async function (){
    getEnv();
    browser= await invokeBrowser();

});

Before(async function({pickle}){
    const scenarioName = pickle.name+pickle.id;
     context= await browser.newContext({
        recordVideo:{
        dir: "test-results/videos",
     },
     });
     
     const page= await context.newPage();
     pageFixture.page=page;
     pageFixture.logger=createLogger(options(scenarioName));

});

After(async function({pickle,result}){
    let videoPath: string | undefined;
    let img: Buffer | undefined;

    if(result?.status==Status.FAILED){
        const newpickle= pickle.name.replace(/\s+/g,'_')
        img = await pageFixture.page.screenshot({path: `./reports/screenshots/${newpickle}.png`, type: "png"});
        videoPath= await pageFixture.page.video()?.path();
    }
    
    await pageFixture.page.close();
    await context.close();
    
    if(img){
        await this.attach(
            img, "image/png"
        );
    }
    
    if(videoPath){
        await this.attach(
            fs.readFileSync(videoPath),
            'video/webm'
        );
    }
});

AfterAll(async function (){
    await browser.close();
    //pageFixture.logger.close();

});