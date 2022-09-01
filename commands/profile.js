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
        const job = await db.get(`${interaction.user.id}.class`) || 'None';
        const crypto = await db.get(`${interaction.user.id}.crypto`) || 0;
        const coin = await db.get(`${interaction.user.id}.coin`) || 0;
        const level = await db.get(`${interaction.user.id}.level`) || 1;
        const exp = await db.get(`${interaction.user.id}.exp`) || 0;
        const max_exp = await db.get(`${interaction.user.id}.max_exp`) || 100;
        const energy = await db.get(`${interaction.user.id}.energy`) || 10;
        const hp =  await db.get(`${interaction.user.id}.hp`) || 100;
        const max_hp = await db.get(`${interaction.user.id}.max_hp`) || 100; 

    //Progress bar section
    const hp1 = parseInt(hp);
    const max_hp1 = parseInt(max_hp);
    const exp1 = parseInt(exp);
    const max_exp1 = parseInt(max_exp);
    var size = 10;
    var health_bar = progressbar.filledBar(max_hp1, hp1, size);
    var exp_bar = progressbar.filledBar(max_exp1, exp1, size);

    //profile embed section
    const profile = new MessageEmbed()
      .setTitle(`${interaction.user.tag}'s profile`)
      .addFields(
        { name: 'Health:', value: `<:health:992622896335818842> ${health_bar}`},
        { name: 'Balance:', value: `<:coins:992622795114676254> ${balance}` },
        { name: 'Level:', value: `<:level:992625833091010670> ${level}` },
        { name: 'Experience:', value: `<:experience:992625777772331118> ${exp_bar}` },
      )
      .setFooter({ text: 'Complete profile coming soon!' })
      .setColor('BLUE');

    await interaction.reply({ embeds: [profile] });
  }
}