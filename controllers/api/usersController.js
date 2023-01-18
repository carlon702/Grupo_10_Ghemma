const db = require("../../database/models");
const User = db.User;

const controller = {
  listAll: async function (req, res) {
    const users = await User.findAll();
    res.set('Access-Control-Allow-Origin', '*');
    res.json(users);
  },
  listDetailed: async function (req, res){
    const { id } = req.params
    const user = await User.findOne({where: {id} })
    res.set('Access-Control-Allow-Origin', '*');
    res.json(user)
  }
};

module.exports = controller;
