const express = require("express")
const router = express.Router()
let quizController = require("./quiz.controller.js");

router.route("/").get(quizController.apiGetQuestions);
router.route("/choosequiz").get(quizController.GetQuesTypes);
router.post("/getquestionbyid",quizController.GetQuestionById);
router.post("/updatequestion", quizController.UpdateQuestion);
router.post("/deletequestion", quizController.DeleteQuestion);

module.exports = router