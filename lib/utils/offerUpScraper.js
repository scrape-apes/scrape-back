import puppeteer from 'puppeteer';
// import itemPriceMunger from './itemPriceMunger';


export default async (searchTerm) => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ]
  });

  const page = await browser.newPage();
  await page.goto(`https://offerup.com/search?q=${searchTerm}`);
  console.log('FIRST CONSOLE');
  const offerEntries = await page.evaluate(() => {
    const items = [...document.querySelectorAll('a[href^="/item"]')].map(element => {
      return {
        title: element.title,
        link: element.href
      };
    });
    const prices = [...document.querySelectorAll('.MuiTypography-body1')].map(prices => prices.textContent);
    const slicedPrices = prices.slice(2);
    const slicedItems = items.slice(prices.length);

    return itemPriceMunger(slicedItems, slicedPrices);
  });
  return offerEntries;
};
