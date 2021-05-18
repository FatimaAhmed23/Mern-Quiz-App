const userdao = require("../dao/usersDAO.js");

class UserController {

 static async EnterScore(req, res, next) {
    let type = req.body.type;
    let email = req.body.email;
    let score = req.body.score;
    
    const result = await userdao.EnterUserScore(type,email, score);

    let response = result;

    res.send(response);
  }
  static async getUsers(req, res, next) {
    
    const result = await userdao.getUsers();

    let response = result;

    res.send(response.usersList);
  }
  
}

module.exports = UserController;
