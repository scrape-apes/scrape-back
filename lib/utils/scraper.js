import puppeteer from 'puppeteer';

const searchTerm = 'couch';

const URL = `https://portland.craigslist.org/d/for-sale/search/sss?query=${searchTerm}`;

(async () => {
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null });

  const page = await browser.newPage();
  await page.goto(URL);
  

})();
