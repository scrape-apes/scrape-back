import craigsListScraper from '../utils/craigslistScraper.js';
import varagesaleScraper from '../utils/varagesaleScraper.js';

export default class CraigsListService {

  static async fetchSearchResults(searchTerm, city) {

    const searchResults = await craigsListScraper(searchTerm, city);

    return searchResults;
  }

  static async fetchVarageSaleResults(city, searchTerm) {

    const results = await varagesaleScraper(city, searchTerm);
    return results;
  }
}
