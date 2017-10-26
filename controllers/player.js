const Player = require('./../models/player');

const playerController = {
  ready: (req, res) => {
    Player.findOne({ color: !req.body.color }, (err, result) => {
      if (result === null) return res.status(200).send(false);
      else {
        Player.create({
          color: req.body.color,
          name: req.body.name,
          searching: req.body.searching,
        });
      }
    });
  },

  search: (req, res) => {
    Player.findOne({ searching: true }, (err, result) => {
      if (!result) return res.status(200).send(false);
      else if (result) return res.status(200).send(Math.floor(Math.random() * 100000));
    });
  },
};

module.exports = playerController;