import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('Route tests', () => {
  const agent = request.agent(app);

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

  it('get items off varage sale', async () => {
    const items = await agent.get('/api/v1/results/bike');
    expect(items.body.length).toBe(12);

    expect(items.body[0]).toEqual({
      title: expect.any(String),
      image: expect.any(String),
      price: expect.any(String),
      link: expect.any(String)
    });
  }, 10000);

});
