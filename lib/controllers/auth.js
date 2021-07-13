import { Router } from 'express';
import AuthService from '../services/AuthService.js';

const fullDay = 1000 * 60 * 60 * 24;

export default Router()
  .post('/api/auth/signup', (req, res, next) => {
    AuthService.create(req.body)
      .then(results => {
        res.cookie('session', results.authToken(), {
          httpOnly: true,
          maxAge: fullDay
        });
        res.send(results);})
      .catch(next);
  })
  .post('/api/auth/login', (req, res, next) => {
    AuthService.authenticate(req.body)
      .then(results =>  {
        res.cookie('session', results.authToken(), {
          httpOnly: true,
          maxAge: fullDay
        });
        res.send(results);})
      .catch(next);
  });
