import dotenv from 'dotenv';
dotenv.config()
import Discord from 'discord.js';
import { search, city } from './discord-utils.js';
import ScraperService from '../services/ScraperService.js';

const client = new Discord.Client();

const prefix = '!';
let searchTerm = '';
let cityTerm = '';

client.once('ready', () => {
  console.log('ready');
});

client.on('message', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content === '!scrape') {
    message.channel.send('Reply with "!scrape <search term> -c <city>');
  } else if (message.content.startsWith('!scrape ')) {
    searchTerm = search(message.content);
    cityTerm = city(message.content);
  }
  const results = await ScraperService.fetchSearchResults(searchTerm, cityTerm);
  console.log(results);
  message.channel.send(results.map(result => {
    return `${result.link}`;
  }));
});

// client.on('message', async (message) => {
//   if (!message.content.startsWith(prefix) || message.author.bot) return;
//   if (message.content === '!scrape') {
//     message.channel.send('Reply with "!scrape <search term>');
//   } else if (message.content.startsWith('!scrape ')) {
//     searchTerm = search(message.content);
//     await message.channel.send('What city?');
//     city = message.content;
//     console.log(city);
//   }
// });
// !search "red couch" -c "san diego"
// OR
// !search
// for what?
// !search term
// where?
// !in ur pants
// no valid city, get real
// !portland
// these are your results

client.login(process.env.DISCORD_TOKEN);