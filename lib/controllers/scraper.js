import { Router } from 'express';
import ScraperService from '../services/ScraperService.js';

export default Router()
  .get('/:searchterm/:city', (req, res, next) => {
    ScraperService.fetchSearchResults(req.params.searchterm, req.params.city)
      .then(results => res.send(results))
      .catch(next);
  });
  
//comment

