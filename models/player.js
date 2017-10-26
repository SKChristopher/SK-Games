const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://chris:123@ds235775.mlab.com:35775/sk-games', (err) => {
  if (err) return console.error(err);
  console.log('connected to mLabs remote');
});

const playerSchema = new Schema({
  color: { type: String, required: true },
  name: { type: String, required: true },
  searching: { type: Boolean, required: true },
});

const User = mongoose.model('Player', playerSchema);
moduel.exports = Player;
