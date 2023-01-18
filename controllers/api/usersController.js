const db = require("../../database/models");
const User = db.User;

const controller = {
  listAll: async function (req, res) {
    const users = await User.findAll({ attributes: { exclude: ["password","admin"] } })
    res.set('Access-Control-Allow-Origin', '*');
    return res.status(200).json({users: users, count: users.length });
  },
  listDetailed: async function (req, res){
    const { id } = req.params
    const user = await User.findOne({ attributes:{ exclude:["password","admin"]}, where: {id} })
    res.set('Access-Control-Allow-Origin', '*');
    res.json(user)
    
  }
};

module.exports = controller;
