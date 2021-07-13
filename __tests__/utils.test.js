import { citySimple } from '../lib/utils/utils.js';

describe('general utilities', () => {

  it('removes spaces from location names', () => {
    const loc1 = 'New York';
    const loc2 = 'San Francisco';
    const loc3 = 'San Luis Obispo';

    expect(citySimple(loc1)).toEqual('NewYork');
    expect(citySimple(loc2)).toEqual('SanFrancisco');
    expect(citySimple(loc3)).toEqual('SanLuisObispo');
  });
});
