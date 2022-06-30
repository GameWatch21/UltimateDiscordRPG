//databases for map location, there will be so many
const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = {
  name: 'map',
  async execute(interaction) {
     const user = interaction.user.id;

     const plain = await db.get(`${user}.plain`) || false;
     const village_st = await db.get(`${user}.village_st`) || true;
    const village_ru = await db.get(`${user}.village_ru`) || false;
    const dessert = await db.get(`${user}.dessert`) || false;
    const tundra = await db.get(`${user}.tundra`) || false;
    const forest = await db.get(`${user}.forest`) || false;
    const cave = await db.get(`${user}.cave`) || false;
    const frosty_cave = await db.get(`${user}.frosty_cave`) || false
    const mountain = await db.get(`${user}.mountain`) || false;
    const volcano = await db.get(`${user}.mountain`) || false;
  },
};