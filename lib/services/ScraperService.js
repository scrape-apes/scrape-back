import craigsListScraper from '../utils/craigslistScraper.js';
import offerUpScraper from '../utils/offerUpScraper.js';
import varagesaleScraper from '../utils/varagesaleScraper.js';

export default class CraigsListService {

  static async fetchSearchResults(searchTerm, city) {

    const craiglistSearchResults = await craigsListScraper(searchTerm, city);
    const varagesaleSearchResults = await varagesaleScraper(city, searchTerm);
    // const offerupSearchResults = await offerUpScraper(searchTerm);

    //function to aggregate results

    return [varagesaleSearchResults, craiglistSearchResults].flat();
  }

  // static async fetchVarageSaleResults(city, searchTerm) {

  //   const results = await varagesaleScraper(city, searchTerm);
  //   return results;
  // }

  // static async fetchOfferUpSaleResults(searchTerm) {

  //   const results = await offerUpScraper(searchTerm);
  //   return results;
  // }
}
