const { SlashCommandBuilder } = require('@discordjs/builders');
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stat')
    .setDescription('Check or Increase your stats here'),
  async execute(interaction) {
    const strength = await db.get(`${user}.strength`) || 5;
    const max_hp = await db.get(`${interaction.user.id}.max_hp`) || 100;
    const stamina = await db.get(`${user}.stamina`) || 5;
    const magic = await db.get(`${user}.magic`);
    const mana = await db.get(`${user}.mana`) || 0;
    const defense = await db.get(`${user}.defense`) || 5;
    const luck = await db.get(`${user}.luck`) || 0;
    const point = await db.get(`${user}.point`) || 0;
    
    const stats = new MessageEmbed()
    .setTitle(`${interaction.user.tag}'s profile stats`)
    .setDescription(`You have ${point} to be spend, get more point when you level up!`)
    .addFields(
      { name: 'Strength:', value: `${strength}` },
      { name: 'Defense:', value: `${defense}` },
      { name: 'Health:', value: `${health}` },
      { name: 'Luck:', value: `${luck}` },
      { name: 'Stamina:', value: `${stamina}`},
      { name: 'Magic Power', value: `${magic}` },
      { name: 'Mana', value: `${mana}` }
     )
     .setColor('GREEN')
     .setFooter({ text: 'Increase your stats with point!' });

    await interaction.reply({ embeds: [stats] })
  }
}