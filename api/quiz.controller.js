const quizdao = require("../dao/quizDAO.js");

class QuizController {
  static async apiGetQuestions(req, res, next) {
    let filters = {};

    if (req.query.type) {
      filters.type = req.query.type;
    } else if (req.query.dflevel) {
      filters.dflevel = req.query.dflevel;
    }

    const { questionslist, totalNumQuestions } = await quizdao.getQuestions({
      filters,
    });

    let response = {
      questions: questionslist,
      total_results: totalNumQuestions,
    };

    res.json(response);
  }

  static async GetQuesTypes(req, res, next) {
    const types = await quizdao.getQuizTypes();

    let response = {
      quiz_types: types,
    };

    res.json(response);
  }

  static async GetQuestionById(req, res, next) {
    const quesobject = await quizdao.getQuestionById(req.body.id);

    let response = {
      questionObject: quesobject,
    };

    res.json(response);
  }

  static async UpdateQuestion(req, res, next) {
   let response = await quizdao.updateQuestionById(req.body.data);
   res.send(response);
  }

  static async DeleteQuestion(req,res,next){
    let response = await quizdao.deleteQuestionById(req.body.id);
    res.send(response);
  }
}

module.exports = QuizController;