import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('Auth routes', () => {
  beforeAll(() => {
    return setup(pool);
  });
  
  it('signs a user up and stores their info into the database', async () => {
    const user = {
      username: 'cabbott93@gmail.com',
      password: 'password'
    };
    const { body } = await request(app)
      .post('/api/auth/signup')
      .send(user);

    expect(body).toEqual({ id: '1', username: 'cabbott93@gmail.com' });
  });
});
