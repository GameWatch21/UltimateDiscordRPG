const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = {
    data: new SlashCommandBuilder()
    .setName("Balance")
    .setDescription("Check your balance"),
    async execute(interaction){
       const coin = await db.get(`${interaction.user.id}.coin`) || 0
       const balance = new MessageEmbed()
       .setTitle(`${interaction.user.username}'s Balance`)
       .setDescription(`Coin: ${coin}`)
       .setFooter('Enjoy your Balance');

       await interaction.reply({ embeds: [balance] });
    }
}