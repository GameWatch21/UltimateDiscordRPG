const { SlashCommandBuilder } = require('@discordjs/builders');

module.export = {
  data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Give the ping for bot'),
    async execute(interaction){
      await interaction.reply('Pong!');
    },
};