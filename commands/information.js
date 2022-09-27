const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton, MessageButtonStyle, MessageAttachment } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName('information')
  .setDescription('Give information about the Bot'),
  async execute(interaction){
    const link = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Our Hosting Partner!')
          .setURL('https://crvt.co/b')
					.setStyle('LINK'),
			);
    const information = new MessageEmbed()
    .setTitle('Information about CryptoCraft')
    .setDescription(`CryptoCraft is a Discord Server where you can earn crypto while playing game from discord! Before we implement this idea, CryptoCraft is a minecraft server that let player to earn crypto while they are playing minecraft. With the exact same ideas we bought minecraft simulation to discord and also implement our idea to gift player crypto for playing games and interacting with other player.\n\nOur bot hosting is provided by our friend from [creavite.co](https://crvt.co/b), with this our bot can online for 24 hours and run perfectly so that our player can play the game whenever they want!`)
    .setColor('GREEN')
    .setFooter({ text: 'Complete profile coming soon!' });

    await interaction.reply({ embeds: [information] , components: [link]});
  }
}