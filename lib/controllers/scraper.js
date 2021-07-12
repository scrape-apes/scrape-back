import { Router } from 'express';
import ensureAuth from '../middleware/ensureAuth.js';
import ScraperService from '../services/ScraperService.js';

export default Router()

  .get('/:searchTerm', (req, res, next) => {
  
    ScraperService.fetchVarageSaleResults(req.params.searchTerm)
      .then(results => res.send(results))
      .catch(next);
  })

  .get('/:searchterm/:city?', ensureAuth, (req, res, next) => {

    ScraperService.fetchSearchResults(req.params.searchterm, req.params.city)
      .then(results => res.send(results))
      .catch(next);
  });

