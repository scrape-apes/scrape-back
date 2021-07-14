import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('Route tests', () => {
  const agent = request.agent(app);
  let items;
  beforeAll(async () => {
    await setup(pool);
    const user = {
      username: 'cabbott93@gmail.com',
      password: 'password'
    };

    await agent
      .post('/api/auth/signup')
      .send(user);
  });

  it('gets a list of couches from our scrapers', async () => {

    const city = 'Portland';
    const searchTerm = 'couch';
    items = await request(app)
      .get(`/api/v1/results/${searchTerm}/${city}`);


    expect(items.body.length).toBe(132);
    expect(items.body[0]).toEqual({
      title: expect.any(String),
      image: expect.any(String),
      price: expect.any(String),
      link: expect.any(String)
    });
  }, 14000);

  it('stores results from a users search via POST', async () => {
    
    const { body } = await agent
      .post('/api/v1/results')
      .send(items.body);

    expect(body).toEqual('');
  });
});
