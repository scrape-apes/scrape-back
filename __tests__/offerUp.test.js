// import pool from '../lib/utils/pool.js';
// import setup from '../data/setup.js';
// import request from 'supertest';
// import app from '../lib/app.js';
import offerUpScraper from '../lib/utils/offerUpScraper.js';

describe.skip('Route tests', () => {
  it('get items off offerUp', async () => {
    const actual = await offerUpScraper('couch');
    console.log('actual', actual);

    expect(actual).toEqual([{
      title: expect.any(String),
      link: expect.any(String),
      price: expect.any(String),
    }, {
      title: expect.any(String),
      link: expect.any(String),
      price: expect.any(String),
    }, {
      title: expect.any(String),
      link: expect.any(String),
      price: expect.any(String),
    }, {
      title: expect.any(String),
      link: expect.any(String),
      price: expect.any(String),
    }, {
      title: expect.any(String),
      link: expect.any(String),
      price: expect.any(String),
    }]);
  }, 45000);

});
