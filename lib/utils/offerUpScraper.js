import puppeteer from 'puppeteer';


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

    const offerResults = document.querySelector('.jss730');
    console.log('TESTING', offerResults);
  });
};
