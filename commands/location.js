const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('location')
    .setDescription('Check location from the map'),
  async execute(interaction) {
    const location = new MessageEmbed()
      .setTitle(`${interaction.user.tag}'s current location`)
      .setDescription(`Your current location right now is at **(____)**.\nTo travel to another location, use \`/travel\`\nTo see the world map, use \`/map\``)
      .setColor('GREEN')
      .setFooter({ text: 'Traveling require stamina, make sure to keep watch your stamina' });

    await interaction.reply({ embeds: [location] });
  }
}