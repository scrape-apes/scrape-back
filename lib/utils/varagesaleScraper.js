import puppeteer from 'puppeteer';


export default async (city, searchTerm) => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ]
  });

  const page = await browser.newPage();
  await page.goto('https://www.varagesale.com/');
  await page.type('#q', searchTerm);
  const input = await page.$('#location');
  await input.click({ clickCount: 3 });
  await page.type('#location', city);
  await page.keyboard.press('Enter');
  await page.waitForNavigation();

  const vsEntries = await page.evaluate(() => {

    const vsResults = [...document.querySelectorAll('.card')]
      .map(row => {
        return {
          title: row.querySelector('.item-content p').title,
          image: row.querySelector('.image img').src,
          price: row.querySelector('.item-content .green').textContent,
          link: row.querySelector('.js-analytics-click-item').href,
        };
      });
    return vsResults;
  });

  await browser.close();

  return vsEntries;
};

