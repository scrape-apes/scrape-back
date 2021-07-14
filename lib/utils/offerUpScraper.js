import { isContinueStatement } from '@babel/types';
import puppeteer from 'puppeteer';
import itemPriceMunger from './itemPriceMunger.js'
import loadUrl from './loadUrl.js';

export default async (searchTerm) => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ], headless: false, defaultViewport: null
  });

  const page = await browser.newPage();
  await loadUrl(page, `https://offerup.com/search?q=${searchTerm}`)

  console.log('FIRST CONSOLE');

  const offerEntries = await page.evaluate(() => {
    const items = [...document.querySelectorAll('a[href^="/item"]')].map(element => {
      return {
        title: element.title,
        link: element.href
      };
    });
    
    
    const prices = [...document.querySelectorAll('.MuiTypography-body1')].map(prices => prices.textContent);

    const images = [...document.querySelectorAll('img')].map(img => img.src)

    const slicedPrices = prices.slice(2);
    const slicedItems = items.slice(0, prices.length);
    const filteredPrices = slicedPrices.filter(item => item[0] === '$')


   return [slicedItems, filteredPrices, images]
  });
  // await browser.close()

  return itemPriceMunger(offerEntries[0], offerEntries[1], offerEntries[2]).filter(item => item.price)
  
};




