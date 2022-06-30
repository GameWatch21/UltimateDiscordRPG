const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
        .setName('Test')
        .setDescription('Just for testing the slash command'),
   async execute(interaction) {
     await interaction.reply('V2 for testing command work');
   },
};