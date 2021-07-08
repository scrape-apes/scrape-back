import craigsListScraper from '../utils/scraper.js';

export default class CraigsListService {
  
  static async fetchSearchResults(searchTerm) {

    const searchResults = await craigsListScraper(searchTerm);

    return searchResults;
  }
}
