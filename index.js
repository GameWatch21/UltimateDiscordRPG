const { Client , Intents } = require('discord.js');
const { token } = require('./config.json')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () =>{
  console.log('UltimateRPG has online')
});

// will be changed later for fork template
client.login(process.env.token)
