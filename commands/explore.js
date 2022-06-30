const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('explore')
  .setDescription('Exploring on current location'),
  async execute(interaction){
     await interaction.reply('Coming soon');
  }
}