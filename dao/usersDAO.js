const { getMaxListeners } = require("../server");

let users;

class UsersDAO {
  static async injectDB(conn) {
    if (users) {
      return;
    }
    try {
      users = await conn
        .db(process.env.TESTSYSTEM_NS)
        .collection("users");
    } catch (e) {
      console.error(`Unable to extablish a collection handle in usersDAO: ${e}`);
    }
  }

  static async getUsers() {
    let query;
    let cursor;
    try {
      cursor = await users.find({query, "test_results" : {$exists:true}});
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { usersList: [], totalUsers: 0 };
    }

    try {
      const usersList = await cursor.toArray();
      const totalUsers = await users.countDocuments(query);
      return { usersList, totalUsers };
    } catch (e) {
      console.error(
        `Unable to convert to array or problem counting documents , ${e}`
      );
      return { usersList: [], totalUsers: 0 };
    }
  }


  static async EnterUserScore(type,email,score){
  
    try{
      const insertdata = await users.findOne(
        { email});
      if(insertdata.hasOwnProperty("test_results"))
       { 
        insertdata.test_results[type] = score
          
       await users.updateOne({email},{$set: insertdata})
      }
       else{
        await users.updateOne({email},{ $set: {test_results : {[type] : score}}})
       }
    }catch(e){
        console.log(e)
    }
  
  }
  
}

module.exports = UsersDAO;
