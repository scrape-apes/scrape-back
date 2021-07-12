import puppeteer from 'puppeteer';


export default async (searchTerm) => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ]
  });

  const page = await browser.newPage();
  await page.goto(`https://www.varagesale.com/m/portland-vancouver-hillsboro-or/find?q=${searchTerm}`);

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
  //some images/ prices not showing up where expected, may live in other result elements.
  // const entriesWithImages = vsEntries.filter(entry => entry.image !== 'No image')
  // const entriesWithPrices = vsEntries.filter(entry => entry.price !== 'No price')
  await browser.close();
  // console.log(vsEntries.body, vsEntries.length);
  
  return vsEntries;
};

