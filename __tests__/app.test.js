import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('Route tests', () => {
  const agent = request.agent(app);
  let items;
  let user;
  beforeAll(async () => {
    await setup(pool);
    const newUser = {
      username: 'cabbott93@gmail.com',
      password: 'password'
    };

    user = await agent
      .post('/api/auth/signup')
      .send(newUser);
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
    const userId = user.body.id;
   
    const { body } = await agent
      .post('/api/v1/results')
      .send({  userId, results: items.body });

    expect(body).toEqual({ resultsId: '1', userId: '1', results: items.body });
  });

  it('gets all stored search results from a user via GET', async () => {
    const userId = user.body.id;
    const { body } = await agent
      .get(`/api/v1/results/${userId}`);

    expect(body).toEqual([{ resultsId: '1', userId: '1', results: items.body }]);
  });

  it('deletes results from search by id', async () => {
    const { body } = await agent
      .delete('/api/v1/results/1')
    
    expect(body).toEqual({ resultsId: '1', userId: '1', results: items.body })

  })
});
