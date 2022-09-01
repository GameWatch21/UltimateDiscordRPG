const mongoose = require('mongoose');

module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    mongoose.connect(
      'mongodb+srv://GameWatch21:79xSISCQwq28oKY9@cryptocraft.jflkpdx.mongodb.net/?retryWrites=true&w=majority', 
      {
        keepAlive: true
      }
       );
    console.log("Database Connected!")
    console.log(`${client.user.tag} has online`);
  },
};