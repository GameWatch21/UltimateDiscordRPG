const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = {
  async execute(interaction) {
     //Resources section
   const wood = await db.get(`${interaction.user.id}.wood`) || 0;
   const stone = await db.get(`${interaction.user.id}.stone`) || 0;
   const metal = await db.get(`${interaction.user.id}.metal`) || 0;
   const pearl = await db.get(`${interaction.user.id}.pearl`) || 0;
   const dirt = await db.get(`${interaction.user.id}.dirt`) || 0;
   const clay = await db.get(`${interaction.user.id}.clay`) || 0;
    
    //Tool sections
    const axe = await db.get(`${interaction.user.id}.axe`) || 0;
    const pickaxe = await db.get(`${interaction.user.id}.pickaxe`) || 0;
    const shovel = await db.get(`${interaction.user.id}.shovel`) || 0;

    //Weapon sections
    const wooden_sword = await db.get(`${interaction.user.id}.wooden_sword`) || 0;
    const bow = await db.get(`${interaction.user.id}.bow`) || 0;
    const wooden_staff = await db.get(`${interaction.user.id}.wooden_staff`) || 0;
    const wooden_shield = await db.get(`${interaction.user.id}.wooden_shield`) || 0;
    const rusty_sword = await db.get(`${interaction.user.id}.rusty_sword`) || 0;
    const magic_staff = await db.get(`${interaction.user.id}.magic_staff`) || 0;
    const crossbow = await db.get(`${interaction.user.id}.crossbow`) || 0;
    const shield = await db.get(`${interaction.user.id}.shield`) || 0;
  }
}