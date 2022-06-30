const { SlashCommandBuilder } = require('@discordjs/builders');
const REST = require('@discordjs/rest');
const ROUTES = require('discord-api-types/v9');

const { ClientId , GuildId , token} = require('./config.json')

const commands = [
  new SlashCommandBuilder()
  .setName('test')
  .setDescription('Just for testing the slash command')
]
  .map(command => command.toJSON());

const rest = new REST({ version:9 }).setToken(process.env.token);

rest.put(ROUTES.applicationGuildCommands(process.env.ClientId , process.env.GuildId), { body: commands })
.then(() => console.log('Commands has been registered'))
.catch(console.error);