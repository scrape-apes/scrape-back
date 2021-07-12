import { Router } from 'express';
import ensureAuth from '../middleware/ensureAuth.js';
import ScraperService from '../services/ScraperService.js';

export default Router()
  .get('/:searchterm', ensureAuth, (req, res, next) => {
    console.log('scraper.js', req.user);
    ScraperService.fetchSearchResults(req.params.searchterm)
      .then(results => res.send(results))
      .catch(next);
  });


