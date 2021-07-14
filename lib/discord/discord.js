import dotenv from 'dotenv';
dotenv.config();

import Discord from 'discord.js';
import { search } from 'discord-utils.js';

const prefix = '!';

let searchTerm = '';

const client = new Discord.Client();

client.once('ready', () => {
  console.log('ready');
});

client.on('message', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content === '!scrape') {
    message.channel.send('Reply with "!scrape <search term>');
  } else if (message.content.startsWith('!scrape ')) {
    searchTerm = message.content.split(' ').shift();
    console.log(searchTerm);
  }
});

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

client.login('ODY0OTA5ODkzMDk0MDgwNTIy.YO8UGw.171UxM3SQBcy3CxWrx8jefQEZWk');

// https://discord.com/oauth2/authorize?client_id=864909893094080522&scope=bot+applications.commands
