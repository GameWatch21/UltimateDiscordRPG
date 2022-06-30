const fs = require('node:fs')
const path = require('node:path')
const { Client , Collection , Intents } = require('discord.js');
const { token } = require('./config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();

const CommandPath = path.join(__dirname, 'commands');
const CommandFile = fs.readdirSync(CommandPath).filter(file => file.endsWith('.js'));

for (const file of CommandFile){
  const FilePath = path.join(CommandPath , file);
  const command = require(FilePath);

  client.commands.set(command.data.setName, command)
}

client.once('ready', () =>{
  console.log('UltimateRPG has online')
});

client.on('interactionCreate' , async interaction => {
  if(!interaction.isCommand()) return;

  const command = client.commands.get(interaction.CommandName);
  if(!command) return;
  try {
    await command.execute(interaction);
  } catch (error) {
      console.error(error)
      await interaction.reply({ content: 'There is an error after executing this command', ephemeral: true});
  }
});

// will be changed later for fork template
client.login(process.env.token)
