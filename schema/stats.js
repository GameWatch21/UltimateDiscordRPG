//database for user statistic for battle
const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = {
  async execute(interaction){
    const user = interaction.user.id
    const strength = await db.get(`${user}.strength`) || 5;
     const max_hp = await db.get(`${interaction.user.id}.max_hp`) || 100; 
    const stamina = await db.get(`${user}.stamina`) || 5;
    const magic = await db.get(`${user}.magic`);
    const mana = await db.get(`${user}.mana`) || 0;
    const defense = await db.get(`${user}.defense`) || 5;
    const luck = await db.get(`${user}.luck`) || 0;
    const point = await db.get(`${user}.point`) || 0;
  }
}