import { Router } from 'express';
import ScraperService from '../services/ScraperService.js';

export default Router()
  .get('/:searchterm', (req, res, next) => {
    ScraperService.fetchSearchResults(req.params.searchterm)
      .then(results => res.send(results))
      .catch(next);
  });
  

