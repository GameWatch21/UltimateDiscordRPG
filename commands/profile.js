const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton, MessageAttachment } = require('discord.js');
const progressbar = require('string-progressbar');
// const user = require('./../models/user.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB();


module.exports = {
  data: new SlashCommandBuilder()
    .setName('profile')
    .setDescription('Check your RPG profile'),
  async execute(interaction) {
        const location = await db.get(`${interaction.user.id}.location`) || 'Grassland';
        const crypto = await db.get(`${interaction.user.id}.crypto`) || 0;
        const coin = await db.get(`${interaction.user.id}.coin`) || 0;
        const level = await db.get(`${interaction.user.id}.level`) || 1;
        const exp = await db.get(`${interaction.user.id}.exp`) || 0;
        const max_exp = await db.get(`${interaction.user.id}.max_exp`) || 100;

    //profile embed section
    const profile = new MessageEmbed()
      .setTitle(`${interaction.user.tag}'s profile`)
      .setDescription(`Right now, you are at the **${location}**, here are your current profile status`)
      .addFields(
        { name: 'Coin:', value: `${coin}` },
        { name: 'Crypto:', value: `${crypto}`},
        { name: 'Level:', value: `${level}` },
        { name: 'Experience:', value: `${exp} / ${max_exp}` },
      )
      .setFooter({ text: 'Complete profile coming soon!' })
      .setColor('BLUE');

    await interaction.reply({ embeds: [profile] });
  }
}