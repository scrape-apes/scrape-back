// import pool from '../lib/utils/pool.js';
// import setup from '../data/setup.js';
// import request from 'supertest';
// import app from '../lib/app.js';

describe('Route tests', () => {
  // const agent = request.agent(app);

  // beforeAll(async () => {
  //   await setup(pool);
  //   const user = {
  //     username: 'cabbott93@gmail.com',
  //     password: 'password'
  //   };

  //   await agent
  //     .post('/api/auth/signup')
  //     .send(user);
  // });
  
  function merge(prices, items) {
    return items.map((item, index) => {
      console.log(item, prices[index]);
      return { 
        ...item, price: prices[index]
      };
    }
    );
  }
  it('get items off offerUp', async () => {
    const prices = [1, 2, 3, 4, 5];
    const items = [{
      title: 'banana',
      link: 'tyigcv'
    }, {
      title: 'banana',
      link: 'tyigcv'
    }, {
      title: 'banana',
      link: 'tyigcv'
    }, {
      title: 'banana',
      link: 'tyigcv'
    }, {
      title: 'banana',
      link: 'tyigcv'
    }];

    const answer = merge(prices, items);
  

    expect(answer).toEqual([{
      title: 'banana',
      link: 'tyigcv',
      price: 1
    }, {
      title: 'banana',
      link: 'tyigcv',
      price: 2
    }, {
      title: 'banana',
      link: 'tyigcv',
      price: 3
    }, {
      title: 'banana',
      link: 'tyigcv',
      price: 4
    }, {
      title: 'banana',
      link: 'tyigcv',
      price: 5
    }]);
    // const items = await agent.get('/api/v1/results/offerup/couch');
    // const prices = [...document.querySelectorAll('.MuiTypography-body1')].map(prices => prices.textContent)


  });

});
