import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('Route tests', () => {
  // const agent = request.agent(app);

  beforeAll(async () => {
    // await setup(pool);
    // const user = {
    //   username: 'cabbott93@gmail.com',
    //   password: 'password'
    // };

    // await agent
    //   .post('/api/auth/signup')
    //   .send(user);
  });

  it('gets a list of couches from craigslist', async () => {
    // gets a couch list from craigslist

    // const couch = await agent.get('/api/v1/results/couch%20brown/Portland');
    // expect(couch.body.length).toBe(120);

    // // checks to see if our data comes back in the correct format
    // expect(couch.body[0]).toEqual({
    //   title: expect.any(String),
    //   image: expect.any(String),
    //   price: expect.any(String),
    //   link: expect.any(String)
    // });

    const city = 'Portland';
    const searchTerm = 'bike';
    const items = await request(app)
      .get(`/api/v1/results/${searchTerm}/${city}`);

    // expect(items.body.length).toBe(12);
    console.log(items.body.length);
    expect(items.body[0]).toEqual({
      title: expect.any(String),
      image: expect.any(String),
      price: expect.any(String),
      link: expect.any(String)
    });
  }, 14000);

});
