import craigsListScraper from '../utils/craigslistScraper.js';
import offerUpScraper from '../utils/offerUpScraper.js';
import varagesaleScraper from '../utils/varagesaleScraper.js';
import mergeResults from '../utils/mergeResults.js'

export default class CraigsListService {

  static async fetchSearchResults(searchTerm, city) {

    const craiglistSearchResults = await craigsListScraper(searchTerm, city);
    const varagesaleSearchResults = await varagesaleScraper(city, searchTerm);
    // const offerupSearchResults = await offerUpScraper(searchTerm);

    //function to aggregate results

    const mergedResults = mergeResults(craiglistSearchResults, varagesaleSearchResults)
    return mergedResults
  }
}
