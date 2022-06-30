const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('profile')
  .setDescription('Check your RPG profile'),
  async execute(interaction){
     
     const profile = new MessageEmbed()
    .setTitle(`${interaction.user.tag}'s profile`)
    .addFields(
      {name: 'Balance:', value: '0'},
      {name: 'Level:', value: '1'}
    )
    .setFooter({ text: 'This is just a template' })
    .setColor('RED')

    await interaction.reply({ embeds: [profile] });
  }
}