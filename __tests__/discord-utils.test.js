import { search, city } from '../lib/discord/discord-utils.js';

describe('discord utils tests', () => {
  
  it('takes in a discord command and outputs the city', () => {
    const input1 = '!scrape chair -c portland';
    const output = city(input1);
    expect(output).toEqual('portland');

    const input2 = '!scrape red chair -c seattle';
    const output2 = city(input2);
    expect(output2).toEqual('seattle');
  });

  it('takes in a discord command and outputs the search term', () => {
    const input1 = '!scrape chair';
    const output = search(input1);
    expect(output).toEqual('chair');

    const input2 = '!scrape red chair';
    const output2 = search(input2);
    expect(output2).toEqual('red chair');
  });
});
