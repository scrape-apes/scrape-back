// import pool from '../lib/utils/pool.js';
// import setup from '../data/setup.js';
// import request from 'supertest';
// import app from '../lib/app.js';
import offerUpScraper from '../lib/utils/offerUpScraper.js';

describe.only('Route tests', () => {
  it('get items off offerUp', async () => {
    const actual = await offerUpScraper('chair');
    console.log('actual', actual, actual.length);

    expect(actual).toEqual(expect.arrayContaining([{
      title: expect.any(String),
      link: expect.any(String),
      price: expect.any(String),
      image: expect.any(String)
    }]));
  });

});
