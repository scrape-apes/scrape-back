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
})();

const temp = [...document.querySelectorAll('.result-row')]
  .map(row => {
    return {
      title: row.querySelector('.result-heading .result-title').textContent,
      image: row.querySelector('.swipe-wrap img') !== null ? row.querySelector('.swipe-wrap img').src : 'No image',
      price: row.querySelector('.result-price') !== null ? row.querySelector('.result-price').textContent : 'No price',
      link: row.querySelector('.result-row a').href,
    };
  });
