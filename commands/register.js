const { SlashCommandBuilder } = require('@discordjs/builders');
const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = {
  data: new SlashCommandBuilder()
  .setName('register')
  .setDescription('Start your adventure, from here'),
  async execute(interaction){
    const skip = interaction.user.id
    const register = await db.get(`${interaction.user.id}.register`) || 0;
    if(register === 0){
      await interaction.reply({ content: `**[Zoe]**: Hey, thank you for registering ${interaction.user.tag}` })
      await interaction.followUp({ content: '**[Zoe]**: You should be able to see your `/profile` now' })
      await interaction.followUp({ content: '**[Zoe]**: Now, have fun adventuring!' })
      await db.set(`${skip}.register`, 1)
      await db.set(`${skip}.balance`, 0)
      await db.set(`${skip}.level`, 1)
      await db.set(`${skip}.job`, 'None')
      await db.set(`${skip}.exp`, 0)
      await db.set(`${skip}.energy`, 0)
    }
    if(register === 1) {
      await interaction.reply(`Oh, it's look like you already registered, check your \`/profile\``);
    }
  }
}