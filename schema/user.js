//Quick.db related database with user
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    discordId: {
      type: String,
      required: true
    },
    coins: {
      type: Number
    },
    experience: {
      type: Number
    },
    {
      location: {
        type: String
      }
    }
})

module.exports = mongoose.model('user', userSchema)