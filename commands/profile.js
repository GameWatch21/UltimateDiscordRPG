const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require('discord.js');
const { balance, exp, level, job, energy } = require('./../models/user.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('profile')
    .setDescription('Check your RPG profile'),
  async execute(interaction) {
    /*
    const job = await db.get(`${interaction.user.id}.class`) || 'None';
    const balance = await db.get(`${interaction.user.id}.balance`) || 0;
    const level = await db.get(`${interaction.user.id}.level`) || 1;
    const exp = await db.get(`${interaction.user.id}.exp`) || 0;
    */
    const profile = new MessageEmbed()
      .setTitle(`${interaction.user.tag}'s profile`)
      .addFields(
        { name: 'Balance:', value: `${balance}` },
        { name: 'Level:', value: `${level}` },
        { name: 'Experience:', value: `${exp}` },
        { name: 'Energy:', value: `${energy}` },
        { name: 'Class:', value: `${job}` }
      )
      .setFooter({ text: 'Complete profile coming soon!' })
      .setColor('BLUE');

    await interaction.reply({ embeds: [profile] });
  }
}