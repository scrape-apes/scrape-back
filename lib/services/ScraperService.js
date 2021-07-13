import craigsListScraper from '../utils/craigslistScraper.js';

export default class CraigsListService {

  static async fetchSearchResults(searchTerm, city) {

    const searchResults = await craigsListScraper(searchTerm, city);

    return searchResults;
  }
}
