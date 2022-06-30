const fs = require('node:fs');
const path = requite('node:path');
const { SlashCommandBuilder } = require('@discordjs/builders');
const REST = require('@discordjs/rest');
const ROUTES = require('discord-api-types/v9');

const { ClientId , GuildId , token} = require('./config.json')

const commands = []
const CommandPath = path.join(__dirname, 'commands');
const CommandFile = fs.readdirSync(CommandPath).filter(file => file.endsWith('.js'));

for (const file of CommandFile){
  const FilePath = path.join(CommandPath, file);
  const command = require(FilePath);

  commands.push(command.data.toJSON());
}
const rest = new REST({ version:9 }).setToken(process.env.token);

rest.put(ROUTES.applicationGuildCommands(process.env.ClientId , process.env.GuildId), { body: commands })
.then(() => console.log('Commands has been registered'))
.catch(console.error);