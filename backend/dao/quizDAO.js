let test;
const mongodb = require("mongodb");
class QuizDAO {
  static async injectDB(conn) {
    if (test) {
      return;
    }
    try {
      test = await conn
        .db(process.env.TESTSYSTEM_NS)
        .collection("quiz_questions");
    } catch (e) {
      console.error(`Unable to extablish a collection handle in testDAO: ${e}`);
    }
  }

  static async getQuestions({ filters = null } = {}) {
    let query;
    if (filters) {
      if ("type" in filters) {
        query = { type: { $eq: filters["type"] } };
      } else if ("dflevel" in filters) {
        query = { dflevel: { $eq: filters["dflevel"] } };
      }
    }

    let cursor;
    try {
      cursor = await test.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { questionslist: [], totalNumQuestions: 0 };
    }

    try {
      const questionslist = await cursor.toArray();
      const totalNumQuestions = await test.countDocuments(query);
      return { questionslist, totalNumQuestions };
    } catch (e) {
      console.error(
        `Unable to convert to array or problem counting documents , ${e}`
      );
      return { questionslist: [], totalNumQuestions: 0 };
    }
  }

  static async getQuizTypes() {
    try {
      let query = test.distinct("type");
      return query;
    } catch (e) {
      console.error(e);
      return "";
    }
  }

  static async getQuestionById(id) {
    let query;

    try {
      query = await test.findOne({ _id: mongodb.ObjectId(id) });
      return query;
    } catch (e) {
      console.error(e);
      return "";
    }
  }

  static async updateQuestionById(data) {
   let query;
   

     try {
       if (data._id != undefined) {
         let id = mongodb.ObjectId(data._id);
         delete data._id;
         if (data.lastModified) {
           delete data.lastModified;
         }
         query = await test.updateOne(
           { _id: id },
           {
             $set: data,
             $currentDate: { lastModified: true },
           }
         );
       } else {
         query = await test.insert(data);
       }
       return "successfully updated";
     } catch (e) {
       console.error(e);
       return "error";
     }
  }

  static async deleteQuestionById(id){
   let query;
   try {
     query = await test.deleteOne({ _id: mongodb.ObjectId(id) });
     return "success";
   } catch (e) {
     console.error(e);
     return e;
   }
  }
}


module.exports = QuizDAO;
