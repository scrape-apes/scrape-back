import { search } from '../lib/discord/discord-utils.js';

describe('discord utils tests', () => {
  
  it('takes in a discord command and outputs the search term', () => {
    const input1 = '!scrape chair';
    const output = search(input1);
    expect(output).toEqual('chair');

    const input2 = '!scrape red chair';
    const output2 = search(input2);
    expect(output2).toEqual('red chair');
  });
});
