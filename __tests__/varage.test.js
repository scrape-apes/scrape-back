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
    // console.log(items.body);
  });

});
