import { Router } from 'express';
import Results from '../models/Results.js';
import ScraperService from '../services/ScraperService.js';

export default Router()
  .get('/:searchTerm/:city', (req, res, next) => {
    ScraperService.fetchSearchResults(req.params.searchTerm, req.params.city)
      .then(results => res.send(results))
      .catch(next);
  })
  .post('/', (req, res, next) => {
    Results.create(req.body)
      .then(results => res.send(results))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Results.getResultsByUserId(req.params.id)
      .then(results => res.send(results))
      .catch(next);
  })
  .put('/:id', (req, res, next) => {
    
  });

