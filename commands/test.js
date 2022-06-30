const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('balance')
  .setDescription('Check your balance! (Just testing)'),
  async execute(interaction){
     await interaction.reply('Your balance is 0');
  }
}