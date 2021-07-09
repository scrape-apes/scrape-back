import craigsListScraper from '../utils/craigslistScraper.js';

export default class CraigsListService {

  static async fetchSearchResults(searchTerm) {

    const searchResults = await craigsListScraper(searchTerm);

    return searchResults;
  }
}
