import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe.skip('Route tests', () => {
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

  it('get items off offerUp', async () => {
    const items = await agent.get('/api/v1/results/offerup/couch');

    console.log('THIS IS THE TEST', items.body);
  });

});
