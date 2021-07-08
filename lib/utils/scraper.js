import puppeteer from 'puppeteer';

const searchTerm = 'couch';

const URL = `https://portland.craigslist.org/d/for-sale/search/sss?query=${searchTerm}`;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });

  const page = await browser.newPage();
  await page.goto(URL);
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
    return craigslistResults
  })
   //some images/ prices not showing up where expected, may live in other result elements.
  // const entriesWithImages = craigslistEntries.filter(entry => entry.image !== 'No image')
  // const entriesWithPrices = craigslistEntries.filter(entry => entry.price !== 'No price')
  console.log(craigslistEntries, craigslistEntries.length)
  // console.log(craigslistEntries, craigslistEntries.length)
 
})();






