import { Router } from 'express';
import AuthService from '../services/AuthService.js';

export default Router()
  .post('/api/auth/signup', (req, res, next) => {
    AuthService.create(req.body)
      .then(results => res.json(results))
      .catch(next);
  });
