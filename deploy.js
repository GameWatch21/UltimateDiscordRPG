require('dotenv').config()
const fs = require('fs');
const path = require('path');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [];
const CommandPath = path.join(__dirname, 'commands');
const CommandFile = fs.readdirSync(CommandPath).filter(file => file.endsWith('.js'));

for (const file of CommandFile) {
  const FilePath = path.join(CommandPath, file);
  const command = require(FilePath);
  commands.push(command.data.toJSON());
};

const rest = new REST({ version: 9 }).setToken(process.env.token);

rest.put(Routes.applicationGuildCommands(process.env.clientId, process.env.guildId), { body: commands })
  .then(() => console.log('Commands has been registered'))
  .catch(console.error);