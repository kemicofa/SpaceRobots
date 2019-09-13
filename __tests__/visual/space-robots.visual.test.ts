import {Browser, Page, launch} from "puppeteer";
const fs = require("fs");

const timeout = (ms = 2000) => new Promise((resolve)=>setTimeout(resolve, ms));

describe.only('Visual', ()=>{

    let page: Page;
    let browser: Browser;
    beforeEach(async ()=>{
        browser = await launch();
        page = await browser.newPage();
        await page.setJavaScriptEnabled(true);
    });

    afterEach(async ()=>{
        await browser.close();
    });

    it('should show html page', async ()=>{
        const html = fs
            .readFileSync(__dirname + "/index.html")
            .toString();
        await page.setContent(html);
        await timeout();
        await page.screenshot({path: './__tests__/visual/images/show-html-page.png'});
    });
})