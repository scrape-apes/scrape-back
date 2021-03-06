import puppeteer from 'puppeteer';
import { citySimple } from './utils.js';

export default async (searchTerm, city) => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });
  const page = await browser.newPage();
  if(!city) {
    return null;
  } 

  const mungeCity = citySimple(city);
  
  await page.goto(`https://${mungeCity}.craigslist.org/d/for-sale/search/sss?query=${searchTerm}`);
  const craigslistEntries = await page.evaluate(() => {
    const craigslistResults = [...document.querySelectorAll('.result-row')]
      .map(row => {
        return {
          title: row.querySelector('.result-heading .result-title').textContent,
          image: row.querySelector('.result-image img') !== null ? row.querySelector('.result-image img').src : 'No image',
          price: row.querySelector('.result-price') !== null ? row.querySelector('.result-price').textContent : 'No price',
          link: row.querySelector('.result-row a').href,
        };
      });
    return craigslistResults;
  });
  //some images/ prices not showing up where expected, may live in other result elements.
  // const entriesWithImages = craigslistEntries.filter(entry => entry.image !== 'No image')
  // const entriesWithPrices = craigslistEntries.filter(entry => entry.price !== 'No price')
  await browser.close();
  return craigslistEntries;
  // console.log(craigslistEntries, craigslistEntries.length)
};

