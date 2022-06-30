const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('market')
  .setDescription('Buy various items here'),
  async execute(interaction){
     await interaction.reply('Coming Soon');
  }
}