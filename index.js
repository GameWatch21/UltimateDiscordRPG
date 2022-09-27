const fs = require('fs');
const path = require('path');
const { Client, Collection, Intents } = require('discord.js');
// const { token } = require('./config.json');
// const testSchema = require('./schema/test-schema.js')
require('dotenv').config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();

const CommandPath = path.join(__dirname, 'commands');
const CommandFile = fs.readdirSync(CommandPath).filter(file => file.endsWith('.js'));

for (const file of CommandFile) {
  const FilePath = path.join(CommandPath, file);
  const command = require(FilePath);
  client.commands.set(command.data.name, command);
}

const EventPath = path.join(__dirname, 'events');
const EventFiles = fs.readdirSync(EventPath).filter(file => file.endsWith('.js'));

for (const file of EventFiles) {
  const FilePath = path.join(EventPath, file)
  const event = require(FilePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}
client.once('ready', () => {
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

// will be changed later for fork template
client.login(process.env.token)
