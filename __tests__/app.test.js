import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe.skip('Route tests', () => {
  beforeAll(() => {
    return setup(pool);
  });
  
  it('gets a list of couches from craigslist', async () => {
    // gets a couch list from craigslist
    const couch = await request(app).get('/api/v1/results/couch');

    // checks to see if we received all first page entries
    expect(couch.body.length).toBe(120);

    // checks to see if our data comes back in the correct format
    expect(couch.body[0]).toEqual({
      title: expect.any(String),
      image: expect.any(String),
      price: expect.any(String),
      link: expect.any(String)
    });
  });

});
