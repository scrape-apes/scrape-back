import { Router } from 'express';
import ensureAuth from '../middleware/ensureAuth.js';
import ScraperService from '../services/ScraperService.js';

export default Router()
  .get('/varagesale/results/:city/:searchTerm', ensureAuth, (req, res, next) => {
    ScraperService.fetchVarageSaleResults(req.params.city, req.params.searchTerm)
      .then(results => res.send(results))
      .catch(next);
  })

  .get('/craigslist/results/:searchTerm/:city', ensureAuth, (req, res, next) => {
    ScraperService.fetchSearchResults(req.params.searchTerm, req.params.city)
      .then(results => res.send(results))
      .catch(next);
  });

