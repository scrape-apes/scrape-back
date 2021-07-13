// import pool from '../lib/utils/pool.js';
// import setup from '../data/setup.js';
// import request from 'supertest';
// import app from '../lib/app.js';

// describe.skip('Auth routes', () => {
//   beforeAll(() => {
//     return setup(pool);
//   });

//   it('signs a user up and stores their info into the database', async () => {
//     const user = {
//       username: 'cabbott93@gmail.com',
//       password: 'password'
//     };
//     const { body } = await request(app)
//       .post('/api/auth/signup')
//       .send(user);

//     expect(body).toEqual({ id: '1', username: 'cabbott93@gmail.com' });
//   });

//   it('logs in a user that already has an account in the database', async () => {
//     const user = {
//       username: 'cabbott93@gmail.com',
//       password: 'password'
//     };

//     await request(app)
//       .post('/api/auth/signup')
//       .send(user);

//     const { body } = await request(app)
//       .post('/api/auth/login')
//       .send(user);

//     expect(body).toEqual({ id: '1', username: 'cabbott93@gmail.com' });

//     const invalidLoginRes = await request(app)
//       .post('/api/auth/login')
//       .send({ username: 'cabbott93@gmail.com', password: 'pword' });

//     expect(invalidLoginRes.body).toEqual({ message: 'Incorrect password', status: 500 });
//   });
// });
