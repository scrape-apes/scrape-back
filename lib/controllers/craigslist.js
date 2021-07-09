import { Router } from 'express';
import CraigsListService from '../services/CraigsListService.js';

export default Router()
  .get('/:searchterm', (req, res, next) => {
    CraigsListService.fetchSearchResults(req.params.searchterm)
      .then(results => res.send(results))
      .catch(next);
  });
  

