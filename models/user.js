//Quick.db related database with user
const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = {
  name: 'user',
  async execute(interaction) {
    const job = await db.get(`${interaction.user.id}.class`) || 'None';
    const balance = await db.get(`${interaction.user.id}.balance`) || 0;
    const level = await db.get(`${interaction.user.id}.level`) || 1;
    const exp = await db.get(`${interaction.user.id}.exp`) || 0;
    const energy = await db.get(`${interaction.user.id}.energy`) || 10;
  },
};

