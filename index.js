const { Client , Intents } = require('discord.js');
const { token } = require('./config.json')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () =>{
  console.log('UltimateRPG has online')
});

client.on('interactionCreate' , async interaction => {
  if(!interaction.isCommand()) return;

  const { commandName } = interaction;

  if(commandName == 'test'){
    await interaction.reply('The command is working');
  }
});

// will be changed later for fork template
client.login(process.env.token)
